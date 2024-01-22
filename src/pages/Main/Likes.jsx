import React, { useState } from 'react';
import LikeMenu from '../../components/UserComponents/Likes/LikeMenu';
import Navibar from '../../components/Navbar';
import './Likes.css'; 
import LikeWindow from '../../components/UserComponents/Likes/LikeWindow';

const Likes = () => {
  const [selectedLike, setSelectedLike] = useState(null);
  const [likes, setLikes] = useState([]);

  const handleLikeSelect = (likeId, likeContent) => {
    setSelectedLike({ id: likeId, content: likeContent });
  };

  const handleRemoveLike = (likeId) => {
    // Update the likes state to remove the selected like
    setLikes((prevLikes) => prevLikes.filter((like) => like.id !== likeId));

    // If the removed like is the currently selected like, clear the selectedLike state
    if (selectedLike && selectedLike.id === likeId) {
      setSelectedLike(null);
    }
  };

  return (
    <>
      <Navibar />
      <div className="like-app-container">
        <div className="like-mmenu">
          <LikeMenu likes={likes} selectLike={handleLikeSelect} onRemoveLike={handleRemoveLike} selectedLike={selectedLike} />
        </div>
        <div className="like-window"> 
          <LikeWindow selectedLike={selectedLike} /> 
        </div>
      </div>
    </>
  );
};

export default Likes;