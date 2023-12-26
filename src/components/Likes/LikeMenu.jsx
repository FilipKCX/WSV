import React from 'react';
import './LikeMenu.css'; // Assuming the CSS file name is adjusted accordingly

const LikeMenu = ({ selectChat, selectedChat }) => {
  const handleChatSelect = (chatId) => {
    selectChat(chatId);
  };

  return (
    <div className="like-mmenu">
      <div className="like-options">
        <div
          className={`like-option ${selectedChat === 'chat1' ? 'active' : ''}`}
          onClick={() => handleChatSelect('chat1')}
        >
          <div className="like-box">
            <h3>Like 1</h3>
            <p>Description or preview here...</p>
          </div>
        </div>
        <div
          className={`like-option ${selectedChat === 'chat2' ? 'active' : ''}`}
          onClick={() => handleChatSelect('chat2')}
        >
          <div className="like-box">
            <h3>Chat 2</h3>
            <p>Description or preview here...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikeMenu;