$('.left').click(function(){
    $('.div1').animate({
        left: '0vh'
    }, 500);
    $('.div1').fadeIn();
});

$('.bottom').click(function(){
    $('.div2').animate({
        width: '1528px',
        height: '300px',
        top: '438px'
    }, 500);
    $('.div2').fadeIn();
});

$('.bigdiv').click(function(){
    $('.div1').animate({
        width: '0px',
        height: '738px'
    }, 500);
    $('.div1').fadeOut();
});
