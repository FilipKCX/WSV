import React, { useState } from 'react';
import LikeMenu from '../../components/CompanyComponents/LikeCompany/LikeMenuCompany';
import Navibar from '../../components/CompanyComponents/NavbarCompany';
import '../Main/Likes.css';
import ProfileViewStatic from '../../components/CompanyComponents/ProfilAnsichtCompany/ProfileViewStatic';

const Likes = () => {
  const [selectedLike, setSelectedLike] = useState('like1');

  const handleLikeSelect = (likeId) => {
    setSelectedLike(likeId);
  };

  return (
    <>
      <Navibar />
      <div className="like-app-container">
        <div className="like-mmenu">
          <LikeMenu selectLike={handleLikeSelect} selectedLike={selectedLike} />
        </div>
        <div className="like-window"> 
          <ProfileViewStatic/>
        </div>
      </div>
    </>
  );
};

export default Likes;