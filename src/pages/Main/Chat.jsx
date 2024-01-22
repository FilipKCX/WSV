import React, { useState } from 'react';
import ChatMenu from '../../components/UserComponents/Chat/ChatMenu';
import Navibar from '../../components/Navbar';
import './Chat.css';
import ChatWindow from '../../components/UserComponents/Chat/ChatWindow';

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [chats, setChats] = useState([]);

  const handleChatSelect = (chatId, chatContent) => {
    setSelectedChat({ id: chatId, content: chatContent });
  };



  return (
    <>
      <Navibar />
      <div className="chat-app-container">
        <div className="chat-menu">
          <ChatMenu chats={chats} selectChat={handleChatSelect} selectedChat={selectedChat} />
        </div>
        <div className="chat-window">
          <ChatWindow selectedChat={selectedChat} />
        </div>
      </div>
    </>
  );
};

export default Chat;