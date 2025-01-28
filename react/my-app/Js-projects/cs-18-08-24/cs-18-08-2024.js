// function a1(){
//     let a = parseFloat(document.getElementById('in1').value);
//     let b = parseInt(document.getElementById('in2').value);
//     let result = a + b;

//     document.getElementById('p').innerHTML = 'Result: ' + result;
// }
// function f1(){
//     let a = 2024;
//     let b = parseFloat(document.getElementById('a').value);
//     let c = document.getElementById('b').value
//     let result = a - b;

//     document.getElementById('p').innerHTML = c + ':' + result;
// }
// function num1(){
//     let a = parseFloat(document.getElementById('a').value);
//     let b = parseFloat(document.getElementById('b').value);
//     let result = (a * b)/100;

//     document.getElementById('p').innerHTML = result;
// }
// function num2(){
//     let a1 = parseFloat(document.getElementById('a1').value)
//     let b1 = parseFloat(document.getElementById('b1').value)
//     let result = (b1 * 100)/a1;
    
//     document.getElementById('p1').innerHTML = result;
// }
// let convert = {
//     celsius: {
//         celsius: value => value,
//         fahrenheit: value => (value * 9 / 5)+ 32,
//         kelvin: value => value + 273.15
//     },
//     fahrenheit: {
//         celsius: value => (value - 32)*5/9,
//         fahrenheit: value => value,
//         kelvin: value => (value - 32)*5/9 + 273.15
//     },
//     kelvin: {
//         celsius: value => value - 273.15,
//         fahrenheit: value => (value - 273.15)*9/5+32,
//         kelvin: value => value
//     }
// };

// function con1(){
//     let value = parseFloat(document.getElementById('in1').value);
//     let fromscale = document.getElementById('sel1').value;
//     let toscale = document.getElementById('sel2').value;
//     let result = convert[fromscale][toscale](value);

//     document.getElementById('p').innerHTML =  `Result: ${result.toFixed(2)}`;
// }
let cart = 0;
let total = 0;
let ice = 5;
let ponchik = 2.5;
let arbuz = 1

function updateTotal(){
    document.getElementById('p2').innerHTML = 'Total: ' + total;
    document.getElementById('p1').innerHTML = 'Schopping Cart: ' + cart + 'total items';
}

document.getElementById('addice').onclick = function(){
    total += ice;
    cart += 1;
    updateTotal();
};
document.getElementById('removeice').onclick = function(){
    if (cart > 0){
    total -= ice;
    cart -= 1;
    updateTotal();
    }
};
document.getElementById('addponchik').onclick = function(){
    total += ponchik;
    cart += 1;
    updateTotal();
};
document.getElementById('removeponchik').onclick = function(){
    if (cart > 0){
    total -= ponchik;
    cart -= 1;
    updateTotal();
    }
};
document.getElementById('addarbuz').onclick = function(){
    total += arbuz;
    cart += 1;
    updateTotal();
};
document.getElementById('removearbuz').onclick = function(){
    if (cart > 0){
    total -= arbuz;
    cart -= 1;
    updateTotal();
    }
};
