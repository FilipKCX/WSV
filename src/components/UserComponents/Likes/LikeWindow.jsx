import React from 'react';
import './LikeWindow.css'; 

const LikeWindow = ({ selectedLike }) => {
  
  const likedContent = [
    { id: 'like1', content: 'Liked Content 1' },
    { id: 'like2', content: 'Liked Content 2' },
    
  ];

  
  const selectedContent = likedContent.find((item) => item.id === selectedLike);

  return (
    <div className="like-window">
      {selectedContent ? (
        <div className="like-content">
         
          <p>{selectedContent.content}</p>
        </div>
      ) : (
        <div className="no-content">
          <p>No content selected</p>
        </div>
      )}

    </div>
  );
};

export default LikeWindow;