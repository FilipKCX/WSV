import { Container, Row, Col, Image, Card, Form, Button, Toast } from 'react-bootstrap';
import './ProfileViewCompany.css';
import React, { useState, useEffect } from 'react';
import { getHTTPRequest } from '../../serverPackage';
import { Link } from 'react-router-dom';
import { SystemUpdate } from '@mui/icons-material';

const Unternehmensprofil = () => {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [standort, setStandort] = useState('');
  const [wersw, setWersw] = useState('');
  const [waswb, setWaswb] = useState('');
  const [karriere, setKarriere] = useState('');
  const [geschichte, setGeschichte] = useState('');
  const [faehigkeiten, setFaehigkeiten] = useState('');
  const [logo, setLogo] = useState('none.jpg')
  const [selectedImagePath, setSelectedImagePath] = useState('');
  const [validationError, setValidationError] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [logob, setLogob] = useState('none.jpg')
  const isValidEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

    const saveCompanyProfile = () => {
      if (!isValidEmail(email)) {
        setValidationError('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
        return;
      }
      setValidationError('');
        handleProfileCreation()
        setShowToast(true);
    };
    const fetchData = async () => {
      const userId = sessionStorage.getItem('userID')
      console.log(userId);
      const param = [userId];
      const apiResponse = await getHTTPRequest("getCompanyInfos", param);
      const sortArray = JSON.parse(apiResponse);
      const selectedArray = sortArray[0];

     
      const studentData = {
        uID: selectedArray[0],
       name: selectedArray[1],
        email: selectedArray[2],
       standort: selectedArray[3],
        wws: selectedArray[4],
        wwb: selectedArray[5],
       karriere: selectedArray[6],
      geschihte: selectedArray[7],
      logo: selectedArray[8],
      
      
      }; 
      setEmail(studentData.email)
      setName(studentData.name)
      setStandort(studentData.standort)
      setWaswb(studentData.wwb)
      setWersw(studentData.wws)
      setGeschichte(studentData.geschihte)
      setKarriere(studentData.karriere)
      setLogo("./src/imagess/"+studentData.logo)
    }
      useEffect(() => {

        fetchData();
      }, []);
    
  const [profilBild, setProfilBild] = useState(null);

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
        setLogo("./src/imagess/"+fileName)
        setLogob(fileName)
      };

      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
      document.getElementById('profilbild-input').click();
  };
  let usID = sessionStorage.getItem('userID')
  let paramArray = [usID, name, email, standort, wersw, waswb, karriere, geschichte , logob];
  console.log(paramArray)
  console.log(selectedImagePath)
  async function handleProfileCreation() {
    const apiResponse = await getHTTPRequest("createCompanyProfile", paramArray);
    return;
  }
  return (
    <Container className="profil-container">
      <Row className="justify-content-md-center profil-row">
        <Col md={6} className="profil-col">
          <div className="profil-bild-container" onClick={triggerFileInput}>
            <Image src={logo || "platzhalter-bild-url.jpg"} roundedCircle className="profil-bild" />
            <div>Klicken, um Foto hinzuzufügen</div>
            <input type="file" id="profilbild-input" hidden onChange={handleImageSelection} />
          </div>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Unternehmensname"
              name="unternehmensName"
              value= {name}
              className="profil-input"
              onChange={e => setName(e.target.value)}
              maxLength={50}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="E-Mail"
              name="email"
              value= {email}
              className="profil-input"
              onChange={e => setEmail(e.target.value)}
              maxLength={50}
            />
             {validationError && (
          <small className="text-danger">{validationError}</small>
        )}
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Standort"
              name="standort"
              value= {standort}
              className="profil-input"
              onChange={e => setStandort(e.target.value)}
              maxLength={50}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Card className="profil-card">
            <Card.Body>
              <Card.Title>Wer wir sind</Card.Title>
              <Form.Control
                as="textarea"
                placeholder="Kurze Beschreibung Ihres Unternehmens."
                rows={3}
                name="beschreibung"
                value= {wersw}
                className="profil-input"
                onChange={e => setWersw(e.target.value)}
                maxLength={50}
              />
            </Card.Body>
          </Card>
          <Card className="profil-card">
            <Card.Body>
              <Card.Title>Was wir bieten</Card.Title>
              <Form.Control
                as="textarea"
                placeholder="Beschreiben Sie, was Ihr Unternehmen Mitarbeitern bietet."
                rows={3}
                name="angebote"
                value= {waswb}
                className="profil-input"
                onChange={e => setWaswb(e.target.value)}
                maxLength={50}
              />
            </Card.Body>
          </Card>
          <Card className="profil-card">
            <Card.Body>
              <Card.Title>Karrierechancen</Card.Title>
              <Form.Control
                as="textarea"
                placeholder="Beschreiben Sie die Karriereentwicklungsmöglichkeiten in Ihrem Unternehmen."
                rows={3}
                name="karriere"
                value= {karriere}
                className="profil-input"
                onChange={e => setKarriere(e.target.value)}
                maxLength={50}
              />
            </Card.Body>
          </Card>
          <Card className="profil-card">
            <Card.Body>
              <Card.Title>Unsere Geschichte</Card.Title>
              <Form.Control
                as="textarea"
                placeholder="Geben Sie einen kurzen Überblick über die Geschichte Ihres Unternehmens."
                rows={3}
                name="geschichte"
                value= {geschichte}
                className="profil-input"
                onChange={e => setGeschichte(e.target.value)}
                maxLength={50}
              />
            </Card.Body>
          </Card>
          <Toast show={showToast} onClose={() => setShowToast(false)} delay={3000} autohide className="toast-rightpvc">
        <Toast.Header>
          <strong className="mr-auto">Unternehmensprofil gespeichert!</strong>
        </Toast.Header>
        <Toast.Body>Profil wurde erfolgreich gespeichert!</Toast.Body>
      </Toast>
          <div className="d-flex justify-content-end mb-3">
            <Button type="submit" variant="primary" className="speichern-button" onClick={saveCompanyProfile} >
              Speichern
            </Button>
          </div>
          <div className="d-flex justify-content-end mb-3">
            <Link to='/ProfilePageCompanyStatic'>
            <Button type="submit" variant="outline-primary" className="speichern-button"  >
              Profil Vorschau
            </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
  
};

export default Unternehmensprofil;
