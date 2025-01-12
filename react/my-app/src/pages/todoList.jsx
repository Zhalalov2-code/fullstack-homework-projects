import { useState } from "react";

function TodoList(){
    let [taskinput, setTaskinput] = useState('');
    let [tasks, setTasks] = useState([]);

    function addTasks(){
        if(taskinput.trim()){
            setTasks([...tasks, taskinput.trim()]);
            setTaskinput('');
        };
    };

    function removeTasks(index){
        let updateTasks = tasks.filter((_, i) => i !== index);
        setTasks(updateTasks);
    };

    return(
        <div>
            <div className="row divBir">
                <div className="col-12 bg-success p-2">
                    <h1>To do List</h1>
                </div>
                <div className="col-12 p-2">
                    <label className="mt-3" htmlFor="">Add items</label>
                    <input value={taskinput} type="text" className="form-control mt-3" onChange={(e)=> setTaskinput(e.target.value)}/>
                    <button className="btn btn-success mt-2" onClick={addTasks}>Submit</button>
                </div>
                <div className="col-12 p-2">
                    <h4>Tasks</h4>
                    {tasks.length > 0 ? (
                        <ul>
                            {tasks.map((task, index) => (
                                <li key={index}>{task}<button className="btn btn-primary" onClick={()=> removeTasks(index)}>Delete</button></li>
                            ))}
                        </ul>
                    ):(
                        <p>нет Task</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TodoList;