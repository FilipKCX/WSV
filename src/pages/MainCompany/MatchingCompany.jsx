import React, { useState, useEffect } from 'react';
import Navbar from '../../components/CompanyComponents/NavbarCompany';
import Card from '../../components/CompanyComponents/Matching/Card';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import './MatchingCompany.css';
import { getHTTPRequest } from '/src/components/serverPackage';
import TestComponent from '../../components/testcomponent';
import CardTest from '../../components/CompanyComponents/Matching/CardTest';
import { element } from 'prop-types';

export default function  Matching () 
{
  const [isLoading, setIsLoading] = useState(true);
  const [userArray, setUserArray]=  useState([]);
  useEffect(() => {
   const fetchUsers = async () => {
          const usID = sessionStorage.getItem('userID')
          const ApiResponse2 = await getHTTPRequest("getAlreadyLiked", [usID])
          console.log(ApiResponse2)
          const apiResponse = await getHTTPRequest("getUsers");
          console.log(apiResponse)
          
          const newArray = JSON.parse(apiResponse)
          let fArray = []
          if(ApiResponse2 === "None" )
          {  
            fArray = newArray 
          }
          else
          {          
            const usersToExclude = JSON.parse(ApiResponse2);   
            fArray = newArray.filter(element => !usersToExclude.includes(element));
          }
          console.log(newArray)
          setIsLoading(false)
          setUserArray(fArray);        
        }
   fetchUsers();
   
      },[]); 
      console.log(userArray)
      if (isLoading) {
        return <div>Loading...</div>;
      }

return <> 
<Navbar/>
<div className="container" style={{display: 'flex', flexWrap: 'wrap'}}>
        {userArray.length > 0 &&
          userArray.map((userId) => (
            <div className="card-container">
              <Card key={userId} userId={userId} />
            </div>
          ))}
      </div>
  
</>
}
