import { useState } from "react";

function Calculator(){
    let [num1, setNum1] = useState(0);
    let [num2, setNum2] = useState(0);
    let [operation, setOperation] = useState(0)
    let [sum, setSum] = useState(0);

    function calc() {
        let number1 = Number(num1);
        let number2 = Number(num2)

        if (operation === '+') {
            setSum(number1 + number2);
        } else if (operation === '-') {
            setSum(number1 - number2);
        } else if (operation === '*') {
            setSum(number1 * number2);
        } else if (operation === '/') {
            if (number2 !== 0) {
                setSum(number1 / number2);
            } else {
                alert('На ноль делить нельзя');
            }
        }
    }
      

    return(
        <div>
            <input type="number" value={num1} onChange={(a)=>setNum1(a.target.value)} placeholder="Введите 1 значение" />
            <select value={operation} onChange={(a) => setOperation(a.target.value)}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <input type="number" value={num2} onChange={(a)=>setNum2(a.target.value)} placeholder="Введите 2 значение" />
            <br />
            <button onClick={calc}>расчитать</button>
            <br />
            <h3>Результат: {sum}</h3>
        </div>
    )
}

export default Calculator;