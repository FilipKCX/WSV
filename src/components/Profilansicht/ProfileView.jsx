// import React, { useState } from 'react';
// import { Container, Row, Col, Image, Card, Form, Button } from 'react-bootstrap';
// import Table from 'react-bootstrap/Table';
// import './ProfileView.css';

// const Profilansicht = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [telefon, setTelefon] = useState('');
//     const [profilbeschreibung, setProfilbeschreibung] = useState('');
//     const [werdegang, setWerdegang] = useState('');
//     const [faehigkeiten, setFaehigkeiten] = useState('');
//     const [verfuegbarkeit, setVerfuegbarkeit] = useState({
//       montag: false,
//       dienstag: false,
//       mittwoch: false,
//       donnerstag: false,
//       freitag: false,
//       samstag: false,
//       sonntag: false,
//     });
//     // Funktion zum Umschalten der Verfügbarkeit
//     const toggleVerfuegbarkeit = (tag) => {
//       setVerfuegbarkeit(prevState => ({
//           ...prevState,
//           [tag]: !prevState[tag]
//       }));
//   };

//     const saveProfile = () => {
//       console.log('Speichern der Profildaten...');
//       console.log('Name:', name);
//       console.log('E-Mail:', email);
//       console.log('Telefonnummer:', telefon);
//       console.log('Fähigkeiten:', faehigkeiten);
//       console.log('Profilbeschreibung:', profilbeschreibung);
//       console.log('Werdegang:', werdegang);
//       console.log('Verfügbarkeit:', verfuegbarkeit);
//       // Hier eig an Server senden
//       alert('Profil gespeichert!'); // Für Demonstrationszwecke 
//    };
// };
//     return (
//         <Container className="profil-container">
//             <Row className="justify-content-md-center profil-row">
//                 <Col md={6} className="profil-col">
//                     <div className="profil-bild-container">
//                         <Image src="platzhalter-bild-url.jpg" roundedCircle className="profil-bild" />
//                     </div>
//                     <Form.Group>
//                         <Form.Control
//                             type="text"
//                             placeholder="Name"
//                             value={name} 
//                             onChange={e => setName(e.target.value)}
//                             className="profil-input"
//                         />
//                     </Form.Group>
//                     <Form.Group>
//                         <Form.Control
//                             type="text"
//                             placeholder="E-Mail"
//                             value={email}
//                             onChange={e => setEmail(e.target.value)}
//                             className="profil-input"
//                         />
//                     </Form.Group>
//                     <Form.Group>
//                         <Form.Control
//                             type="text"
//                             placeholder="Telefonnummer"
//                             value={telefon}
//                             onChange={e => setTelefon(e.target.value)}
//                             className="profil-input"
//                         />
//                     </Form.Group>
//                     <Row>
//                     <Col md={12}>
//                       <Form.Group>
//                         <Form.Control
//                           as="textarea"
//                           rows={2}
//                           placeholder="Ihre Fähigkeiten"
//                           value={faehigkeiten}
//                           onChange={e => setFaehigkeiten(e.target.value)}
//                         />
//                       </Form.Group>
//                     </Col>
//                   </Row>
//                 </Col>
//                 <Col md={6}>
//                     <Card className="profil-card">
//                         <Card.Body>
//                             <Card.Title>Profilbeschreibung</Card.Title>
//                             <Form.Control
//                                 as="textarea"
//                                 placeholder="Hier kommt Ihre Profilbeschreibung hin."
//                                 rows={3}
//                                 value={profilbeschreibung}
//                                 onChange={e => setProfilbeschreibung(e.target.value)}
//                             />
//                         </Card.Body>
//                     </Card>
//                     <Card className="profil-card">
//                         <Card.Body>
//                             <Card.Title>Werdegang</Card.Title>
//                             <Form.Control
//                                 as="textarea"
//                                 placeholder="Hier können Sie Ihren beruflichen Werdegang darstellen."
//                                 rows={3}
//                                 value={werdegang}
//                                 onChange={e => setWerdegang(e.target.value)}
//                             />
//                         </Card.Body>
//                     </Card>

//                   <Row>
//                     <Col md={12}>
//                       <Card className="profil-card">
//                         <Card.Body>
//                           <Card.Title>Verfügbarkeit</Card.Title>
//                           <Table responsive>
//                         <thead>
//                           <tr>
//                             <th>Wochentag</th>
//                             <th>Verfügbar</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {Object.keys(verfuegbarkeit).map(tag => (
//                             <tr key={tag}>
//                               <td>{tag.charAt(0).toUpperCase() + tag.slice(1)}</td>
//                               <td>
//                                 <Form.Check
//                                   type="checkbox"
//                                   checked={verfuegbarkeit[tag]}
//                                   onChange={() => toggleVerfuegbarkeit(tag)}
//                                 />
//                               </td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </Table>
//                       <div className="d-flex justify-content-end">
//                             <Button variant="primary" onClick={saveProfile}>Speichern</Button>
//                       </div>
//                         </Card.Body>
//                       </Card>
//                     </Col>
//                   </Row>
//                 </Col>
//             </Row>
//         </Container>
//     );
// }

// export default Profilansicht;

import React, { useState } from 'react';
import { Container, Row, Col, Image, Card, Form, Button, Table } from 'react-bootstrap';
import './ProfileView.css';

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

    // Funktion zum Umschalten der Verfügbarkeit
    const toggleVerfuegbarkeit = (tag) => {
      setVerfuegbarkeit(prevState => ({
          ...prevState,
          [tag]: !prevState[tag]
      }));
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



