import React, { useState, useEffect } from 'react';
import Navbar from '../../components/CompanyComponents/NavbarCompany';
import Card from '../../components/CompanyComponents/Matching/Card';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import './MatchingCompany.css';
import { getHTTPRequest } from '/src/components/serverPackage';
import TestComponent from '../../components/testcomponent';

export default function  Matching () 
{
  const [isLoading, setIsLoading] = useState(true);
  const [userArray, setUserArray]=  useState([]);
  useEffect(() => {
   const fetchUsers = async () => {
          const apiResponse = await getHTTPRequest("getUsers");
          const newArray = JSON.parse(apiResponse)
          console.log(newArray)
          setIsLoading(false)
          setUserArray(newArray);        
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
