let etaj1 = $('.etaj1');
let etaj2 = $('.etaj2');
let etaj3 = $('.etaj3');
let etaj4 = $('.etaj4');
let etaj5 = $('.etaj5');
let etaj6 = $('.etaj6');
let etaj7 = $('.etaj7');
let etaj8 = $('.etaj8');
let etaj9 = $('.etaj9');
let etaj10 = $('.etaj10');
let etaj11 = $('.etaj11');
let etaj12 = $('.etaj12');
let lift = $('.lift');

function calculateLift(){
    $('#calculatebtn').click(function(){
        let inputValue = $('input').val();
        let result;
        
        if (inputValue === '1'){
            result = '1 этаж бесплатный';
        }else if(inputValue >= 2 && inputValue <= 12){
            let cost = (inputValue - 1) * 20 ;
            result = `${inputValue} этажа: С вас ${cost} сом`;
        } else {
            result = 'Пожалуйста, введите этаж от 1 до 12.';
        }

        $('#resultText').text(result);
        $('#resultModal').modal('show');
    })
}
function liftvalue(){
    $('#OkBtn').click(function(){
        let inputvalue = $('input').val();
        if (inputvalue === '1'){
            lift.animate({  
                top: '550px'
            })
        }else if (inputvalue === '2'){
            lift.animate({
                top: '500px'
            })
        }else if (inputvalue === '3'){
            lift.animate({
                top: '450px'
            })
        }else if (inputvalue === '4'){
            lift.animate({
                top: '400px'
            })
        }else if (inputvalue === '5'){
            lift.animate({
                top: '350px'
            })
        }else if (inputvalue === '6'){
            lift.animate({
                top: '300px'
            })
        }else if (inputvalue === '7'){
            lift.animate({
                top: '250px'
            })
        }else if (inputvalue === '8'){
            lift.animate({
                top: '200px'
            })
        }else if (inputvalue === '9'){
            lift.animate({
                top: '150px'
            })
        }else if (inputvalue === '10'){
            lift.animate({
                top: '100px'
            })
        }else if (inputvalue === '11'){
            lift.animate({
                top: '50px'
            })
        }else if (inputvalue === '12'){
            lift.animate({
                top: '0px'
            })
        }
    })
}
calculateLift();
liftvalue();
