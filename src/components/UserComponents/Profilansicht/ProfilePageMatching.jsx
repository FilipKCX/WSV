import React, { useState } from 'react';
import { Container, Row, Col, Image, Card, Button, Form, Table } from 'react-bootstrap';
import './UserProfileViewStatic.css';
import { Link } from 'react-router-dom';


const Profilansicht = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telefon, setTelefon] = useState('');
  const [studiengang, setStudiengang] = useState('');
  const [semester, setSemester] = useState('');
  const [profilbeschreibung, setProfilbeschreibung] = useState('');
  const [werdegang, setWerdegang] = useState('');
  const [berufserfahrung, setBerufserfahrung] = useState('');
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
    <Container className="profil-container">
        <Row className="justify-content-md-center profil-row">
            <Col md={6} className="profil-col">
                <div className="profil-bild-container">
                    <Image
                        src={''}
                        roundedCircle
                        className="profil-bild"
                    />
                    {/* <div>Klicken, um Foto hinzuzufügen</div> */}
                </div>
                <Form.Group>
                    <div className="profil-input-static">{name || "Name"}</div>
                </Form.Group>
                <Form.Group>
                    <div className="profil-input-static">{email || "E-Mail"}</div>
                </Form.Group>
                <Form.Group>
                    <div className="profil-input-static">{telefon || "Telefonnummer"}</div>
                </Form.Group>
                <Form.Group>
                    <div className="profil-input-static">{studiengang || "Studiengang"}</div>
                </Form.Group>
                <Form.Group>
                    <div className="profil-input-static">{semester || "Aktuelles Semester"}</div>
                </Form.Group>
                <Form.Group>
                    <div className="profil-input-static">{faehigkeiten || <>Ihre Fähigkeiten (Mindestens 3 Sätze)<br />Zweite Zeile der Fähigkeiten.<br />Dritte Zeile der Fähigkeiten.</>}</div>
                </Form.Group>
            </Col>
            <Col md={6}>
                <Card className="profil-card">
                    <Card.Body>
                        <Card.Title>Profilbeschreibung</Card.Title>
                        <div className="profil-input-static">
                            {profilbeschreibung || <>Hier kommt Ihre Profilbeschreibung hin.<br /> Zweite Zeile der Profilbeschreibung <br />Dritte Zeile der Profilbeschreibung.</>}
                        </div>
                    </Card.Body>
                </Card>
                <Card className="profil-card">
                    <Card.Body>
                        <Card.Title>Werdegang</Card.Title>
                        <div className="profil-input-static">
                            {werdegang || <>Hier können Sie Ihren beruflichen Werdegang darstellen.<br />Zweite Zeile des Werdegangs.<br />Dritte Zeile des Werdegangs.</>}
                        </div>
                    </Card.Body>
                </Card>
                <Card className="profil-card">
                    <Card.Body>
                        <Card.Title>Berufserfahrung</Card.Title>
                        <div className="profil-input-static">
                            {berufserfahrung || <>Hier können Sie Ihren beruflichen Werdegang darstellen.<br />Zweite Zeile des Werdegangs.<br />Dritte Zeile des Werdegangs.</>}
                        </div>
                    </Card.Body>
                </Card>
                <Card className="profil-card">
                  <Card.Body>
                    <Card.Title>Verfügbarkeit</Card.Title>
                    <Table responsive>
                      <thead>
                        <tr>
                          <th>Wochentag</th>
                          <th className="th-verfuegbar">Verfügbar</th>
                          <th>Stunden</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.keys(verfuegbarkeit).map(tag => (
                          <tr key={tag}>
                            <td>{tag.charAt(0).toUpperCase() + tag.slice(1)}</td>
                            <td className="td-verfuegbar">
                              <div className="form-check">
                                <Form.Check
                                  type="checkbox"
                                  checked={verfuegbarkeit[tag].available}
                                  onChange={() => toggleVerfuegbarkeit(tag)}
                                  disabled
                                />
                              </div>
                            </td>
                            <td>
                              <Form.Control
                                type="number"
                                value={verfuegbarkeit[tag].hours}
                                onChange={e => handleChangeHours(tag, e.target.value)}
                                onKeyDown={handleKeyDown}
                                disabled={!verfuegbarkeit[tag].available}
                                readOnly
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
                <div className="pvsbutt mb-3">
                  <Link to='/ProfilePage'>
                    <Button variant="primary">
                        Zurück
                    </Button>
                    </Link>
                </div>
            </Col>
        </Row>
    </Container>
);

}

export default Profilansicht;