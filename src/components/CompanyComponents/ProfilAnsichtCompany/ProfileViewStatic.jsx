import { Container, Row, Col, Image, Card, Form, Button } from 'react-bootstrap';
import './ProfileViewStatic.css';
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import React, { useState, useEffect } from 'react';
import { getHTTPRequest } from '../../serverPackage';
import { Link } from 'react-router-dom';

const Unternehmensprofil = () => {
  const [CmProfile, setCmProfile] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const userId = sessionStorage.getItem('userID')
      console.log(userId);
      const param = [userId];
      const apiResponse = await getHTTPRequest("getCompanyInfos", param);
      const sortArray = JSON.parse(apiResponse);
      const selectedArray = sortArray[0];

      // Extract student data into a single object
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
  const logo = "./src/imagess/" + studentData.logo
  const cprofile = (
    <Container className="profil-container">
      <Row className="justify-content-md-center profil-row">
        <Col md={6} className="profil-col">
          <div className="profil-bild-container">
            <Image src={logo || "platzhalter-bild-url.jpg"} roundedCircle className="profil-bild" />
          </div>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder={studentData.name}
              name="unternehmensName"
              className="profil-input"
              readOnly
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder={studentData.email}
              name="email"
              className="profil-input"
              readOnly
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder={studentData.standort}
              name="standort"
              className="profil-input"
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
                placeholder={studentData.wws}
                rows={3}
                name="beschreibung"
                className="profil-input"
                readOnly
              />
            </Card.Body>
          </Card>
          <Card className="profil-card">
            <Card.Body>
              <Card.Title>Was wir bieten</Card.Title>
              <Form.Control
                as="textarea"
                placeholder={studentData.wwb}
                rows={3}
                name="angebote"
                className="profil-input"

                readOnly
              />
            </Card.Body>
          </Card>
          <Card className="profil-card">
            <Card.Body>
              <Card.Title>Karrierechancen</Card.Title>
              <Form.Control
                as="textarea"
                placeholder={studentData.karriere}
                rows={3}
                name="karriere"
                className="profil-input"
                readOnly
              />
            </Card.Body>
          </Card>
          <Card className="profil-card">
            <Card.Body>
              <Card.Title>Unsere Geschichte</Card.Title>
              <Form.Control
                as="textarea"
                placeholder={studentData.geschihte}
                rows={3}
                name="geschichte"
                className="profil-input"
                readOnly
              />
            </Card.Body>
          </Card>
          <div className="d-flex justify-content-end mb-3">
            <Link to='/ProfilePageCompany'>
            <Button type="submit" variant="primary" className="speichern-button" >
              Zurück
            </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
  setCmProfile(cprofile);
};

    fetchData();
  }, []);
  return CmProfile
};

export default Unternehmensprofil;
