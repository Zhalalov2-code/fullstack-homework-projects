///Задание 1
let remainTime = 0;
let intervalId = null;

function updateTimer(){
    let hrs = Math.floor(remainTime / 3600);
    let mins = Math.floor((remainTime % 3600)/60);
    let secs = remainTime % 60;

    document.getElementById('timer').innerHTML = `${hrs.toString().padStart(2,'0')}:${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`;
}
function startTimer(){
    if (!intervalId){

    let hours = parseInt(document.getElementById('hours').value) || 0;
    let minutes = parseInt(document.getElementById('minutes').value) || 0;
    let seconds = parseInt(document.getElementById('seconds').value) || 0;

    remainTime = hours * 3600 + minutes * 60 + seconds;

    if (remainTime > 0){
        updateTimer();
        intervalId = setInterval(() => {
            remainTime--;
            if (remainTime <= 0){
                clearInterval(intervalId);
                intervalId = null;
                remainTime = 0;
            }
            updateTimer();
        }, 1000);
    }else{
        updateTimer();
        }
    } 
}
function stopTimer(){
    clearInterval(intervalId);
    intervalId = null;
}
function resetTimer(){
    stopTimer();
    remainTime = 0;
    updateTimer();
}

document.getElementById('startbtn').addEventListener('click', startTimer);
document.getElementById('stoptbtn').addEventListener('click', stopTimer);
document.getElementById('resetbtn').addEventListener('click', resetTimer);

///Задание 2
