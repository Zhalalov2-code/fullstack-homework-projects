import { useEffect, useState } from "react";

function LocalUser(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    let [users, setUsers] = useState([])

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        setUsers(storedUsers);
    }, []);

    function addUser(){
        let user = {
            id: Date.now(),
            name: name,
            email: email
        };

        let updateUser = [...users, user];
        setUsers(updateUser);

        localStorage.setItem('users', JSON.stringify(updateUser));

        setName('');
        setEmail('');

    }
    return(
        <div>
            <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <button onClick={addUser}>Save</button>
            <br />
            <p>
            {users.length > 0 ? (
            <div>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            {`ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`}
                        </li>
                    ))}
                </ul>
            </div>
        ) : (
            <p>No users.</p>
        )}
            </p>
        </div>
    )
}

export default LocalUser;