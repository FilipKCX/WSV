import React, { useState } from 'react';
import { Container, Row, Col, Image, Card, Button, Form, Table } from 'react-bootstrap';
import './UserProfileViewStatic.css';

const Profilansicht = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telefon, setTelefon] = useState('');
  const [studiengang, setStudiengang] = useState('');
  const [semester, setSemester] = useState('');
  const [profilbeschreibung, setProfilbeschreibung] = useState('');
  const [werdegang, setWerdegang] = useState('');
  const [faehigkeiten, setFaehigkeiten] = useState('');
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

  const saveProfile = () => {
    console.log('Speichern der Profildaten...');
    console.log('Name:', name);
    console.log('E-Mail:', email);
    console.log('Telefonnummer:', telefon);
    console.log('Studiengang:', studiengang);
    console.log('Aktuelles Semester:', semester);
    console.log('Fähigkeiten:', faehigkeiten);
    console.log('Profilbeschreibung:', profilbeschreibung);
    console.log('Werdegang:', werdegang);
    console.log('Verfügbarkeit:', verfuegbarkeit);
    alert('Profil gespeichert!'); // Für Demonstrationszwecke 
  };

  const [profilBild, setProfilBild] = useState(null);

  const handleBildAuswahl = (event) => {
    if (event.target.files && event.target.files[0]) {
      setProfilBild(URL.createObjectURL(event.target.files[0]));
    }
  };

  const triggerFileInput = () => {
    document.getElementById('user-profilbild-input-static').click();
  };

  return (
    <Container className="user-profil-container-static">
      <Row className="justify-content-md-center user-profil-row-static">
        <Col md={6} className="user-profil-col-static">
          <div className="user-profil-bild-container-static">
            <Image src="platzhalter-bild-url.jpg" roundedCircle className="profil-bild" />
          </div>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Name"
              value={name}
              readOnly // Hinzugefügt, um das Feld nur lesbar zu machen
              className="user-profil-input-static"
              disabled
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="E-Mail"
              value={email}
              readOnly // Hinzugefügt, um das Feld nur lesbar zu machen
              className="user-profil-input-static"
              disabled
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Telefonnummer"
              value={telefon}
              readOnly // Hinzugefügt, um das Feld nur lesbar zu machen
              className="user-profil-input-static"
              disabled
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Studiengang"
              value={studiengang}
              readOnly // Hinzugefügt, um das Feld nur lesbar zu machen
              className="user-profil-input-static"
              disabled
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Aktuelles Semester"
              value={semester}
              readOnly // Hinzugefügt, um das Feld nur lesbar zu machen
              className="user-profil-input-static"
              disabled
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Ihre Fähigkeiten (2-3 Sätze)"
              value={faehigkeiten}
              readOnly // Hinzugefügt, um das Feld nur lesbar zu machen
              className="user-profil-input-static"
              disabled
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Card className="profil-card">
            <Card.Body>
              <Card.Title>Profilbeschreibung</Card.Title>
              <Form.Control
                as="textarea"
                placeholder="Hier kommt Ihre Profilbeschreibung hin."
                rows={3}
                value={profilbeschreibung}
                readOnly // Hinzugefügt, um das Feld nur lesbar zu machen
                className="profil-input"
                disabled
              />
            </Card.Body>
          </Card>
          <Card className="profil-card">
            <Card.Body>
              <Card.Title>Werdegang</Card.Title>
              <Form.Control
                as="textarea"
                placeholder="Hier können Sie Ihren beruflichen Werdegang darstellen."
                rows={3}
                value={werdegang}
                readOnly // Hinzugefügt, um das Feld nur lesbar zu machen
                className="profil-input"
                disabled
              />
            </Card.Body>
          </Card>
          <Card className="profil-card">
            <Card.Body>
              <Card.Title>Verfügbarkeit</Card.Title>
              <Table responsive>
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
                          value={verfuegbarkeit[tag].hours}
                          onChange={e => handleChangeHours(tag, e.target.value)}
                          onKeyDown={handleKeyDown}
                          disabled={!verfuegbarkeit[tag].available}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
          <div className="d-flex justify-content-end mb-3">
            <Button variant="primary" className='bearbeiten-button' onClick={saveProfile}>Bearbeiten</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Profilansicht;