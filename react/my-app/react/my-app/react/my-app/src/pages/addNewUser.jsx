import React, { useState } from "react";
import { Link } from "react-router-dom";

function NewUser() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const addNewUser = () => {
    if (name && age) {
      const newUser = {
        id: Date.now(),
        name: name,
        age: parseInt(age), 
      };
      
      let users = JSON.parse(localStorage.getItem('users')) || [];
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      setName('');
      setAge('')

    } else {
      alert('Заполните оба поля!');
    }
  };

  return (
    <div>
      <div className="divBir p-3">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="text-success">GeeksforGeeks</h2>
            <h4>CRUD App</h4>
          </div>
          <div className="col-12">
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="number"
              className="form-control mt-3"
              placeholder="Age"
              value={age} 
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="col-4"></div>
          <div className="col-4 mt-3">
          <Link to="/user.managment">
            <button
              className="btn btn-success form-control"
              onClick={addNewUser} 
            >
              Submit
            </button>
              <button className="btn btn-primary form-control mt-2">
                Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewUser;
