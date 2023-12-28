import React, { useState } from 'react';
import LikeMenu from '../../components/Likes/LikeMenu';
import Navibar from '../../components/Navbar';
import './Likes.css'; // Import your CSS file for the Likes component

const Likes = () => {
  const [selectedLike, setSelectedLike] = useState('like1');

  const handleLikeSelect = (likeId) => {
    setSelectedLike(likeId);
  };

  return (
    <>
      <Navibar />
      <div className="like-app-container">
        <div className="like-menu">
          <LikeMenu selectLike={handleLikeSelect} selectedLike={selectedLike} />
        </div>
      </div>
    </>
  );
};

export default Likes;