function anime(){
    function chogkrug(){
        $('.div1').animate({
            width: '0px',
            height: '0px',
            opacity: '0.1',
            left: '20px',
            top: '20px'
        }, function(){
            $(this).animate({
                width: '400px',
                height: '400px',
                opacity: '0.1',
                left: '-180px',
                top: '-170px'
            }, 2000);
        });
    }
    function kichineKrug(){
        $('.div3').animate({
            width: '35px',
            height: '35px',
            left: '17px',
            top: '17px'
        }, function(){
            $(this).animate({
                width: '40px',
                height: '40px',
                left: '14px',
                top: '15px'
            })
        })
    }
    chogkrug();
    kichineKrug();
}
setInterval(anime, 2500)
