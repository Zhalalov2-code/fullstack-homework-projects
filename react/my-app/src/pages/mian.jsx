import { useEffect, useState } from "react";


function Main(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [users, setUsers] = useState([]);
    const [userID, setUserID] = useState(1);
    let [logIn, setLogIn] = useState(false);

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
        setUsers(storedUsers);

        if(storedUsers.length > 0){
            const lastUserID = Math.max(...storedUsers.map(user => user.id));
            setUserID(lastUserID + 1);
        }
    }, []);

    function addUser(){
        const user = {
            id: userID,
            email: email,
            name: name,
            password: password
        }

        const updateUser = [...users, user];
        setUsers(updateUser);
        localStorage.setItem('users', JSON.stringify(updateUser));
        setUserID(userID + 1)
        setName('');
        setEmail('');
        setPassword('');
    };

    function loginUser(){
        const user = users.find(user => user.email === loginEmail && user.password === loginPassword);
        if(user){
            setLogIn(true);
            window.location.href = '/products';
        }else{
            setLogIn(false);
            alert('Неправильный логин или пароль');
        }

        setLoginEmail('');
        setLoginPassword('');
    }

    return(
        <div>
            <div className="row">
                <div className="col-6">
                    <div className="row mt-5">
                    <div className="col-3">
                    
                    </div>
                    <div className="col-6 border border-2 p-3">
                        <h3 className="text-center">Register</h3>
                        <label htmlFor="">Name</label>
                        <br />
                        <input type="text" value={name} className="form-control" onChange={(e) => setName(e.target.value)} />
                        <label htmlFor="">Email:</label>
                        <br />
                        <input className="form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <label htmlFor="">Password:</label>
                        <br />
                        <input className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button className="btn btn-primary mt-3" onClick={addUser}>Register</button>
                    </div>  
                    </div>
                </div>
                <div className="col-6">
                    <div className="row mt-5">
                    <div className="col-3">
                    
                    </div>
                    <div className="col-6 border border-2 p-3">
                        <h3 className="text-center">Login</h3>
                        <label htmlFor="">Email:</label>
                        <br />
                        <input className="form-control" type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)}/>
                        <label htmlFor="">Password:</label>
                        <br />
                        <input className="form-control" type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
                        <button className="btn btn-primary mt-3" onClick={loginUser}>Login</button>
                    </div>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;