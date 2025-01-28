import { useEffect, useState } from "react";

function LoginLocal() {
    const users = [
        {
            id: 1,
            email: 'zhalalov2@gmail.com',
            password: '123'
        },
        {
            id: 2,
            email: 'zikozhalalov2@gmail.com',
            password: '001'
        }
    ]

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [user, setUser] = useState(null);

    let handeLogin = () => {
        let user = users.filter((u) => u.email == email && u.password == password);
        if (user.length > 0) {
            localStorage.setItem('token', user[0].id);
        } else {
            alert('Неверный пароль или логин')
        }
    }

    let userDetail = () => {
        const data = users.filter((u) => u.id == localStorage.getItem('token'));
        if (data.length > 0) {
            setUser(data[0]);
        } else {
            setUser(null)
        }
    }

    let logout = () => {
        localStorage.removeItem('token');
        setUser(null)
    }

    useEffect(() => {
        userDetail();
    }, [])

    return (
        <div>
        {
            user != null ? (
                <div>
                    <div className="row text-center">
                        <h1>Welcome, {user.email}</h1>
                    </div>
                    <div className="row text-center">
                        <div className="col-4"></div>
                        <div className="col-4">
                            <button className="btn btn-danger mt-3" onClick={logout}>Logout</button>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="row text-center">
                        <h1>Local Login</h1>
                    </div>
                    <div className="row text-center">
                        <div className="col-4"></div>
                        <div className="col-4">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                className="form-control mt-3"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button className="btn btn-success mt-3" onClick={handeLogin}>Login</button>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
    )
}

export default LoginLocal;