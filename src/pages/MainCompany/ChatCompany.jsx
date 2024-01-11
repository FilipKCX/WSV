import React, { useState } from 'react';
import ChatMenu from '../../components/CompanyComponents/ChatCompany/ChatMenuCompany';
import ChatWindow from '../../components/CompanyComponents/ChatCompany/ChatWindowCompany';
import Navibar from '../../components/CompanyComponents/NavbarCompany';

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState('chat1');

  const handleChatSelect = (chatId) => {
    setSelectedChat(chatId);
  };

  return <>
  <Navibar/>
  <div class="chat-app-container">
      <div class="chat-menu">
        <ChatMenu selectChat={handleChatSelect} selectedChat={selectedChat} />
      </div>
      <div class="chat-window">
        <ChatWindow selectedChat={selectedChat} />
      </div>
  </div>
  
  
  </>
    
    
      
      
 
;
};

export default Chat;