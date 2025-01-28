let list = document.getElementById('list');
let input = document.getElementById('input1');
let count= document.getElementById('count');

function clickEvent(e){
    if (e.target.matches('.btn2')){
        e.target.parentElement.remove();
        updateCount();
    } else if (e.target.matches('.btn1')){
        e.target.parentElement.classList.toggle('complete');
    }
}

list.addEventListener('click', clickEvent);

function renderTodo(title){
    let liElement = document.createElement('li');

    liElement.innerHTML = `
    ${title}
    <button class="btn btn-primary btn-sm complete-btn">Complete</button>
    <button class="btn btn-danger btn-sm remove-btn">Х</button>`;
    list.appendChild(liElement);
    updateCount();
}

function keydawn(event){
    if (event.key === 'Enter'){
        let todotext = input.value.trim();
        if (todotext){
            renderTodo(todotext)
            input.value = '';
        } 
    }
}

function updateCount(){
    let itemcount = list.children.length;
    count.textContent = itemcount;
}

input.addEventListener('keydown', keydawn);