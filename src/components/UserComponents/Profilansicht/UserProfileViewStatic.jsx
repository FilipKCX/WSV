import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Card, Button, Form, Table } from 'react-bootstrap';
import './UserProfileViewStatic.css';
import { Link } from 'react-router-dom';
import { getHTTPRequest } from '../../serverPackage';

const Profilansicht = () => {
  const [CmProfile, setCmProfile] = useState([]);
  const [verfuegbarkeit, setVerfuegbarkeit] = useState({
    montag: { available: false, hours: 0 },
    dienstag: { available: false, hours: 0 },
    mittwoch: { available: false, hours: 0 },
    donnerstag: { available: false, hours: 0 },
    freitag: { available: false, hours: 0 },
  });

  // Funktion zum Umschalten der Verfügbarkeit
  const toggleVerfuegbarkeit = (tag) => {
    setVerfuegbarkeit(prevState => ({
      ...prevState,
      [tag]: {
        ...prevState[tag],
        available: !prevState[tag].available
      }
    }));
  };

  // Funktion um Stundenanzahl zu aktualisieren
  const handleChangeHours = (tag, value) => {
    const hours = Number(value); // Stellt sicher, dass die Eingabe als Zahl gespeichert wird
    setVerfuegbarkeit(prevState => ({
      ...prevState,
      [tag]: {
        ...prevState[tag],
        hours: hours >= 0 ? hours : 0 // Verhindert negative Stundenanzahlen
      }
    }));
  };

  // Funktion um zu verhindern, dass Zahlen bei "Stunden" eingegeben werden können
  const handleKeyDown = (e) => {
    // Erlaube nur das Benutzen der Pfeiltasten
    if (e.key !== "ArrowUp" && e.key !== "ArrowDown") {
      e.preventDefault();
    }
  };

  // const saveProfile = () => {
  //   console.log('Speichern der Profildaten...');
  //   console.log('Name:', name);
  //   console.log('E-Mail:', email);
  //   console.log('Telefonnummer:', telefon);
  //   console.log('Studiengang:', studiengang);
  //   console.log('Aktuelles Semester:', semester);
  //   console.log('Fähigkeiten:', faehigkeiten);
  //   console.log('Profilbeschreibung:', profilbeschreibung);
  //   console.log('Werdegang:', werdegang);
  //   console.log('Verfügbarkeit:', verfuegbarkeit);
  //   console.log('Berufserfahrung:', berufserfahrung);
  //   alert('Profil gespeichert!'); // Für Demonstrationszwecke 
  // };

  // const [profilBild, setProfilBild] = useState(null);

  // const handleBildAuswahl = (event) => {
  //   if (event.target.files && event.target.files[0]) {
  //     setProfilBild(URL.createObjectURL(event.target.files[0]));
  //   }
  // };

  const triggerFileInput = () => {
    document.getElementById('user-profilbild-input-static').click();
  };

  return (
    <Container className="profile-container">
  
      <div className="left-aligned-content">
        <Image
          src="https://img.freepik.com/vektoren-premium/blaues-social-media-logo_197792-1759.jpg"  
          alt="Profile"
          roundedCircle
          style={{
            width: '200px',
             height: '200px',
  
          }}
        />
        <h2 className="mt-0">John Doe</h2>
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
  return CmProfile
}

export default Profilansicht;