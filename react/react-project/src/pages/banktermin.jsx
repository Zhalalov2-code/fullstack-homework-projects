import { useState } from "react";

function Terminal(){
    let[popolnit, setPopolnit] = useState(0)

    return(
        <div>
            <div className="div1">
                <h2 className="h2">asdsa</h2>
            </div>
            <div className="div2">
                <input type="text" />
                <button className="btn1">Пополнить</button>
                <button className="btn2">Снять</button>
                <button className="btn3">Баланс</button>
            </div>
        </div>
    )
}

export default Terminal;