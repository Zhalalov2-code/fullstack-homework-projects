$('#btn').click(function(){
    let number1 = parseFloat($('#input1').val());
    let operation = $('#input2').val();
    let number2 = parseFloat($('#input3').val());
    let result;

    if (operation === '+'){
        result = number1 + number2;
    }else if (operation === '-'){
        result = number1 - number2;
    }else if (operation === '*'){
        result = number1 * number2;
    }else if (operation === '/'){
        result =    number2 !== 0 ? number1 / number2: 'Ошибка: Деление на ноль';
    }else{
        result = 'Ошибка: Неверная операция';
    }

    $('#otvet').html('результат: '+ result);
    $('#input1').val('')
    $('#input2').val('')
    $('#input3').val('')
});
