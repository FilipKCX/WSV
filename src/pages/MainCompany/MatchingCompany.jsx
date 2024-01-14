import React from 'react';
import Navbar from '../../components/CompanyComponents/NavbarCompany';
import Card from '../../components/CompanyComponents/Matching/Card';
import './MatchingCompany.css';

const Matching = () => 
{
    const fetchUsers = async () => {
        try {
          const apiResponse = await getHTTPRequest("getUsers");
          console.log(apiResponse)
          return apiResponse   
          } 
          catch (error)
          {
            console.error("Error:", error);
            throw error; 
          }
        }
    console.log(fetchUsers)

return <> 
<Navbar/>
<Card fetchUsers= {fetchUsers}/>
</>
}

export default Matching;