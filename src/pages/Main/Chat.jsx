import React, { useState } from 'react';
import ChatMenu from '../../components/Chat/ChatMenu';
import ChatWindow from '../../components/Chat/ChatWindow';

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState('chat1');

  const handleChatSelect = (chatId) => {
    setSelectedChat(chatId);
  };

  return (
    <div class="chat-app-container">
      <div class="chat-menu">
        <ChatMenu selectChat={handleChatSelect} selectedChat={selectedChat} />
      </div>
      <div class="chat-window">
        <ChatWindow selectedChat={selectedChat} />
      </div>
  </div>
      
      
 
  );
};

export default Chat;