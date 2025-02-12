import { useState } from "react";
import { users } from "../js/users2";

function Messenger(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function logIn(){
        const user = users.find((u) => u.email === email && u.password === password);

        if(user){
            localStorage.setItem('currentUser', JSON.stringify(user));
            window.location.href = '/chat'
        }else{
            alert('Неверный логин или пароль!')
        }
    }
    return(
        <div>
            <div className="row mt-5 p-5">
                <div className="col-4">
                    
                </div>
                <div className="col-4 border border-1 p-2">
                    <h1 className="text-center">Messenger</h1>
                    <input type="email" placeholder="Email" className="form-control mt-5" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password" className="form-control mt-2" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button className="btn btn-primary mt-3" onClick={logIn}>Вход</button>
                    <button className="btn btn-success ms-2 mt-3">Регистрация</button>
                </div>
            </div>
        </div>
    )
}

export default Messenger;