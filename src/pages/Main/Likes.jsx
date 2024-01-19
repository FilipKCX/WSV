import React, { useState } from 'react';
import LikeMenu from '../../components/UserComponents/Likes/LikeMenu';
import Navibar from '../../components/Navbar';
import './Likes.css'; 
import LikeWindow from '../../components/UserComponents/Likes/LikeWindow';

const Likes = () => {
  return (
    <>
      <Navibar />
      <div className="like-app-container">
        <div className="like-mmenu">
          <LikeMenu/>
        </div>
        <div className="like-window"> 
          <LikeWindow/> 
        </div>
      </div>
    </>
  );
};

export default Likes;