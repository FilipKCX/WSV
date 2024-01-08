import React from 'react';
import './LikeMenu.css'; // Import the CSS file for LikeMenu styling

const LikeMenu = ({ selectLike, selectedLike }) => {
  const handleLikeSelect = (likeId) => {
    selectLike(likeId);
  };

  return (
    <div className="like-menu">
      <div className="like-options">
        <div
          className={`like-option ${selectedLike === 'like1' ? 'active' : ''}`}
          onClick={() => handleLikeSelect('like1')}
        >
          <div className="like-box">
            <h3>Like 1</h3>
            <p>Description or preview here...</p>
          </div>
        </div>
        <div
          className={`like-option ${selectedLike === 'like2' ? 'active' : ''}`}
          onClick={() => handleLikeSelect('like2')}
        >
          <div className="like-box">
            <h3>Like 2</h3>
            <p>Description or preview here...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikeMenu;
