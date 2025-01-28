let list = [];
let completedtask = [];

document.getElementById('addTaskBtn').addEventListener('click', addTask)

function addTask(){
    let entertask = document.getElementById('in1').value;
    let select = document.getElementById('select1').value;
    let data = document.getElementById('in2').value;

    if (entertask && select !== 'Priority' && data){
        let task = {
            name: entertask,
            priority: select,
            deadline: data
        };

        list.push(task);
        updateTask();

        document.getElementById('in1').value = '';
        document.getElementById('select1').value = 'Priority';
        document.getElementById('in2').value = '';
    }else{
        alert('Не все поля заполнены.');
    }
}

function sortTask(tasks){
    let priorityOrd = {
        'top': 1,
        'middle': 2,
        'low': 3
    };
    
    return tasks.sort((a, b) => {
        return priorityOrd[a.priority.toLowerCase().replace('priority ', '')] - priorityOrd[b.priority.toLowerCase().replace('priority ', '')];
    });
}

function updateTask(){
    let sortedtask = sortTask(list);

    let updatetasklist = '';
    for (let i = 0; i < list.length; i++){
        let task = list[i];
        updatetasklist += `<div class="row my-1">
        <div class="col-3 text-center my-1">
            <p class="p-3 text-secondary text-center">${task.name}</p>
        </div>
        <div class="col-3 text-center my-1">
            <p class="p-3 text-secondary text-center">${task.priority}</p>
        </div>
        <div class="col-3 text-center my-1">
            <p class="p-3 text-secondary text-center">${task.deadline}</p>
        </div>
        <div class="col-3 text-center my-1">
            <button class="btn btn-danger" onclick="donetask(${i})">Mark Done</button>
        </div>
        </div>`;
    }
    document.getElementById('print').innerHTML = updatetasklist;
}

function completedTask(){
    let completedElement = document.getElementById('completedTasks');
    let taskElement = '';

    for (let i = 0; i < completedtask.length; i++) {
        let task = completedtask[i];
        taskElement += `
        <div class="row my-1">
            <div class="col-4 text-center my-1">
                <p class="p-3 text-secondary text-center">${task.name}</p>
            </div>
            <div class="col-4 text-center my-1">
                <p class="p-3 text-secondary text-center">${task.priority}</p>
            </div>
            <div class="col-4 text-center my-1">
                <p class="p-3 text-secondary text-center">${task.deadline}</p>
            </div>
        </div>
        `;
    }
    completedElement.innerHTML = taskElement;
}

function donetask(i){
    let task = list[i];
    completedtask.push(task);
    list.splice(i, 1);
    updateTask();
    completedTask();
}