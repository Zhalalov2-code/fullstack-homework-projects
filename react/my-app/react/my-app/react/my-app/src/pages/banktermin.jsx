import { useState } from "react";

function Terminal() {
    let [summa, setSumma] = useState(0);
    let [balance, setBalance] = useState(0);

    function Deposit() {
        setBalance(balance + Number(summa)); 
        setSumma(0);  
    }

    function Snyat() {
        if (summa <= balance) {
            setBalance(balance - Number(summa)); 
            setSumma(0);
        } else {
            alert("Недостаточно средств для снятия!");  
        }
    }

    function Balance() {
        alert(`Ваш баланс: ${balance} рублей`); 
    }

    return (
        <div>
            <div className="div1">
                <h2 className="h2">{balance === 0 ? `Ваш баланс: 0 рублей` : `Ваш баланс: ${balance} рублей`}</h2>
            </div>
            <div className="div2">
                <input
                    type="number"
                    value={summa}
                    className="inp1"
                    onChange={(e) => setSumma(e.target.value)}
                    placeholder="Введите сумму"
                />
                
                <button className="btn1" onClick={Deposit}>
                    Пополнить
                </button>

                <button className="btn2" onClick={Snyat}>
                    Снять
                </button>

                <button className="btn3" onClick={Balance}>
                    Показать баланс
                </button>
            </div>
        </div>
    );
}

export default Terminal;
