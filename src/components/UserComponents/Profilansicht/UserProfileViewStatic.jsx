import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Image, Table, Form, Button } from 'react-bootstrap';
import './UserProfileViewStatic.css';
import { Link } from 'react-router-dom';
import { getHTTPRequest } from '../../serverPackage';

const Profilansicht = () => {
  const [CmProfile, setCmProfile] = useState([]);
  const [Stunden, setStunden]= useState([])
  const [verfuegbarkeit, setVerfuegbarkeit] = useState({
    montag: { available: false, hours: 0 },
    dienstag: { available: false, hours: 0 },
    mittwoch: { available: false, hours: 0 },
    donnerstag: { available: false, hours: 0 },
    freitag: { available: false, hours: 0 },
    
  });

  
  const toggleVerfuegbarkeit = (tag) => {
    setVerfuegbarkeit(prevState => ({
      ...prevState,
      [tag]: {
        ...prevState[tag],
        available: !prevState[tag].available
      }
    }));
  };

  
  const handleChangeHours = (tag, value) => {
    const hours = Number(value);
    setVerfuegbarkeit(prevState => ({
      ...prevState,
      [tag]: {
        ...prevState[tag],
        hours: hours >= 0 ? hours : 0 
      }
    }));
  };

  
  const handleKeyDown = (e) => {
    
    if (e.key !== "ArrowUp" && e.key !== "ArrowDown") {
      e.preventDefault();
    }
  };

   useEffect(() => {
     const fetchData = async () => {
       const userId = sessionStorage.getItem('userID')
       console.log(userId);
       const param = [userId];
       const apiResponse = await getHTTPRequest("getProfileInfo", param);
       const apiResponse3 = await getHTTPRequest('getTage', param)
       const sortArray = JSON.parse(apiResponse);
       const selectedArray = sortArray[0];
      console.log(apiResponse3)
       const sortTage = JSON.parse(apiResponse3)
       const tage = sortTage[0]

       const userTage = {

         montag: tage[0],
        dienstag: tage[1],
        mittwoch: tage[2],
         donnerstag: tage[3],
        freitag: tage[4],


       }
       console.log(userTage)
        
    
     const StudentData = 'hallo';

      const studentData = {
         uID: selectedArray[0],
         name: selectedArray[1],
         email: selectedArray[2],
         telefon: selectedArray[3],
         abschluss: selectedArray[4],
         studium: selectedArray[5],
         semester: selectedArray[6],
         berufserf: selectedArray[7],
         skills: selectedArray[8],
         profilb: selectedArray[9],
         werdeg: selectedArray[10],
         Stunden: selectedArray[11],
         Logo: selectedArray[12],
       };

    const profile = (
    <Container className="profile-container">
      <Row>
        {/* Left Column */}
        <Col md={3}>
          <div>
            <Image
               src= {"./src/imagess/"+studentData.Logo} 
              alt="Profile"
              rounded
              style={{
                width: '200px',
                height: '200px',
                // marginTop: '20px',
                // marginBottom: '20px',
                objectFit: 'cover', 
                borderRadius: '50%', 
                marginLeft: '50px',
                marginTop: '50px'
              }}
            />
          </div>
          <Card className="mt-4" style={{ width: '300px'}}>
            <Card.Body>
              <Card.Title>Kontakt</Card.Title>
              <Card.Text>
                E-Mail: {studentData.email} <br/>
                Telefon: {studentData.telefon}  <br/>
              </Card.Text>
            </Card.Body>
          </Card>
        <Card className="mt-4" style={{ width: '300px' }}>
          <Card.Body>
            <Card.Title>Info</Card.Title>
            <Card.Text>
              Abschluss: {studentData.abschluss} <br/>
              Studiengang: {studentData.studium}<br/>
              Semester: {studentData.semester}<br/>
              Berufserfahrung (in Jahren): {studentData.berufserf}
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>

        <Col md={9}>
        <h2 style={{ marginTop: '100px', fontSize: '45px'}}> {studentData.name}</h2>
        
        <Card style={{ width: '960px', marginTop: '120px'}}>
          <Card.Body>
            <Card.Title>Profilbeschreibung</Card.Title>
            <Card.Text>
          
              {studentData.profilb}
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '960px', marginTop: '20px' }}>
          <Card.Body>
            <Card.Title>Werdegang</Card.Title>
            <Card.Text>
          
  
              {studentData.werdeg}
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '960px', marginTop: '20px' }}>
          <Card.Body>
            <Card.Title>Fähigkeiten</Card.Title>
            <Card.Text>
            
               {studentData.skills}
            </Card.Text>
          </Card.Body>
        </Card>


        <Card.Body>
    <Card.Title style={{marginTop:"20px"}}>Verfügbarkeit</Card.Title>
    <Table responsive style={{marginTop:"20px"}}>
      <thead>
        <tr>
          <th>Wochentag</th>
         
          <th>Stunden</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(verfuegbarkeit).map(tag => (
          <tr key={tag}>
            <td>{tag.charAt(0).toUpperCase() + tag.slice(1)}</td>
            <td>
              <Form.Control
                type="number"
                 value={userTage[tag]}
                readOnly 
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
   </Card.Body>
      </Col>
      </Row>
      
      <div className="pvsbuttus mb-3">
                  <Link to='/ProfilePage'>
                    <Button variant="primary">
                        Zurück
                    </Button>
                    </Link>
                </div>
    </Container>
  );
         setCmProfile(profile);
   };

     fetchData();
   }, []);
  return CmProfile;
}

  

export default Profilansicht;