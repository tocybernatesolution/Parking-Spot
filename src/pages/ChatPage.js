import React, { useState } from 'react';
import style from '../styles/chat.module.css';
import { RiUserForbidFill } from "react-icons/ri";

function ChatPage() {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([
        { id: 1, text: 'Hello! How are you?', sender: 'other' },
        { id: 2, text: 'I am doing well, thank you!', sender: 'you' },
    ]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (message.trim()) {
            setChatHistory([...chatHistory, { id: chatHistory.length + 1, text: message, sender: 'you' }]);
            setMessage('');
        }
    };

    return (
        <div className={style.container}>
            <div className={style.header}>
                <RiUserForbidFill size={30} />
                <span>Unknown</span>
            </div>
            <div className={style.chatBox}>
                {chatHistory.map(chat => (
                    <div key={chat.id} className={`${style.chatMessage} ${chat.sender === 'you' ? style.userMessage : style.otherMessage}`}>
                        <span>{chat.text}</span>
                    </div>
                ))}
            </div>
            <form onSubmit={handleSendMessage} className={style.inputContainer}>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    className={style.inputField}
                />
                <button type="submit" className={style.sendButton}>Send</button>
            </form>
        </div>
    );
}

export default ChatPage;
