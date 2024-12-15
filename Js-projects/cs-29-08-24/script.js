///Задание 1
function seconds3() {
    document.getElementById('p1').innerHTML = 'Добро пожаловть!';
};

document.getElementById('b1').onclick = function () {
    setTimeout(seconds3, 3000);
};
///Задание 2
let counter = 10;

function updateCounter() {
    if (counter > 0) {
        document.getElementById('p2').innerHTML = counter;;
        counter--;
        setTimeout(updateCounter, 1000);
    } else {
        document.getElementById('p2').innerHTML = 'Добро пожаловать!';
    };
};
document.getElementById('b2').onclick = function () {
    updateCounter();
};
///Задание 3
let currentlight = 'red';
let intervaltraffic = {
    'red': 5000,
    'yellow': 3000,
    'green': 5000
};

function changelight() {
    document.getElementById('red').style.backgroundColor = 'gray';
    document.getElementById('yellow').style.backgroundColor = 'gray';
    document.getElementById('green').style.backgroundColor = 'gray';

    if (currentlight === 'red') {
        document.getElementById('red').style.backgroundColor = 'red';
        currentlight = 'yellow';
    } else if (currentlight === 'yellow') {
        document.getElementById('yellow').style.backgroundColor = 'yellow';
        currentlight = 'green';
    } else if (currentlight === 'green') {
        document.getElementById('green').style.backgroundColor = 'green';
        currentlight = 'red';
    }
};

function startTraffic() {
    function cycletraffic() {
        changelight();

        setTimeout(cycletraffic, intervaltraffic[currentlight]);
    }
    cycletraffic();
}

startTraffic();
