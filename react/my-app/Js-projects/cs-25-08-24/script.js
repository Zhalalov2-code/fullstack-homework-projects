let todoList = []

function todolistPush(){
    let input = document.getElementById('in1').value;

    if (input){
        todoList.push(input); 
        updateDisplay();
        document.getElementById('in1').value = '';
    }
}

function todolistRemove(){
    let input = document.getElementById('in1').value;
    let index = todoList.indexOf(input);

    if (index !== -1){
        todoList.splice(index, 1);
        updateDisplay();
        document.getElementById('in1').value = '';
    }
}

function updateDisplay(){
    document.getElementById('p').innerHTML = todoList.join('<br>');
}
