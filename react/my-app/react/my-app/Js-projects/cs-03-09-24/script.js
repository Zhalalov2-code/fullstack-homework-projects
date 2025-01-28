///Задание 1
function zadanie1(){
    let intervall = {
        'div2': 1000,
        'div4': 2000,
        'changediv2': 2500,
        'changediv4': 4000
    };
    
    function changelight(){
        let div2 = document.getElementById('div2');
        div2.style.backgroundColor = 'orange';
    
        let div4 = document.getElementById('div4');
        div4.style.backgroundColor = 'orange';
    
        setTimeout(function(){
            div2.style.backgroundColor = 'gray';
        }, intervall['div2']);
    
        setTimeout(function(){
            div4.style.backgroundColor = 'gray';
        }, intervall['div4']);
    
        setTimeout(function(){
            div2.style.backgroundColor = 'orange';
        }, intervall['div2'] + intervall['changediv2']);
    
        setTimeout(function(){
            div4.style.backgroundColor = 'orange';
        }, intervall['div4'] + intervall['changediv4']);
    
    };

    setInterval(changelight, intervall['div2'] + intervall['changediv2']);

}
zadanie1();

///Задание 2
function zadanie2(){
    let intervall = [
        ['level-1', 500],
        ['level-2', 1000],
        ['level-3',  1500],
        ['level-4', 2000]
    ];
    
    function battery(){
        for (let i = 0; i < intervall.length; i++){
            let [id, value] = intervall[i];
            setTimeout(() => {
                let level = document.getElementById(id);
                if (level){
                    level.style.opacity = 1;
                }
            }, value);
        }
    }
    setTimeout(() => {
        battery();
        setInterval(() => {
            intervall.forEach(([id]) => {
                let level = document.getElementById(id);
                if (level){
                    level.style.opacity = 0;
                }
            });
            battery();
            }, 3000);
        }, 1000)
}
zadanie2();

///Задание 3
let togglebutton = document.getElementById('togglebutton');
let addbutton = document.getElementById('addbutton');
let bulbscontainer = document.getElementById('bulbs');
let sostayanie = false;

togglebutton.onclick = () => {
    let bulbs = document.querySelectorAll('.img1');
    bulbs.forEach(bulb => {
        bulb.src = sostayanie ? 'img/lampa.png' : 'img/lampa1.png';
    });
    sostayanie = !sostayanie;
};

addbutton.onclick = () => {
    let newbulb = document.createElement('img');
    newbulb.className = 'img1';
    newbulb.src = sostayanie ? 'img/lampa1.png' : 'img/lampa.png';
    bulbscontainer.appendChild(newbulb);
};