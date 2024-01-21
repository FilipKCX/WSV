import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Card, Button, Form, Table } from 'react-bootstrap';
import './UserProfileViewStatic.css';
import { Link } from 'react-router-dom';
import { getHTTPRequest } from '../../serverPackage';


const Profilansicht = () => {
  const [CmProfile, setCmProfile] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [verfuegbarkeit, setVerfuegbarkeit] = useState({
    montag: { available: false, hours: 0 },
    dienstag: { available: false, hours: 0 },
    mittwoch: { available: false, hours: 0 },
    donnerstag: { available: false, hours: 0 },
    freitag: { available: false, hours: 0 },
  });

  // Funktion zum Umschalten der Verfügbarkeit
  // const toggleVerfuegbarkeit = (tag) => {
  //   setVerfuegbarkeit(prevState => ({
  //     ...prevState,
  //     [tag]: {
  //       ...prevState[tag],
  //       available: !prevState[tag].available
  //     }
  //   }));
  // };

  // Funktion um Stundenanzahl zu aktualisieren
  // const handleChangeHours = (tag, value) => {
  //   const hours = Number(value); // Stellt sicher, dass die Eingabe als Zahl gespeichert wird
  //   setVerfuegbarkeit(prevState => ({
  //     ...prevState,
  //     [tag]: {
  //       ...prevState[tag],
  //       hours: hours >= 0 ? hours : 0 // Verhindert negative Stundenanzahlen
  //     }
  //   }));
  // };

  // Funktion um zu verhindern, dass Zahlen bei "Stunden" eingegeben werden können
  // const handleKeyDown = (e) => {
  //   // Erlaube nur das Benutzen der Pfeiltasten
  //   if (e.key !== "ArrowUp" && e.key !== "ArrowDown") {
  //     e.preventDefault();
  //   }
  // };

  useEffect(() => {
    const fetchData = async () => {
      const userId = sessionStorage.getItem('selectedProfile')
      console.log(userId);
      const param = [userId];
      const apiResponse = await getHTTPRequest("getProfileInfo", param);
      const sortArray = JSON.parse(apiResponse);
      const selectedArray = sortArray[0];

      // Extract student data into a single object
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
  const logo = "./src/imagess/" + studentData.Logo
  const profile = (
    <Container className="profile-container">
  
      <div className="left-aligned-content">
        <Image
          src={logo}  
          alt="Profile"
          roundedCircle
          style={{
            width: '200px',
             height: '200px',
             marginTop: '20px'
  
          }}
        />
        <h2 className="mt-3">{studentData.name}</h2>
        <Card className="mt-4" style={{ width: '1000px' }}>
          <Card.Body>
            <Card.Title>Kontakt</Card.Title>
            <Card.Text>
              E-Mail: <br/>
              Telefon: <br/>
              Standort:
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="mt-4" style={{ width: '1000px' }}>
          <Card.Body>
            <Card.Title>Info</Card.Title>
            <Card.Text>
              Abschluss: <br/>
              Studiengang: <br/>
              Semester:<br/>
              Berufserfahrung (in Jahren):
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="mt-3" style={{ width: '1000px' }}>
          <Card.Body>
            <Card.Title>Fähigkeiten</Card.Title>
            <Card.Text>
              Outside of coding, I love exploring new places, trying exotic cuisines, and embarking on exciting adventures.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="mt-4" style={{ width: '1000px' }}>
          <Card.Body>
            <Card.Title>Profilbeschreibung</Card.Title>
            <Card.Text>
              With a love for coding and problem-solving, I enjoy building innovative solutions that make a difference.
            </Card.Text>
          </Card.Body>
        </Card>

      <Card className="mt-4" style={{ width: '1000px' }}>
          <Card.Body>
            <Card.Title>Werdegang</Card.Title>
            <Card.Text>
              With a love for coding and problem-solving, I enjoy building innovative solutions that make a difference.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="mt-3" style={{ width: '1000px' }}>
          <Card.Body>
            <Card.Title>Verfügbarkeit</Card.Title>
            <Card.Text>
              Outside of coding, I love exploring new places, trying exotic cuisines, and embarking on exciting adventures.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
     
      
      <div className="pvsbuttus mb-3">
                  <Link to='/Matching'>
                    <Button variant="primary">
                        Zurück
                    </Button>
                    </Link>
                </div>
    </Container>
  );
      setIsLoading(false);
      setCmProfile(profile);
};

    fetchData();
  }, []);
  return CmProfile
}

export default Profilansicht;