
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
  <Container className="profile-containerlike">
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

      <Card className="mt-3" style={{ width: '1000px' }}>
        <Card.Body>
          <Card.Title>Beschreibung</Card.Title>
          <Card.Text>
            Outside of coding, I love exploring new places, trying exotic cuisines, and embarking on exciting adventures.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mt-4" style={{ width: '1000px' }}>
        <Card.Body>
          <Card.Title>Was wir bieten:</Card.Title>
          <Card.Text>
            With a love for coding and problem-solving, I enjoy building innovative solutions that make a difference.
          </Card.Text>
        </Card.Body>
      </Card>

    <Card className="mt-4" style={{ width: '1000px' }}>
        <Card.Body>
          <Card.Title>Unsere Geschichte</Card.Title>
          <Card.Text>
            With a love for coding and problem-solving, I enjoy building innovative solutions that make a difference.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mt-3" style={{ width: '1000px' }}>
        <Card.Body>
          <Card.Title>Karrierechancen</Card.Title>
          <Card.Text>
            Outside of coding, I love exploring new places, trying exotic cuisines, and embarking on exciting adventures.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
   
    <div className="text-left">
    
    </div>
    <div className="text-center mt-4 mb-3">
        <Button variant="success" size="lg" className="mr-5" style={{ backgroundColor: '#39e75f', borderColor: '#39e75f' }}>
          Like
        </Button>
        <Button variant="danger" size="lg">
          Dislike
        </Button>
      </div>
  </Container>
);
};

export default LikeWindow;
