import { useState } from "react";

function Average(){
    let [eng, setEngl] = useState(0);
    let [math, setMath] = useState(0);
    let [scn, setScn] = useState(0);
    let [prog, setProg] = useState(0);
    let [his, setHis] = useState(0);

    let [average, setAverage] = useState(null);

    function geradeAverage(){
        let total = Number(eng) + Number(math) + Number(scn) + Number(prog) + Number(his);
        let avg = total / 5;
        setAverage(avg);
    }

    return(
        <div>
            <div className="divAverage">
                <div className="row p-2 text-primary">
                    <h5>How to Calculate Grade Point Average Automatically</h5>
                </div>
                <div className="row p-2">
                    <div className="col-5">
                        <label htmlFor="">English</label>
                        <input type="number" placeholder="Введите балл" onChange={(e) => setEngl(e.target.value)} />
                        <label className="mt-3" htmlFor="">Math</label>
                        <input type="number" placeholder="Введите балл" onChange={(e) => setMath(e.target.value)} />
                        <label className="mt-3" htmlFor="">Science</label>
                        <input type="number" placeholder="Введите балл" onChange={(e) => setScn(e.target.value)} />
                        <label className="mt-3" htmlFor="">Programming</label>
                        <input type="number" placeholder="Введите балл" onChange={(e) => setProg(e.target.value)} />
                        <label className="mt-3" htmlFor="">history</label>
                        <input type="number" placeholder="Введите балл" onChange={(e) => setHis(e.target.value)} />
                        <button className="form-control mt-3 btn btn-success" onClick={geradeAverage}>Click</button>
                    </div>
                    <div className="col-7 text-center">
                        <h4>Your Final Grade</h4>
                        <h2>{average.toFixed()}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Average;