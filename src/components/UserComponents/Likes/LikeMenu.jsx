import React, { useState, useEffect } from 'react';
import { getHTTPRequest } from '../../serverPackage';
import LikeWindow from './LikeWindow';


const LikeOptions = ({ selectLike }) => {
  
  const handleLikeSelect = (likeId) => {
    sessionStorage.setItem('selectedLike', likeId)
    selectLike(likeId);
  };

  const [likeItems, setLikeItems] = useState([]);

  const fetchLikesData = async () => {
    const uID = sessionStorage.getItem('userID');
    const response = await getHTTPRequest('getLikes', [uID]);
    if(response == "None")
    {
      sessionStorage.setItem('leere', 0)
    }
    else{
      sessionStorage.setItem('leere', 1)
    }
    const processedLikes = await processLikes(JSON.parse(response));
    console.log(processedLikes)
    setLikeItems(processedLikes);
  };

  const processLikes = async (likesData) => {
    const likeItems = [];
    for (const likeData of likesData) {
      const companyID = likeData;
      const companyName = await fetchCompanyName(companyID);
      const likeItem = {
        id: likeData,
        content: companyName,
      };
      likeItems.push(likeItem);
    }
    return likeItems;
  };

  async function fetchCompanyName(companyID) {
    const response = await getHTTPRequest('getCompanyInfox', [companyID]);
    const companyProfile = JSON.parse(response);
    return companyProfile[0];
  }

  useEffect(() => {
    fetchLikesData();
  }, []);

  const renderLikeOptions =  () => {
    const selectedLikeId = sessionStorage.getItem('selectedLike');
    console.log(selectedLikeId)
    return likeItems.map((likeItem) => (
      <div
        key={likeItem.id}
        className={`like-option ${sessionStorage.getItem('selectedLike') == likeItem.id ? 'active' : ''}`}
        onClick={() => handleLikeSelect(likeItem.id)}
      >
        <div className="like-box">
          <h3>{likeItem.content}</h3>
        </div>
      </div>
    ));
  };

  return (
    <div className="like-menu">
      {renderLikeOptions()}
    </div>
  );
};

export default LikeOptions;
