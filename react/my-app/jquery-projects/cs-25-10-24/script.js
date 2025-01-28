function ball() {
    $('.div1').animate({
        top: '120px',
        width: '80px'
    }, 150, function() {
        $(this).animate({
            top: '300px'
        }, 150, function() {
            $(this).animate({
                width: '180px',
                left: '650px'
            }, 50, function() {
                $(this).animate({
                    width: '80px',
                    left: '700px'
                }, 50);
            });
        });
    });
}
ball();
setInterval(ball, 500); 
