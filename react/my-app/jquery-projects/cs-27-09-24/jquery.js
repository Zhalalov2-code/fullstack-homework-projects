function cloud(){
    $('.cloud').css({left: '0'});
    $('.cloud').animate({
        left: $(window).width()
    }, 5000, function(){
        cloud();
    });
}
function cloud1(){
    $('.cloud1').css({left: '0'});
    $('.cloud1').animate({
        left: $(window).width()
    }, 5050, function(){
        cloud1();
    });
}
function ptisa(){
    $('.ptisa').css({right: '0'});
    $('.ptisa').animate({
        right: $(window).width()
    }, 5000, function(){
        ptisa();
    })
}
function ptisa1(){
    $('.ptisa1').css({right: '0'});
    $('.ptisa1').animate({
        right: $(window).width()
    }, 5050, function(){
        ptisa1();
    })
}
cloud();
cloud1();
ptisa();
ptisa1();