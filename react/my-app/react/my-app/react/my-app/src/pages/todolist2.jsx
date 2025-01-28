import { useEffect, useState } from "react";

function Dolist() {
    let [input1, setInput1] = useState('');
    let [all, setAll] = useState([]);
    let [active, setActive] = useState([]);
    let [completed, setCompleted] = useState([]);
    let [countTasks, setCountTasks] = useState(0);
    let [filtered, setFiltered] = useState([]);

    function addTasks() {
        if (input1.trim()) {
            let newtask = {
                text: input1,
                completed: false
            };
            setAll([...all, newtask]);
            setActive([...active, newtask]);
            setInput1('');
        }
    }

    function toggleTask(index) {
        let updateAll = [...all];
        let updateTask = { ...updateAll[index], completed: !updateAll[index].completed };
        updateAll[index] = updateTask;

        setAll(updateAll);
        setActive(updateAll.filter(a => !a.completed));
        setCompleted(updateAll.filter(a => a.completed));
    }

    function deleteTask(index) {
        let updateAll = [...all];
        updateAll.splice(index, 1);

        setAll(updateAll);
        setActive(updateAll.filter(a => !a.completed));
        setCompleted(updateAll.filter(a => a.completed));
    }

    function filterTasks(status) {
        if (status === 'all') {
            setFiltered(all);
        } else if (status === 'active') {
            setFiltered(active);
        } else if (status === 'completed') {
            setFiltered(completed);
        }
    }

    useEffect(() => {
        setFiltered(all);
    }, [all]);

    return (
        <div>
            <div className="divBir p-3">
                <div className="row">
                    <div className="col-12 text-center  ">
                        <h1>TodoMatic</h1>
                        <h4>What needs to be done?</h4>
                    </div>
                    <div className="col-12">
                        <input value={input1} type="text" className="form-control" placeholder="Введите Таск" onChange={(a) => setInput1(a.target.value)} />
                        <button className="btn btn-primary form-control mt-2" onClick={addTasks}>Add</button>
                    </div>
                    <div className="row mt-2">
                        <div className="col-4">
                            <button className="btn btn-secondary form-control ms-2" onClick={() => filterTasks('all')}>All</button>
                        </div>
                        <div className="col-4">
                            <button className="btn btn-secondary form-control ms-2" onClick={() => filterTasks('active')}>Active</button>
                        </div>
                        <div className="col-4">
                            <button className="btn btn-secondary form-control ms" onClick={() => filterTasks('completed')}>Completed</button>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12 text-center">
                        <h2>tasks remaining</h2>
                    </div>
                    <div className="col-12">
                        {filtered.length > 0 ? (
                            <ul>
                                {filtered.map((task, index) => (
                                    <li key={index}
                                        className={task.completed ? 'completed-task' : ''}>
                                        <input
                                            type="checkbox"
                                            checked={task.completed}
                                            onChange={() => toggleTask(index)}
                                        />
                                        {task.text}
                                        <button
                                            className="btn btn-danger btn-sm ms-2"
                                            onClick={() => deleteTask(index)}
                                        >
                                            Delete
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <h4 className="text-center mt-2">No tasks</h4>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dolist;