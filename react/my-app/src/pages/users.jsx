import { useState, useEffect } from "react";

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
        setUsers(storedUsers);
    }, [])

    function deleteUser(id){
        const updatedUsers = users.filter(user => user.id !== id);
            setUsers(updatedUsers);
            localStorage.setItem('users', JSON.stringify(updatedUsers));
    }

    return (
        <div>
            <div className="row">
                <div className="col-12 text-center border border-1">
                    <h1>Пользователи</h1>
                </div>
                <div className="col-3 p-4">
                    <a href="/products" className="text-decoration-none fs-5 text-black">Продукты</a>
                    <br />
                    <a href="" className="text-decoration-none fs-5 text-black">Категория</a>
                    <br />
                    <a href="/users" className="text-decoration-none fs-5 text-black">Пользователи</a>
                    <br />
                    <a href="/main" className="text-decoration-none fs-5 text-black">Выйти</a>
                </div>
                <div className="col-9 border border-1 border-bottom-0 border-top-0">
                    <div className="row p-3">
                        <div className="col-1">
                            <h5>id</h5>
                        </div>
                        <div className="col-5">
                            <h5>Email</h5>
                        </div>
                        <div className="col-3">
                            <h5>Имя</h5>
                        </div>
                        <div className="col-3">
                            <h5>Действие</h5>
                        </div>
                    </div>
                    <div>
                        {users.length === 0 ? (
                            <p className="text-center p-5">Нет пользователей</p>
                        ) : (
                            users.map((user) => (
                                <div className="row ms-1" key={user.id}>
                                    <div className="col-1">
                                        <p>{user.id}</p>
                                    </div>
                                    <div className="col-5">
                                        <p>{user.email}</p>
                                    </div>
                                    <div className="col-3">
                                        <p>{user.name}</p>
                                    </div>
                                    <div className="col-3">
                                        <button className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Users;
