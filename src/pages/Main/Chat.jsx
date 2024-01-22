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

  const handleRemoveChat = (chatId) => {
    // Update the chats state to remove the selected chat
    setChats((prevChats) => prevChats.filter((chat) => chat.id !== chatId));

    // If the removed chat is the currently selected chat, clear the selectedChat state
    if (selectedChat && selectedChat.id === chatId) {
      setSelectedChat(null);
    }
  };

  return (
    <>
      <Navibar />
      <div className="chat-app-container">
        <div className="chat-menu">
          <ChatMenu chats={chats} selectChat={handleChatSelect} onRemoveChat={handleRemoveChat} selectedChat={selectedChat} />
        </div>
        <div className="chat-window">
          <ChatWindow selectedChat={selectedChat} />
        </div>
      </div>
    </>
  );
};

export default Chat;