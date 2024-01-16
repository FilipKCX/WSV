import React, { useState, useEffect } from 'react';
import '../../UserComponents/Chat/ChatWindow.css'; 

const ChatWindow = ({ selectedChat }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');


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

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {

    const updatedMessages = [
      ...messages,
      { id: messages.length + 1, text: newMessage, sender: 'user1' }, 
    ];
    setMessages(updatedMessages);
    setNewMessage(''); 
  };

  return (
    <div className="chat-window">
      <div className="chat-messages">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`chat-bubble ${message.sender === 'user1' ? 'sender-chat' : 'receiver-chat'}`}
          >
            <p className="chat-message">{message.text}</p>
          </div>
        ))}
      </div>
      <div className="text-input" >
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={handleInputChange}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
    
  );
};

export default ChatWindow;