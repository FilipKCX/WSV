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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const userId = sessionStorage.getItem('userID')
  //     console.log(userId);
  //     const param = [userId];
  //     const apiResponse = await getHTTPRequest("getProfileInfo", param);
  //     const apiResponse3 = await getHTTPRequest('getTage', param)
  //     const sortArray = JSON.parse(apiResponse);
  //     const selectedArray = sortArray[0];
  //     console.log(apiResponse3)
  //     const sortTage = JSON.parse(apiResponse3)
  //     const tage = sortTage[0]

  //     const userTage = {

  //       montag: tage[0],
  //       dienstag: tage[1],
  //       mittwoch: tage[2],
  //       donnerstag: tage[3],
  //       freitag: tage[4],


  //     }
  //     console.log(userTage)
        
    
  //   const StudentData = 'hallo';

  //     const studentData = {
  //       uID: selectedArray[0],
  //       name: selectedArray[1],
  //       email: selectedArray[2],
  //       telefon: selectedArray[3],
  //       abschluss: selectedArray[4],
  //       studium: selectedArray[5],
  //       semester: selectedArray[6],
  //       berufserf: selectedArray[7],
  //       skills: selectedArray[8],
  //       profilb: selectedArray[9],
  //       werdeg: selectedArray[10],
  //       Stunden: selectedArray[11],
  //       Logo: selectedArray[12],
  //     };

    const profile = (
    <Container className="profile-container">
      <Row>
        {/* Left Column */}
        <Col md={3}>
          <div>
            <Image
               src= {/*"./src/imagess/"+studentData.Logo*/ 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png'} 
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
                E-Mail: example@email.com{/*studentData.email*/} <br/>
                Telefon: 123-456-7890{/*studentData.telefon*/}  <br/>
              </Card.Text>
            </Card.Body>
          </Card>
        <Card className="mt-4" style={{ width: '300px' }}>
          <Card.Body>
            <Card.Title>Info</Card.Title>
            <Card.Text>
              Abschluss: Bachelor of Science{/*studentData.abschluss*/} <br/>
              Studiengang: Computer Science{/*studentData.studium*/}<br/>
              Semester: 5{/*studentData.semester*/}<br/>
              Berufserfahrung (in Jahren): 2{/*studentData.berufserf*/}
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>

        <Col md={9}>
        <h2 style={{ marginTop: '100px', fontSize: '45px'}}> John Doe{/*studentData.name*/}</h2>
        
        <Card style={{ width: '960px', marginTop: '120px'}}>
          <Card.Body>
            <Card.Title>Profilbeschreibung</Card.Title>
            <Card.Text>
            "I am a motivated and creative individual with a strong passion for web development. My goal is to create user-friendly and visually appealing websites that make a positive impact. Currently pursuing a degree in Computer Science with a focus on front-end technologies.",
              {/*studentData.profilb*/}
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '960px', marginTop: '20px' }}>
          <Card.Body>
            <Card.Title>Werdegang</Card.Title>
            <Card.Text>
            "During my academic journey, I've had the opportunity to work on various projects, including a collaborative e-commerce platform where I led the front-end development. I also completed an internship at ABC Tech, where I gained valuable experience in building scalable web applications using React and Node.js.",
  
              {/*studentData.werdeg*/}
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '960px', marginTop: '20px' }}>
          <Card.Body>
            <Card.Title>Fähigkeiten</Card.Title>
            <Card.Text>
            "Proficient in JavaScript and its modern frameworks such as React.js. Solid understanding of HTML5, CSS3, and responsive web design. Experience with version control systems like Git. Familiarity with back-end technologies including Node.js. Strong problem-solving and communication skills.",
               {/*studentData.skills*/}
            </Card.Text>
          </Card.Body>
        </Card>


        <Card.Body>
    <Card.Title style={{marginTop:"20px"}}>Verfügbarkeit</Card.Title>
    <Table responsive style={{marginTop:"20px"}}>
      <thead>
        <tr>
          <th>Wochentag</th>
          {/* <th className="th-verfuegbar">Verfügbar</th> */}
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
                // value={userTage[tag]}
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
                  <Link to='/Matching'>
                    <Button variant="primary">
                        Zurück
                    </Button>
                    </Link>
                </div>
    </Container>
  );
  //       setCmProfile(profile);
  // };

  //   fetchData();
  // }, []);
  return profile;
}

  

export default Profilansicht;