import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../UserComponents/ImpressumUser/ImpressumComp.css'; 

const Impressum = () => {
  return (
    <Container className="impressum-container">
      <Row>
        <Col>
          <h1>Impressum</h1>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <h2>Adresse:</h2>
          <p>Lorem Ipsum<br/>Musterstraße 123<br/>12345 Hamburg</p>
        </Col>
        <Col md={6}>
          <h2>Kontakt:</h2>
          <p>contact.workingstudent@gmail.com<br/>Musterstraße 123<br/>12345 Hamburg</p>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <h2>Vertretungsberechtigt:</h2>
          <p>Lorem Ipsum<br/>Lorem Ipsum<br/>Lorem Ipsum</p>
        </Col>
        <Col md={6}>
          <h2>Handelsregister:</h2>
          <p>Amtsgericht Hamburg HRB 1234<br/>USt-IdNr. DE 12345678</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Impressum;
