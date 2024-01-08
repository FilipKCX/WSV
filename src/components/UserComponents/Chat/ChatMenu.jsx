import React from 'react';
import './ChatMenu.css'

const ChatMenu = ({ selectChat, selectedChat }) => {
  const handleChatSelect = (chatId) => {
    selectChat(chatId);
  };

  return (
    <div className="chat-mmenu">
      <div className="chat-options">
        <div
          className={`chat-option ${selectedChat === 'chat1' ? 'active' : ''}`}
          onClick={() => handleChatSelect('chat1')}
        >
          <div className="chat-box">
            <h3>Chat 1</h3>
            <p>Description or preview here...</p>
          </div>
        </div>
        <div
          className={`chat-option ${selectedChat === 'chat2' ? 'active' : ''}`}
          onClick={() => handleChatSelect('chat2')}
        >
          <div className="chat-box">
            <h3>Chat 2</h3>
            <p>Description or preview here...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMenu;