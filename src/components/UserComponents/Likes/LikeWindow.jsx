import React from 'react';
import Button from 'react-bootstrap/Button';
import './LikeWindow.css';
import ProfilePageCompanyStatic from '../../CompanyComponents/ProfilAnsichtCompany/ProfileViewStatic';

function LikeWindow ({ selectedLike }) {

  const likedContent = [
    { id: 'like1', content: 'ProfilePageCompanyStatic' },
    { id: 'like2', content: 'Liked Content 2' },
  ];

  const selectedContent = likedContent.find((item) => item.id === selectedLike);

  return (
    <div className="like-window">

        <div className="like-content">     
            <ProfilePageCompanyStatic/>
        </div>
    </div>
  );
};

export default LikeWindow;
