import { useState } from "react";

function Registr(){
    const [in1, setIn1] = useState('');
    const [in2, setIn2] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    let [users, setUsers] =  useState(JSON.parse(localStorage.getItem('users')) || []);
    let [logIn, setLogIn] = useState(false);


    function addUser(){
        let user = {
            id: Date.now(),
            email: in1,
            password: in2
        }
        const updateUsers = [...users, user];
        setUsers(updateUsers);

        localStorage.setItem('users', JSON.stringify(updateUsers));

        setIn1('');
        setIn2('');
    }

    function loginUser(){
        let user = users.find(user => user.email === loginEmail && user.password === loginPassword);

        if(user){
            setLogIn(true);
            alert('Вход выполнен')
        }else{
            setLogIn(false);
            alert('Неправльный логин или пароль');
        }

        setLoginEmail('');
        setLoginPassword('');
    }
    return(
        <div>
            <div className="row">
                <div className="col-12 text-center">
                    <h1>React Authentication Tutorial</h1>
                </div>
                <div className="col-3 mt-5 ms-5">
                    <h3 className="text-center">Register</h3>
                    <label htmlFor="">Email adress</label>
                    <br />  
                    <input type="text" className="form-control" value={in1} onChange={(e) => setIn1(e.target.value)}/>
                    <label htmlFor="">Password</label>
                    <input type="password" className="form-control" value={in2} onChange={(e) => setIn2(e.target.value)} />
                    <button className="btn btn-primary mt-2" onClick={addUser}>Register</button>
                </div>
                <div className="col-5">
                    
                </div>
                <div className="col-3 mt-5">
                    <h3 className="text-center">LogIn</h3>
                    <label htmlFor="">Email adress</label>
                    <br />  
                    <input type="text" className="form-control" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)}/>
                    <label htmlFor="">Password</label>
                    <input type="password" className="form-control" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)}/>
                    <button className="btn btn-primary mt-2" onClick={loginUser}>LogIn</button>
                </div>
            </div>
        </div>
    )
}

export default Registr;