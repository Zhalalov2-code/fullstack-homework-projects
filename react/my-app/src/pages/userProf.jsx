import { posts } from "../js/users";
import { useEffect, useState } from "react";

function UserProf() {
    const [currentUser, setCurrentUser] = useState(null);
    const [userPost, setUserPost] = useState([]);

    useEffect(() => {
        const storedUser = localStorage.getItem('currentUser');

        if (storedUser) {
            const user = JSON.parse(storedUser);
            setCurrentUser(user);

            const userPosts = posts.filter(post => post.userID === user.id);
            setUserPost(userPosts);
        } else {
            window.location.href = '/login';
        }
    }, []);

    function logOut(){
        localStorage.removeItem('currentUser');
        window.location.href = '/login';
    }

    if (!currentUser) {
        return <h1>Пожалуйста, войдите в систему</h1>;
    }

    return (
        <div>
            <div className="row">
                <div className="col-4 mt-5 p-2">
                    <div className="text-center mb-4">
                        <h1>{currentUser.name}</h1>
                        <h5 className="text-secondary">{currentUser.email}</h5>
                    </div>
                </div>
                <div className="col-1 mt-5 p-2">
                    <p>Мои посты:</p>
                </div>
                <div className="col-4">
                    <div className="row mt-5 p-2">
                        {userPost.length === 0 ? (
                            <p>Нет постов</p>
                        ) : (
                            userPost.map((post, index) => (
                                <div key={index} className="col-12 mb-3">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="row border bg-secondary text-white rounded-3 p-1">
                                                <div className="col-12">
                                                    <h5>{post.content}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
                <div className="col-3 mt-5 p-2">
                    <button className="btn btn-danger" onClick={logOut}>LogOut</button>
                </div>
            </div>
        </div>
    );
}

export default UserProf;
