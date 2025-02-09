import { useEffect, useState } from "react";
import { users } from "../js/users";

function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    function logIn() {
        const user = users.find((u) => u.email === email && u.password === pass);

        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            window.location.href = '/userProf'
        } else {
            alert('Неверный логин или пароль');
        }
    }

    return (
        <div>
            <div className="row p-5">
                <div className="col-12 text-center">
                    <h1>LogIn</h1>
                    <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    <br />
                    <input type="password" placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)} />
                    <br />
                    <button className="btn btn-primary mt-3" onClick={logIn}>LogIn</button>
                </div>
            </div>
        </div>
    )
}

export default Login;