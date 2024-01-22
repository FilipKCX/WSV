import React, { useState, useEffect } from 'react';
import './LikeMenu.css';
import { getHTTPRequest } from '../../serverPackage';
import LikeWindow from './LikeWindow';

export default function LikeBox({ company, isActive = false, onClick }) {
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
            onClick={LikeWindow(company)}
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