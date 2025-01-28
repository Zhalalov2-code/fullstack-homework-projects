import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

function User() {
    let [users, setUsers] =useState([]);

    useEffect(() => {
        let storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        setUsers(storedUsers);
    }, []);

    let handleRemove = (id) => {
        let updateUser = users.filter((user) => user.id !== id);
        setUsers(updateUser);

        localStorage.setItem('users', JSON.stringify(updateUser))
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
            <h2 className="text-center">User Management</h2>
          </div>

          <div className="row">
            <div className="col-3 text-center border border-1 border-black">
              <h4>Name</h4>
            </div>
            <div className="col-3 text-center border border-1 border-black">
              <h4>Age</h4>
            </div>
            <div className="col-6 text-center border border-1 border-black">
              <h4>Actions</h4>
            </div>
          </div>

          {users.length === 0 ? (
            <div className="row mt-3">
                <div>No users found</div>
            </div>
          ) : (
            users.map((user) => (
                user && user.name && user.age ?(
                    <div className="row mt-3" key={user.id}>
                        <div className="col-3 text-center">{user.name}</div>
                        <div className="col-3 text-center">{user.age}</div>
                        <div className="col-6 text-center">
                            <button className="btn btn-warning me-2">Update</button>
                            <button
                                className="btn btn-danger"
                                onClick={() => handleRemove(user.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ):[]
            ))
          )}

          <div className="row mt-3">
            <div className="col-3"></div>
            <div className="col-6">
              <Link to="/addNewUser">
                <button className="btn btn-success form-control">
                  Create new user
                </button>
              </Link>
            </div>
            <div className="col-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
