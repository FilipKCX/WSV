import React from 'react';
import './LikeMenu.css';
import { getHTTPRequest } from '../../serverPackage';
import { useState , useEffect} from 'react';

export default function LikeMenu  ({ selectLike, selectedLike,  })  
{
  const [isLoading, setIsLoading] = useState(true);
  const [likeUsers, setLikeUsers] = useState([12, 16 , 18]);
  const uID = sessionStorage.getItem('userID');
  const param = [uID];

  const handleLikeSelect = (likeId) => {
    selectLike(likeId);
  };
  
  
  useEffect(() => {
    const fetchUsers = async () => {
           const apiResponse = await getHTTPRequest("getLikes", param);
           const newArray = JSON.parse(apiResponse)
           console.log(newArray)
           setIsLoading(false)
           //setLikeUsers(newArray);        
         }
    fetchUsers();
    
       },[]); 


       if (isLoading) {
        return <div>Loading...</div>;
      }

  return <>

    <div className="like-menu">
      <div className="like-options">
        {likeUsers.map((company) => (
          <div
            key={company}
            className={`like-option ${selectedLike === company ? 'active' : ''}`}
            onClick={() => handleLikeSelect(company)}
          >
            <LikeBox company={company} />
          </div>
        ))}
      </div>
    </div>
    </>
};

const LikeBox = ({ company }) => {

  useEffect(() => {
    const fetchData = async () => {
      console.log(company);
      const param = [company];
      const apiResponse = await getHTTPRequest("getCompanyInfox", param);
      const sortArray = JSON.parse(apiResponse);
      const selectedArray = sortArray[0];

      // Extract student data into a single object
      const companyData = {
        name: selectedArray[1],
        study: selectedArray[4],
        graduation: selectedArray[5],
        workingHours: selectedArray[9],
        experience: selectedArray[9],
      };
    }

  return (
    <div className="like-box">
      <h3></h3>
      <p>Description or preview here...</p>
    </div>
  );
    }, []);
};


