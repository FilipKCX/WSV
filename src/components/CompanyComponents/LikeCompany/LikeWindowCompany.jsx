import React from 'react';
import '../../UserComponents/Likes/LikeWindow.css';

const LikeWindow = ({ selectedLike }) => {
  // Simulated data for the liked content
  const likedContent = [
    { id: 'like1', content: 'Liked Content 1' },
    { id: 'like2', content: 'Liked Content 2' },
    // Add more content as needed
  ];

  // Find the selected content based on selectedLike ID
  const selectedContent = likedContent.find((item) => item.id === selectedLike);

  return (
    <div className="like-window">
      {selectedContent ? (
        <div className="like-content">
          {/* Display the selected liked content */}
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