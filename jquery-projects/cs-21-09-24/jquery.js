$('button').click(function(){
    $('#div1').fadeToggle(3000);
    $('#div2').fadeToggle(5000);
    $('#div3').fadeToggle(7000);
});

let $ball = $('.ball');

function animateBall() {
    $ball.animate({ left: '50px', top: '10px' }, 1000, function() {
        $ball.animate({ left: '100px', top: '200px' }, 1000, function() {
            $ball.animate({ left: '150px', top: '40px' }, 1000, function() {
                $ball.animate({ left: '200px', top: '200px' }, 1000, function() {
                    $ball.animate({ left: '250px', top: '60px' }, 1000, function() {
                        $ball.animate({ left: '300px', top: '200px' }, 1000, function() {
                            $ball.animate({ left: '350px', top: '100px' }, 1000, function() {
                                $ball.animate({ left: '400px', top: '200px' }, 1000, function(){
                                    $ball.fadeOut(500, function () { 
                                        $ball.css({left: '0px', top: '200px'});
                                        $ball.fadeIn(500, function(){
                                            setTimeout(animateBall, 1000);
                                        })
                                     })
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}

    
setTimeout(() => {
    animateBall();
}, 1000);
