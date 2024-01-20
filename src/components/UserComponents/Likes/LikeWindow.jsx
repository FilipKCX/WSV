import React, { useState, useEffect } from 'react';
import { getHTTPRequest } from '../../serverPackage';

const LikeWindow = ({ selectedLike }) => {

  const fetchLikeContent = async (likeId) => {
    const response = await getHTTPRequest("getCompanyInfo", likeId);
    const likeContent = JSON.parse(response);
    console.log(likeContent)
    return likeContent;
  };

  const selectedContent = likeItems.find((item) => item.id === selectedLike);

  const renderLikeContent = async () => {
    if (selectedContent) {
      const likeContentData = await fetchLikeContent(selectedContent.id);
      return (
        <div className="like-content">
          <p>{likeContentData.content}</p>
        </div>
      );
    } else {
      return (
        <div className="no-content">
          <p>No content selected</p>
        </div>
      );
    }
  };

  return (
    <div className="like-window">
      {renderLikeContent()}
    </div>
  );
};

export default LikeWindow;