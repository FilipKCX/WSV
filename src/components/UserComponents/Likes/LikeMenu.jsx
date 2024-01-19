import React, { useState, useEffect } from 'react';
import './LikeMenu.css';
import { getHTTPRequest } from '../../serverPackage';
import LikeWindow from './LikeWindow';

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

function LikeBox({ company, isActive, onClick }) {
  const [compd, setcompd] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const param = [company];
      const apiResponse = await getHTTPRequest("getCompanyInfox", param);
      const sortArray = JSON.parse(apiResponse);
      const selectedArray = sortArray[0];

      const companyData = {
        name: selectedArray[1],
      };

      const menu = (
        <div className="like-options">
        <div
          className={`like-box ${isActive ? 'active' : ''}`}
          onClick={onClick}
        >
          <h3>{companyData.name}</h3>
          <p>Chatte jetzt mit {companyData.name} !</p>
        </div>
        </div>
      );

      setcompd(menu);
    };

    fetchData();
  }, [company, isActive, onClick]);

  return compd;
}