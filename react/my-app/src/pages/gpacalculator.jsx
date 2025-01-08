function Gpacalculator(){
    return(
        <div>
            <div className="divBir">
                <div className="row text-center">
                    <h1>GPA Calculator</h1>
                </div>
                <div className="row p-3">
                        <label htmlFor="basic-url" className="form-label">Course Name:</label>
                        <br />
                        <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="row p-3">
                    <label htmlFor="basic-url" className="form-label">Gerade:</label>
                    <br />
                    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
                    <ul class="dropdown-menu">
                        <li><a className="dropdown-item" href="#">A</a></li>
                        <li><a className="dropdown-item" href="#">B</a></li>
                        <li><a className="dropdown-item" href="#">C</a></li>
                        <li><a className="dropdown-item" href="#">D</a></li>
                        <li><a className="dropdown-item" href="#">E</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Gpacalculator;