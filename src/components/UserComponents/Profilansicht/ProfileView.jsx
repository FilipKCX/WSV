import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image, Card, Form, Button, Table } from 'react-bootstrap';
import './ProfileView.css';
import { getHTTPRequest } from '../../serverPackage';

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
      document.getElementById('profilbild-input').click();
  };
    
    const usID = sessionStorage.getItem('userID')
    let paramArray = [usID, name, email, telefon, studiengang, semester, faehigkeiten, profilbeschreibung, werdegang, verfuegbarkeit];

    async function handleProfileCreation() {
      try {
       const apiResponse = await getHTTPRequest("createProfile", paramArray);
       if(apiResponse == 'a')
       {
         alert('Etwas hat nicht geklappt!');
         return;
       }    
     
       if ( sessionStorage.getItem('isUser') == "(1)") {
         
       }
       else
       {
         
       } 
       } 
       catch (error)
       {
         console.error("Error:", error);
         throw error; 
       }
     }


      handleProfileCreation();
    
    return (
        <Container className="profil-container">
            <Row className="justify-content-md-center profil-row">
                <Col md={6} className="profil-col">
                <div className="profil-bild-container" onClick={triggerFileInput}>
                    <Image src={profilBild || "platzhalter-bild-url.jpg"} roundedCircle className="profil-bild" />
                    <div>Klicken, um Foto hinzuzufügen</div>
                    <input type="file" id="profilbild-input" hidden onChange={handleBildAuswahl} />
                </div>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Name"
                            value={name} 
                            onChange={e => setName(e.target.value)}
                            className="profil-input"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="E-Mail"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="profil-input"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Telefonnummer"
                            value={telefon}
                            onChange={e => setTelefon(e.target.value)}
                            className="profil-input"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Studiengang"
                            value={studiengang}
                            onChange={e => setStudiengang(e.target.value)}
                            className="profil-input"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Aktuelles Semester"
                            value={semester}
                            onChange={e => setSemester(e.target.value)}
                            className="profil-input"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          placeholder="Ihre Fähigkeiten (2-3 Sätze)"
                          value={faehigkeiten}
                          onChange={e => setFaehigkeiten(e.target.value)}
                          className="profil-input"
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
                                onChange={e => setProfilbeschreibung(e.target.value)}
                                className="profil-input"
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
                                onChange={e => setWerdegang(e.target.value)}
                                className="profil-input"
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
                                      />
                                    </div>
                                  </td>
                                  <td>
                                  <Form.Control
                                    type="number"
                                    value={verfuegbarkeit[tag].hours}
                                    onChange={e => handleChangeHours(tag, e.target.value)}
                                    onKeyDown={handleKeyDown} // Event-Handler hinzufügen
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
                         <Button variant="primary" onClick={saveProfile}>Speichern</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );

};
export default Profilansicht;







