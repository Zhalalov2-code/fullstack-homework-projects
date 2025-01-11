import { useState } from "react";

function Gpacalculator(){
    let [coursename, setCoursename] = useState('');
    let [gerade, setGerade] = useState('');
    let [credits, setCredits] = useState(0);
    let [courseinfo, setCourseinfo] = useState('');
    let [gpa, setGpa] = useState(null);


    function points(grade){
        let gradePoints = {
            'A': 4.00,
            'B': 3.00,
            'C': 2.00,
            'D': 1.00,
            'E': 0.00
        };
        return gradePoints[grade] || 0.00;
    }

    function addCourse(){
        if (!coursename || !gerade || credits <= 0) {
            alert("Please fill out all fields correctly.");
            return;
          }
        
        let gradePoints = points(gerade);
        let courseGPA = gradePoints * credits / credits;

        setGpa(courseGPA);

        let print = `${coursename} - Grade: ${gerade} - Credits: ${credits}`;
        setCourseinfo(print);

        setCoursename('');
        setCredits(0);
        setGerade('');
    }

    return(
        <div>
            <div className="divBir">
                <div className="row text-center">
                    <h1>GPA Calculator</h1>
                </div>
                <div className="row p-3">
                        <label htmlFor="basic-url" className="form-label">Course Name:</label>
                        <br />
                        <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => setCoursename(e.target.value)}/>
                </div>
                <div className="row p-3">
                    <label htmlFor="basic-url" className="form-label">Gerade:</label>
                    <br />
                    <select
                        className="form-control"
                        value={gerade}
                        onChange={(e) => setGerade(e.target.value)}
                        >
                        <option value="">Select Grade</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                    </select>
                </div>
                <div className="row p-3">
                        <label htmlFor="basic-url" className="form-label">Credits:</label>
                        <br />
                        <input type="number" className="form-control" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => setCredits(e.target.value)}/>
                </div>
                <div className="row p-3">
                    {courseinfo && <p>{courseinfo}</p>}
                </div>
                <div className="row p-3">
                    {gpa !== null && (
                        <p><strong>GPA: </strong>{gpa.toFixed(2)}</p>
                    )}
                </div>
                <div className="row p-3">
                    <div class="d-grid gap-2">
                        <button class="btn btn-primary" type="button" onClick={addCourse}>Add Course</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gpacalculator;