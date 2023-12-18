import React, { useState, useEffect } from 'react';
import './chatWindow.css'; 

const ChatWindow = ({ selectedChat }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
  
    let dataFromBackend = [];
    if (selectedChat === 'chat1') {
      dataFromBackend = [
        { id: 1, text: 'Hello from Chat 1!', sender: 'user1' },
        { id: 2, text: 'How are you?', sender: 'user1' },
      ];
    } else if (selectedChat === 'chat2') {
      dataFromBackend = [
        { id: 1, text: 'Hey there from Chat 2!', sender: 'user2' },
        { id: 2, text: 'Nice to meet you.', sender: 'user2' },
        { id: 3, text: 'What\'s up?', sender: 'user2' },
      ];
    }
    setMessages(dataFromBackend);
  }, [selectedChat]);

  return (
    <div className="chat-window">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`chat-bubble ${message.sender === 'user1' ? 'sender-chat' : 'receiver-chat'}`}
        >
          <p className="chat-message">{message.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;