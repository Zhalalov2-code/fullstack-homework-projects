import { useState } from "react";

function CalcGPA(){
    let [course1, setCourse1] = useState('');
    let [course2, setCourse2] = useState('');
    let [course3, setCourse3] = useState('');
    let [course4, setCourse4] = useState('');
    let [course5, setCourse5] = useState('');

    let [credit1, setCredit1] = useState(0);
    let [credit2, setCredit2] = useState(0);
    let [credit3, setCredit3] = useState(0);
    let [credit4, setCredit4] = useState(0);
    let [credit5, setCredit5] = useState(0);

    let [print, setPrint] = useState(null);

    function Points(grade){
        let gradeCredit = {
            "A": 4.00,
            "A-": 3.67,
            "B+": 3.33,
            "B": 3.00,
            "B-": 2.67,
            "C+": 2.33,
            "C": 2.00,
            "C-": 1.67,
            "D": 1.00,
            "F": 0.00
        };

        return gradeCredit[grade] || 0.00;
    }

    function Gpa(){
        let totalCredits = Number(credit1) + Number(credit2) + Number(credit3) + Number(credit4) + Number(credit5);

        let points = 
        Points(course1) * credit1 +
        Points(course2) * credit2 +
        Points(course3) * credit3 +
        Points(course4) * credit4 +
        Points(course5) * credit5;

        setPrint(totalCredits > 0 ? (points / totalCredits).toFixed(2) : 0);

        setCourse1('');
        setCourse2('');
        setCourse3('');
        setCourse4('');
        setCourse5('');

        setCredit1(0);
        setCredit2(0);
        setCredit3(0);
        setCredit4(0);
        setCredit5(0);
    }

    return(
        <div>
            <div className="divAverage">
                <div className="row text-center">
                    <h2>Gpa: {print}</h2>
                </div>
                <div className="row mt-4">
                    <div className="col-4">

                    </div>
                    <div className="col-4">
                        <h5>Letter Grade</h5>
                    </div>
                    <div className="col-4">
                        <h5>Credit</h5>
                    </div>
                </div>
                <div className="row m-1 mt-3 ">
                    <div className="col-4">
                        <h5>Course 1</h5>
                    </div>
                    <div className="col-4">
                        <select className="form-control" id="" onChange={(e) => setCourse1(e.target.value)}>
                            <option value="A">A</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B">B</option>
                            <option value="B-">B-</option>
                            <option value="C+">C+</option>
                            <option value="C">C</option>
                            <option value="C-">C-</option>
                            <option value="D">D</option>
                            <option value="F">F</option>
                        </select>
                    </div>
                    <div className="col-4">
                        <input type="number" className="form-control" placeholder="Введите кредит" onChange={(e) => setCredit1(e.target.value)} />
                    </div>
                </div>
                <div className="row m-1 mt-3 ">
                    <div className="col-4">
                        <h5>Course 2</h5>
                    </div>
                    <div className="col-4">
                        <select className="form-control" id="" onChange={(e) => setCourse2(e.target.value)}>
                            <option value="A">A</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B">B</option>
                            <option value="B-">B-</option>
                            <option value="C+">C+</option>
                            <option value="C">C</option>
                            <option value="C-">C-</option>
                            <option value="D">D</option>
                            <option value="F">F</option>
                        </select>
                    </div>
                    <div className="col-4">
                        <input type="number" className="form-control" placeholder="Введите кредит"  onChange={(e) => setCredit2(e.target.value)} />
                    </div>
                </div>
                <div className="row m-1 mt-3 ">
                    <div className="col-4">
                        <h5>Course 3</h5>
                    </div>
                    <div className="col-4">
                        <select className="form-control" id="" onChange={(e) => setCourse3(e.target.value)}>
                            <option value="A">A</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B">B</option>
                            <option value="B-">B-</option>
                            <option value="C+">C+</option>
                            <option value="C">C</option>
                            <option value="C-">C-</option>
                            <option value="D">D</option>
                            <option value="F">F</option>
                        </select>
                    </div>
                    <div className="col-4">
                        <input type="number" className="form-control" placeholder="Введите кредит"  onChange={(e) => setCredit3(e.target.value)} />
                    </div>
                </div>
                <div className="row m-1 mt-3 ">
                    <div className="col-4">
                        <h5>Course 4</h5>
                    </div>
                    <div className="col-4">
                        <select className="form-control" id="" onChange={(e) => setCourse4(e.target.value)}>
                            <option value="A">A</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B">B</option>
                            <option value="B-">B-</option>
                            <option value="C+">C+</option>
                            <option value="C">C</option>
                            <option value="C-">C-</option>
                            <option value="D">D</option>
                            <option value="F">F</option>
                        </select>
                    </div>
                    <div className="col-4">
                        <input type="number" className="form-control" placeholder="Введите кредит"  onChange={(e) => setCredit4(e.target.value)} />
                    </div>
                </div>
                <div className="row m-1 mt-3 ">
                    <div className="col-4">
                        <h5>Course 5</h5>
                    </div>
                    <div className="col-4">
                        <select className="form-control" id="" onChange={(e) => setCourse5(e.target.value)}>
                            <option value="A">A</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B">B</option>
                            <option value="B-">B-</option>
                            <option value="C+">C+</option>
                            <option value="C">C</option>
                            <option value="C-">C-</option>
                            <option value="D">D</option>
                            <option value="F">F</option>
                        </select>
                    </div>
                    <div className="col-4">
                        <input type="number" className="form-control" placeholder="Введите кредит"  onChange={(e) => setCredit5(e.target.value)} />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-4">
                         
                    </div>
                    <div className="col-4">
                        <button className="btn btn-success" onClick={Gpa}>Calculate GPA</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CalcGPA;