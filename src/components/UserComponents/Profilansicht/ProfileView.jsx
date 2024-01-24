import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image, Card, Form, Button, Table, Toast } from 'react-bootstrap';
import './ProfileView.css';
import { getHTTPRequest } from '../../serverPackage';
import { Link } from 'react-router-dom';


const Profilansicht = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telefon, setTelefon] = useState('');
  const [studiengang, setStudiengang] = useState('');
  const [semester, setSemester] = useState('');
  const [profilbeschreibung, setProfilbeschreibung] = useState('');
  const [werdegang, setWerdegang] = useState('');
  const [faehigkeiten, setFaehigkeiten] = useState('');
  const [abschluss, setAbschluss] = useState('');
  const [berufserfahrung, setBerufserfahrung] = useState('');
  const [logo, setLogo] = useState('none.jpg')
  const [verfuegbarkeit, setVerfuegbarkeit] = useState({
    montag: { available: false, hours: 0 },
    dienstag: { available: false, hours: 0 },
    mittwoch: { available: false, hours: 0 },
    donnerstag: { available: false, hours: 0 },
    freitag: { available: false, hours: 0 },
  });

  
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [telefonError, setTelefonError] = useState('');
  const [semesterError, setSemesterError] = useState('');
  const [berufserfahrungError, setBerufserfahrungError] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const validateInputs = () => {
    let isValid = true;

    if (!validateName()) {
      setNameError('Bitte geben Sie nur Buchstaben für den Namen ein.');
      isValid = false;
    }

    if (!validateEmail()) {
      setEmailError('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
      isValid = false;
    }

    if (!validateTelefon()) {
      setTelefonError('Bitte geben Sie eine gültige Telefonnummer ein.');
      isValid = false;
    }

    if (!validateSemester()) {
      setSemesterError('Bitte geben Sie nur Zahlen für das Semester ein.');
      isValid = false;
    }

    if (!validateBerufserfahrung()) {
      setBerufserfahrungError('Bitte geben Sie nur Zahlen und Punkte für die Berufserfahrung ein.');
      isValid = false;
    }

    return isValid;
  };

  const validateName = () => /^[a-z A-Z]+$/.test(name);
  const validateEmail = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateTelefon = () => /^[ 0-9+]+$/.test(telefon);
  const validateSemester = () => /^[0-9]+$/.test(semester);
  const validateBerufserfahrung = () => /^[0-9.]+$/.test(berufserfahrung);


  
  const toggleVerfuegbarkeit = (tag) => {
    setVerfuegbarkeit(prevState => {
      const isAvailable = !prevState[tag].available;
      const updatedHours = isAvailable ? prevState[tag].hours : 0;
      return {
        ...prevState,
        [tag]: {
          available: isAvailable,
          hours: updatedHours
        }
      };
    });
  };

  const extractHoursAsArray = () => {
    const hoursArray = Object.keys(verfuegbarkeit).map(tag => verfuegbarkeit[tag].hours);

    console.log('Verfügbare Stunden:', hoursArray);

    return hoursArray;
  };
  useEffect(() => {
    extractHoursAsArray();
  }, [verfuegbarkeit]);
  console.log(extractHoursAsArray)
  
  const handleChangeHours = (tag, value) => {
    let hours = Number(value); 
    hours = Math.max(0, Math.min(hours, 9));
    setVerfuegbarkeit(prevState => ({
      ...prevState,
      [tag]: {
        ...prevState[tag],
        hours: hours 
      }
    }));
  };


  
  const handleKeyDown = (e) => {
    
    if (e.key !== "ArrowUp" && e.key !== "ArrowDown") {
      e.preventDefault();
    }
  };

  const saveProfile = () => {
    if (!validateInputs()) {
      return;
    }
    console.log('Speichern der Profildaten...');
    console.log('Name:', name);
    console.log('E-Mail:', email);
    console.log('Telefonnummer:', telefon);
    console.log('Abschluss:', abschluss);
    console.log('Studiengang:', studiengang);
    console.log('Aktuelles Semester:', semester);
    console.log('Berufserfahrung:', berufserfahrung);
    console.log('Fähigkeiten:', faehigkeiten);
    console.log('Profilbeschreibung:', profilbeschreibung);
    console.log('Werdegang:', werdegang);
    console.log('Verfügbarkeit:', verfuegbarkeit);
    console.log(extractHoursAsArray())
    handleProfileCreation();
    setToastVisible(true);

    setTimeout(() => {
      setToastVisible(false);
    }, 3000); 
  };

  const calculateTotalWorkHours = () => {
    const weekdays = Object.keys(verfuegbarkeit);
    let totalHours = 0;
  
    for (const weekday of weekdays) {
      const hoursToAdd = verfuegbarkeit[weekday].available ? verfuegbarkeit[weekday].hours : 0;
      totalHours += hoursToAdd;
    }
  
    totalHours = Math.min(totalHours, 20); 
  
    return totalHours;
  };
  

  const totalWorkHours = calculateTotalWorkHours();
  console.log('Total Work Hours:', totalWorkHours);

  const [profilBild, setProfilBild] = useState(null);
  const [selectedImagePath, setSelectedImagePath] = useState('');

  const handleImageSelection = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      const fileName = file.name;
      reader.onload = () => {
        setSelectedImagePath(reader.result);
        const imageData = reader.result;
        const base64Image = `data:image/jpeg;base64,${imageData}`;
        setProfilBild(base64Image);
        setLogo(fileName)
      };

      reader.readAsDataURL(file);
    }
  };
  console.log(logo)
  const triggerFileInput = () => {
    document.getElementById('profilbild-input').click();
  };
  const usID = sessionStorage.getItem('userID')
  const Tage = extractHoursAsArray()
  let paramArray = [usID, name, email, telefon, abschluss, studiengang, semester, berufserfahrung, faehigkeiten, profilbeschreibung, werdegang, totalWorkHours, logo];
  console.log(paramArray)
  async function handleProfileCreation() {
    const apiResponse = await getHTTPRequest("createProfile", paramArray);
    const apiResponse2 = await getHTTPRequest("setTage", [usID,...Tage])
    return;
  }

 return (
        <Container className="profil-container">
            <Row className="justify-content-md-center profil-row">
                <Col md={6} className="profil-col">
          <div className="profil-bild-container" onClick={triggerFileInput}>
            <Image
              src={selectedImagePath || "platzhalter-bild-url.jpg"}
              roundedCircle
              className="profil-bild"
            />

            <div>Klicken, um Foto hinzuzufügen</div>
            <input type="file" id="profilbild-input" hidden onChange={handleImageSelection} />
          </div>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Name"
                            value={name} 
                            onChange={(e) => {
              setName(e.target.value);
              setNameError('');
            }}
                            className="profil-input"
                        />
                        {nameError && <span className="error-message">{nameError}</span>}
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="E-Mail"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                              setEmailError('');
                            }}
                            className="profil-input"
                        />
                          {emailError && <span className="error-message">{emailError}</span>}
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Telefonnummer"
                            value={telefon}
                            onChange={(e) => {
                              setTelefon(e.target.value);
                              setTelefonError('');
                            }}
                            className="profil-input"
                        />
                       {telefonError && <span className="error-message">{telefonError}</span>}
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Abschluss"
                            value={abschluss}
                            onChange={e => setAbschluss(e.target.value)}
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
                            onChange={(e) => {
                              setSemester(e.target.value);
                              setSemesterError('');
                            }}
                            className="profil-input"
                        />
                        {semesterError && <span className="error-message">{semesterError}</span>}
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Berufserfahrung (in Jahren)"
                            value={berufserfahrung}
                            onChange={(e) => {
                              setBerufserfahrung(e.target.value);
                              setBerufserfahrungError('');
                            }}
                            className="profil-input"
                        />
                        {berufserfahrungError && <span className="error-message">{berufserfahrungError}</span>}
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
                    <div className="pvbutt mb-3">
                         <Button variant="primary" onClick={saveProfile}>Speichern</Button>
                    </div>
                    <div className="pvbutt mb-3">
                      <Link to='/ProfilePageStatic'>
                         <Button variant="outline-primary" >Profil Vorschau</Button>
                         </Link>
                    </div>
                </Col>
            </Row>
            <Toast show={toastVisible} onClose={() => setToastVisible(false)} delay={3000} autohide className="toast-rightpv">
        <Toast.Header>
          <strong className="mr-auto">Erfolgreich gespeichert!</strong>
        </Toast.Header>
        <Toast.Body>Ihre Profiländerungen wurden gespeichert.</Toast.Body>
      </Toast>

        </Container>
    );

};
export default Profilansicht;