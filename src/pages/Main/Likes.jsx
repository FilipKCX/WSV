import React, { useState } from 'react';
import LikeMenu from '../../components/Likes/LikeMenu';
import Navibar from '../../components/Navbar';
import './Likes.css';
import LikeWindow from '../../components/Likes/LikeWindow';

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
          <LikeWindow selectedLike={selectedLike} /> 
        </div>
      </div>
    </>
  );
};

export default Likes;