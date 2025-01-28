function data(){
    let now = new Date();

    let day = now.getDate();
    let monath = now.getMonth() + 1;
    let year = now.getFullYear();

    if (day < 10){
        day = '0' + day;
    }
    if (monath < 10){
        monath = '0' + monath;
    }

    document.getElementById('p1').innerHTML = 'Сегодня: ' + day + '-' +  monath + '-' + year;
}

function time(){
    let now = new Date();

    let hours = now.getHours();
    let input = document.getElementById('in1').value;
    let var1 = 'Доброе утро,' + input;
    let var2 = 'Добрый день,' + input;
    let var3 = 'Добрый вечер! ' + input;
    let var4 = 'Доброй ночи,' + input;
    let message;

    if (hours >= 7 && hours < 11){
        message = var1;
    } else if (hours >= 11 && hours < 20){
        message = var2;
    } else if (hours >= 20 && hours < 24){
        message = var3;
    } else{
        message = var4;
    }

    document.getElementById('p2').innerHTML = message;
}

function monath(){
    let input = document.getElementById('in2').value;
    let message;

    if (input == 1){
        message = 'Январь';
    } else if (input == 2){
        message = 'Февраль';
    } else if (input == 2){
        message = 'Февраль';
    } else if (input == 3){
        message = 'Март';
    } else if (input == 4){
        message = 'Апрель';
    } else if (input == 5){
        message = 'Май';
    } else if (input == 6){
        message = 'Июнь';
    } else if (input == 7){
        message = 'Июль';
    } else if (input == 8){
        message = 'Август';
    } else if (input == 9){
        message = 'Сентябрь';
    } else if (input == 10){
        message = 'Октябрь';
    } else if (input == 11){
        message = 'Ноябрь';
    } else if (input == 12){
        message = 'Декабрь';
    }

    document.getElementById('p3').innerHTML = message;
}