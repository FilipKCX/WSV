import React from 'react';
import Button from 'react-bootstrap/Button';
import './LikeWindow.css';
import ProfilePageCompanyStatic from '../../../pages/MainCompany/ProfilePageCompanyStatic';

function LikeWindow ({ selectedLike }) {

  const likedContent = [
    { id: 'like1', content: 'ProfilePageCompanyStatic' },
    { id: 'like2', content: 'Liked Content 2' },
  ];

  const selectedContent = likedContent.find((item) => item.id === selectedLike);

  return (
    <div className="like-window">
      {selectedContent ? (
        <div className="like-content">
          {selectedContent.id === 'like1' ? (
            <ProfilePageCompanyStatic/>
          ) : (
            <p>{selectedContent.content}</p>
          )}
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
