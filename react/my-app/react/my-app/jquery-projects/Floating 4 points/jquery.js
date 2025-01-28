function animate(){
    setTimeout(function(){
        $('.div2').animate({top: '10px'}, 500, function(){
            $(this).animate({top: '0px'}, 500)});
    }, 500);
    setTimeout(function(){
        $('.div3').animate({top: '10px'}, 500, function(){
            $(this).animate({top: '0px'}, 500)});
    }, 600);
    setTimeout(function(){
        $('.div4').animate({top: '10px'}, 500, function(){
            $(this).animate({top: '0px'}, 500)});
    }, 700);
    setTimeout(function(){
        $('.div5').animate({top: '10px'}, 500, function(){
            $(this).animate({top: '0px'}, 500)});
    }, 800);
}
setInterval(animate, 1000)