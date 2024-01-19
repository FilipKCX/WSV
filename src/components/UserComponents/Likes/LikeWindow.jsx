
import './LikeWindow.css';
// import ProfilePageCompanyStatic from '../../CompanyComponents/ProfilAnsichtCompany/ProfileViewStatic';
import { Container, Row, Col, Image, Card, Form, Button } from 'react-bootstrap';
// import './ProfileViewStatic.css';
import { Formik, Field, ErrorMessage } from 'formik';

import React, { useState } from 'react';
// import { getHTTPRequest } from '../../serverPackage';
import { Link } from 'react-router-dom';


function LikeWindow ({ selectedLike }) {

  const likedContent = [
    { id: 'like1', content: 'ProfilePageCompanyStatic' },
    { id: 'like2', content: 'Liked Content 2' },
  ];

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
  
    const saveCompanyProfile = (values) => {
        console.log('Speichern der Unternehmensdaten...');
        console.log('Profilbild:', profilbild);
        console.log('Unternehmensname:', values.unternehmensName);
        console.log('E-Mail:', values.email);
        console.log('Standort:', values.standort);
        console.log('Beschreibung:', values.beschreibung);
        console.log('Was wir bieten:', values.angebote);
        console.log('Unsere Geschichte:', values.geschichte);
        console.log('Karrierechancen:', values.karriere);
        alert('Unternehmensprofil gespeichert!');
    };

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
        setLogo(fileName)
      };

      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
      document.getElementById('profilbild-input').click();
  };
  let usID = sessionStorage.getItem('userID')
  let paramArray = [usID, name, email, standort, wersw, waswb, karriere, geschichte , logo];
  console.log(paramArray)

  async function handleProfileCreation() {
    const apiResponse = await getHTTPRequest("createCompanyProfile", paramArray);
    return;
  }
  
  const selectedContent = likedContent.find((item) => item.id === selectedLike);

  return (
    
    <div className='profil-containerl'>
    <Container className="profil-containerl">
      <Row className="justify-content-md-center profil-row">
        <Col md={6} className="profil-col">
          <div className="profil-bild-container">
            <Image src={selectedImagePath || "platzhalter-bild-url.jpg"} roundedCircle className="profil-bild" />
          </div>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Unternehmensname"
              name="unternehmensName"
              className="profil-input"
              onChange={e => setName(e.target.value)}
              readOnly
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="E-Mail"
              name="email"
              className="profil-input"
              onChange={e => setEmail(e.target.value)}
              readOnly
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Standort"
              name="standort"
              className="profil-input"
              onChange={e => setStandort(e.target.value)}
              readOnly
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
                className="profil-input"
                onChange={e => setWersw(e.target.value)}
                readOnly
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
                className="profil-input"
                onChange={e => setWaswb(e.target.value)}
                readOnly
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
                className="profil-input"
                onChange={e => setKarriere(e.target.value)}
                readOnly
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
                className="profil-input"
                onChange={e => setGeschichte(e.target.value)}
                readOnly
              />
            </Card.Body>
          </Card>
         
    
        </Col>
        <div style={{ backgroundColor: 'lightgray', height: '100px', width: '100%'}}>
       <div className='d-flex justify-content-center align-items-center'>
          <Button variant="primary" className="round-btn">
            <span role="img" aria-label="heart">&#10084;</span>
             </Button>
            <Button variant="danger" className="round-btn">
            <span role="img" aria-label="x">&#10060;</span>
            </Button>
            </div>
      </div>
        
      </Row>
      
    </Container>
    
    </div>
  );
};

export default LikeWindow;
