function animateDivs() {
    $('.div1').fadeOut(500).fadeIn(500);
    setTimeout(function () { $('.div2').fadeOut(500).fadeIn(500); }, 250);
    setTimeout(function () { $('.div3').fadeOut(500).fadeIn(500); }, 500);
    setTimeout(function () { $('.div4').fadeOut(500).fadeIn(500); }, 750);
    setTimeout(function () { $('.div5').fadeOut(500).fadeIn(500); }, 1000);
    setTimeout(function () { $('.div6').fadeOut(500).fadeIn(500); }, 1250);
    setTimeout(function () { $('.div7').fadeOut(500).fadeIn(500); }, 1500);
    setTimeout(function () { $('.div8').fadeOut(500).fadeIn(500); }, 1750);
    setTimeout(function () { $('.div9').fadeOut(500).fadeIn(500); }, 2000);
    setTimeout(function () { $('.div10').fadeOut(500).fadeIn(500); }, 2250);
    setTimeout(function () { $('.div11').fadeOut(500).fadeIn(500); }, 2500);
    setTimeout(function () { $('.div12').fadeOut(500).fadeIn(500); }, 2750);
}

animateDivs();
setInterval(animateDivs, 3000);

