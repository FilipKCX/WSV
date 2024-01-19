import React, { useState, useEffect } from 'react';
import './LikeMenu.css';
import { getHTTPRequest } from '../../serverPackage';
import LikeWindow from './LikeWindow';
import Likebox from './LikeBox'

export default function LikeMenu() {
  const [isLoading, setIsLoading] = useState(true);
  const [likeUsers, setLikeUsers] = useState([]);
  const [activeLikeBox, setActiveLikeBox] = useState(null);

  const uID = sessionStorage.getItem('userID');
  const param = [uID];

  useEffect(() => {
    const fetchUsers = async () => {
      const apiResponse = await getHTTPRequest("getLikes", param);
      const newArray = JSON.parse(apiResponse);
      setIsLoading(false);
      setLikeUsers(newArray);
    };

    fetchUsers();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleLikeBoxClick = (index) => {
    setActiveLikeBox(index);
  };

  return (
    <div className="like-menu">
      
        {likeUsers.map((company, index) => (
          <div key={company}>
            <LikeBox
              company={company}
              isActive={company === activeLikeBox}
              onClick={() => handleLikeBoxClick(company)}
            />
          </div>
        ))}
      </div>
  );
}

