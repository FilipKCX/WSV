import React, { useState, useEffect } from 'react';
import { getHTTPRequest } from '../../serverPackage';

const LikeWindow = ({ selectedLike }) => {
  const [likeContent, setLikeContent] = useState(null);

  useEffect(() => {
    const fetchLikeContent = async (likeId) => {
      try {
        const response = await getHTTPRequest("getCompanyInfos", [likeId]);
        const parsedContent = JSON.parse(response);
        setLikeContent(parsedContent);
      } catch (error) {
        console.error('Error fetching like content:', error);
        setLikeContent(null);
      }
    };

    const selectedContent = sessionStorage.getItem('selectedLike');
    
    if (selectedContent != null && selectedContent !== (selectedLike +2 ).toString()) {
      fetchLikeContent(selectedContent);
    } else {
      // Reset likeContent when no content is selected
      setLikeContent(null);
    }
  }, [selectedLike]);
  console.log(likeContent)
  return (
    <div className="like-window">
      {likeContent ? (
        <div className="like-content">
          <p>{likeContent} + " aaa"</p>
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