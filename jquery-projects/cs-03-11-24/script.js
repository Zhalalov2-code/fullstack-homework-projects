function rotateKub(){
    let rotateX = $('#in1').val() || 0;
    let rotateY = $('#in2').val() || 0;
    let rotateZ = $('#in3').val() || 0; 
    let leftORright = $('#in4').val() || 0;
    let topORbottom = $('#in5').val() || 0;
    let size = $('#in6').val() || 300;
    let border = $('#in7').val() || 0;
    let transitionX = $('#transation1').val() || '1s';
    let transitionY = $('#transation2').val() || '1s';
    let transitionZ = $('#transation3').val() || '1s';
    let kub = $('.krug');

    kub.css({
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`,
        left: `${leftORright}px`,
        top: `${topORbottom}px`,
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: `${border}px`,
        transition: `transform${transitionX}, left${transitionY}, top${transitionY}, width${transitionZ}, height${transitionZ}, border-radius${transitionZ}`
    });
    $('.krug > div').css({
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: `${border}px`,
        transition: `width ${transitionZ}, height ${transitionZ}, border-radius ${transitionZ}`
    });
}
$('#in1, #in2, #in3, #in4, #in5, #in6, #in7, #transation1, #transation2, #transation3').on('input', rotateKub);
