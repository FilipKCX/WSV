import { Container, Row, Col, Image, Card, Form, Button } from 'react-bootstrap';
import './ProfileViewStatic.css';
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import React, { useState, useEffect } from 'react';
import { getHTTPRequest } from '../../serverPackage';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  const [CmProfile, setCmProfile] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const userId = sessionStorage.getItem('userID')
      console.log(userId);
      const param = [userId];
      const apiResponse = await getHTTPRequest("getCompanyInfos", param);
      const sortArray = JSON.parse(apiResponse);
      const selectedArray = sortArray[0];

      // Extract student data into a single object
      const studentData = {
        uID: selectedArray[0],
        name: selectedArray[1],
        email: selectedArray[2],
        standort: selectedArray[3],
        wws: selectedArray[4],
        wwb: selectedArray[5],
        karriere: selectedArray[6],
        geschihte: selectedArray[7],
        logo: selectedArray[8],
       
      };
  const logo = "./src/imagess/" + studentData.logo
  const cprofile = (

    <Container className="profile-container">
  
      <div className="left-aligned-content">
        <Image
          src={logo}  
          alt="Profile"
          roundedCircle
          style={{
            width: '200px',
            height: '200px',
  
          }}
        />
        <h2 className="mt-0">{studentData.name}</h2>
        <Card className="mt-4" style={{ width: '1000px' }}>
          <Card.Body>
            <Card.Title>Kontakt</Card.Title>
            <Card.Text>
              E-Mail: {studentData.email}<br/>
              Standort:{studentData.standort}
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="mt-3" style={{ width: '1000px' }}>
          <Card.Body>
            <Card.Title>Beschreibung</Card.Title>
            <Card.Text>
            {studentData.wws}
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="mt-4" style={{ width: '1000px' }}>
          <Card.Body>
            <Card.Title>Was wir bieten:</Card.Title>
            <Card.Text>
            {studentData.wwb}
            </Card.Text>
          </Card.Body>
        </Card>

      <Card className="mt-4" style={{ width: '1000px' }}>
          <Card.Body>
            <Card.Title>Unsere Geschichte</Card.Title>
            <Card.Text>
            {studentData.geschihte}
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="mt-3" style={{ width: '1000px' }}>
          <Card.Body>
            <Card.Title>Karrierechancen</Card.Title>
            <Card.Text>
            {studentData.karriere}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
     
      <div className="pvsbuttus mb-3">
                  <Link to='/ProfilePageCompany'>
                    <Button variant="primary">
                        Zurück
                    </Button>
                    </Link>
                </div>
    </Container>
  );
  setCmProfile(cprofile);
};

    fetchData();
  }, []);
  return CmProfile
};

export default ProfilePage;
