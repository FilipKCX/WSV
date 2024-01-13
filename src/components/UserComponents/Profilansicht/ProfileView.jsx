import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image, Card, Form, Button, Table } from 'react-bootstrap';
import './ProfileView.css';
import { getHTTPRequest } from '../../serverPackage';

const Profilansicht = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telefon, setTelefon] = useState('');
    const [profilbeschreibung, setProfilbeschreibung] = useState('');
    const [werdegang, setWerdegang] = useState('');
    const [faehigkeiten, setFaehigkeiten] = useState('');
    const [verfuegbarkeit, setVerfuegbarkeit] = useState({
      montag: false,
      dienstag: false,
      mittwoch: false,
      donnerstag: false,
      freitag: false,
      samstag: false,
      sonntag: false,
    });

    
    const toggleVerfuegbarkeit = (tag) => {
      setVerfuegbarkeit(prevState => ({
          ...prevState,
          [tag]: !prevState[tag]
      }));
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

    const saveProfile = () => {
      console.log('Speichern der Profildaten...');
      console.log('Name:', name);
      console.log('E-Mail:', email);
      console.log('Telefonnummer:', telefon);
      console.log('Fähigkeiten:', faehigkeiten);
      console.log('Profilbeschreibung:', profilbeschreibung);
      console.log('Werdegang:', werdegang);
      console.log('Verfügbarkeit:', verfuegbarkeit);
      alert('Profil gespeichert!'); 
    
    let usID = sessionStorage.getItem('userID')
    let paramArray = [usID, name, email, telefon, faehigkeiten, profilbeschreibung, werdegang];

    async function handleProfileCreation() {
      try {
       const apiResponse = await getHTTPRequest("createProfile", paramArray);
       if(apiResponse == 'a')
       {
         alert('Etwas hat nicht geklappt!');
         return;
       }    
     
       if ( sessionStorage.getItem('isUser') == "(1)") {
         //navigate("/HomeUser");
       }
       else
       {
         //navigate("/HomeCompany");
       } 
       } 
       catch (error)
       {
         console.error("Error:", error);
         throw error; 
       }
     }


      handleProfileCreation();
    };

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
                          as="textarea"
                          rows={3}
                          placeholder="Ihre Fähigkeiten"
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
                              <th>Verfügbar</th>
                            </tr>
                          </thead>
                          <tbody>
                            {Object.keys(verfuegbarkeit).map(tag => (
                              <tr key={tag}>
                                <td>{tag.charAt(0).toUpperCase() + tag.slice(1)}</td>
                                <td>
                                  <Form.Check
                                    type="checkbox"
                                    checked={verfuegbarkeit[tag]}
                                    onChange={() => toggleVerfuegbarkeit(tag)}
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
}

export default Profilansicht;



