import React from 'react';
import './LikeMenu.css';
import { getHTTPRequest } from '../../serverPackage';
import { useState , useEffect} from 'react';
import LikeWindow from './LikeWindow';

export default function LikeMenu  ({ selectLike, selectedLike,  })  
{
  const [isLoading, setIsLoading] = useState(true);
  const [likeUsers, setLikeUsers] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const uID = sessionStorage.getItem('userID');
  const param = [uID];

  const handleLikeSelect = (likeId) => {
    return <>
          {likeId}
    </>
  };
  
  
  useEffect(() => {
    const fetchUsers = async () => {
           const apiResponse = await getHTTPRequest("getLikes", param);
           console.log(apiResponse)
           const newArray = JSON.parse(apiResponse)
           console.log(newArray)
           setIsLoading(false)
           setLikeUsers([newArray]);        
         }
    fetchUsers();
    
       },[]); 

       console.log(likeUsers)
       if (isLoading) {
        return <div>Loading...</div>;
      }

  return <>

    <div className="like-menu">
      <div className="like-options">
        {likeUsers[0].map((company) => (
          <div 
             key={company}
              className={`like-option ${selectedLike === company ? 'active' : ''}`}
              onClick={() => {
                if (selectedLike !== company) {
                  setSelectedOption(company);
                  handleLikeSe(company);
               }
          }}>

            <LikeBox company={company} />
          </div>
        ))}
      </div>
    </div>
    </>
};

function LikeBox  ({ company }) {
  const[compd, setcompd] = useState([])
  const handleLikeSelect = (likeId) => {
    return <>
          {likeId}
    </>
  };
  useEffect(() => {
    const fetchData = async () => {
      console.log(company);
      const param = [company];
      const apiResponse = await getHTTPRequest("getCompanyInfox", param);
      const sortArray = JSON.parse(apiResponse);
      const selectedArray = sortArray[0];
      console.log(selectedArray)
      // Extract student data into a single object
      const companyData = {
        name: selectedArray[1],
      };
      
      const menu = (
        <div className="like-box" onClick={handleLikeSelect(company)}>
          <h3>{companyData.name}</h3>
          <p>Chatte jetzt mit {companyData.name} !</p>
        </div>
      );
        setcompd(menu)
    }
    fetchData();
    
  
}, []);
return compd
};


