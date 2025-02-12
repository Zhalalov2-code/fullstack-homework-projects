import { useEffect, useState } from 'react';
import '../css/chat.css';
import { users, messages } from '../js/users2';

function Chat() {
    const [currentUser, setCurrentUser] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);
    const [message, setMessage] = useState('');
    const [chatMessages, setChatMessages] = useState([]);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('currentUser'));
        if (storedUser) {
            setCurrentUser(storedUser);
        } else {
            window.location.href = '/messenger';
        }
    }, []);

    const availableUsers = users.filter((user) => user.id !== currentUser?.id);

    const handleLogout = () => {
        localStorage.removeItem('currentUser');
        window.location.href = '/messenger';
    };

    const sendMessage = () => {
        if (message.trim() && selectedUser) {
            const newMessage = {
                senderId: currentUser.id,
                receiverId: selectedUser.id,
                content: message
            };

            const storedMessages = JSON.parse(localStorage.getItem('messages')) || messages;
            const updatedMessages = [...storedMessages, newMessage];
            localStorage.setItem('messages', JSON.stringify(updatedMessages));

            const filteredMessages = updatedMessages.filter(
                (msg) =>
                    (msg.senderId === currentUser.id && msg.receiverId === selectedUser.id) ||
                    (msg.senderId === selectedUser.id && msg.receiverId === currentUser.id)
            );
            setChatMessages(filteredMessages);
            setMessage('');
        }
    };

    useEffect(() => {
        if (selectedUser) {
            const storedMessages = JSON.parse(localStorage.getItem('messages')) || messages;

            const filteredMessages = storedMessages.filter(
                (msg) =>
                    (msg.senderId === currentUser.id && msg.receiverId === selectedUser.id) ||
                    (msg.senderId === selectedUser.id && msg.receiverId === currentUser.id)
            );

            setChatMessages(filteredMessages);
        }
    }, [currentUser, selectedUser]);

    return (
        <div className="block1">
            <div className="block2">
                <h5>Пользователи</h5>
                {availableUsers.length === 0 ? (
                    <p>Нет пользователей</p>
                ) : (
                    availableUsers.map((u) => (
                        <div key={u.id} onClick={() => setSelectedUser(u)} className="userInfo">
                            <p>{u.name}</p>
                        </div>
                    ))
                )}
            </div>
            <div className="block3">
                <button className="btn2" onClick={handleLogout}>Выйти</button>
                {selectedUser ? (
                    <div>
                        <h5>Чат с {selectedUser.name}</h5>
                        <div id="chat-history" className="chat-history">
                            {chatMessages.length === 0 ? (
                                <p>Нет сообщений</p>
                            ) : (
                                chatMessages.map((msg, index) => (
                                    <p key={index}>
                                        <strong>{msg.senderId === currentUser.id ? 'Вы' : selectedUser.name}:</strong> {msg.content}
                                    </p>
                                ))
                            )}
                        </div>
                    </div>
                ) : (
                    <p className="chat-history">Выберите собеседника для чата.</p>
                )}
            </div>
            <div className="block4">
                <input
                    type="text"
                    className="inp1 form-control"
                    placeholder="Введите текст"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button className="btn1" onClick={sendMessage}>send</button>
            </div>
        </div>
    );
}

export default Chat;