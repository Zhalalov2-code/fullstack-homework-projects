
function kichineKrug() {
    $('.div1').animate({
        width: '100px',
        height: '100px',
        left: '700px',
        top: '250px'
    }, function () {
        $(this).animate({
            width: '120px',
            height: '120px',
            left: '690px',
            top: '240px'
        }, 500);
    });
}
function chogkrug() {
    $('.div2').css({
        width: '100px',
        height: '100px',
        left: '10px',
        top: '10px',
        visibility: 'hidden'
    }).css('visibility', 'visible').fadeIn(function () {
        $(this).animate({
            width: '180px',
            height: '180px',
            left: '-30px',
            top: '-30px'
        }, 1000, function () {
            $(this).fadeOut(1000);
        });
    });
}

kichineKrug();
chogkrug();
function obsi(){
    kichineKrug();
    chogkrug();
}
setInterval(obsi, 2500)
