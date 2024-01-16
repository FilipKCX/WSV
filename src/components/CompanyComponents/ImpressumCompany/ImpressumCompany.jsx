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
          <p>WorkingStudent<br/>Große Bleichen 12<br/>20354 Hamburg</p>
        </Col>
        <Col md={6}>
          <h2>Kontakt:</h2>
          <p>contact.workingstudent@gmail.com<br/>Telefon: (+49) 15751631922</p>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <h2>Vertretungsberechtigt:</h2>
          <p><strong>Filip Krajinović</strong> - Project Manager, Developer, Business Analyst<br/><strong>Muhammed Akkoyun</strong> - Developer, Visual Designer<br/><strong>Wladislaw Tarassov</strong> - Project Manager, Developer<br/><strong>Mohammad Sameer Raha</strong> - Developer, Quality-Assurance-Engineer</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Impressum;
