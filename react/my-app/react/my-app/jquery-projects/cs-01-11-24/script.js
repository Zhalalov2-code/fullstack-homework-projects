function strelka() {
    let rotatePosition = 0; 
    const rotationSpeed = 10;

    function rotateDiv() {
        rotatePosition = (rotatePosition + rotationSpeed) % 360; 
        $('.div3').css('transform', 'rotate(' + rotatePosition + 'deg)');
    }

    let rotationInterval = setInterval(rotateDiv, 100);

    $('.div3').hover(
        function () {
            clearInterval(rotationInterval);
        },
        function () {
            rotationInterval = setInterval(rotateDiv, 100);
        }
    );
}

$(document).ready(function() {
    strelka();
});
