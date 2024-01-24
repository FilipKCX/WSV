import React from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';
import './ImageWithText.css'; 

const HomePage = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={6} style={{ marginTop: '150px', marginLeft: '50px', maxWidth: '600px' }} className="homepage-left-section">
          <h1 className="homepage-title">WorkingStudent: die Revolution des Bewerbungprozesses!</h1>
          <p className="homepage-long-subtext">
Willkommen auf WorkingStudent – der Plattform, die die Art und Weise, wie du dich als Student bewirbst, revolutioniert!

Bist du ein engagierter Student auf der Suche nach flexiblen Beschäftigungsmöglichkeiten, die zu deinem Studium passen? Dann bist du hier genau richtig! WorkingStudent hat sich zum Ziel gesetzt, die Job-Suche und Bewerbung für Studierende so einfach und effizient wie möglich zu gestalten.
          </p>
          <Card style={{ backgroundColor: '#0074cc', color: 'white' }}>
            <Card.Body>
              <Card.Title>Our Mission</Card.Title>
              <Card.Text>
              Bei WorkingStudent verstehen wir die einzigartigen Herausforderungen, denen sich arbeitende Studierende gegenübersehen. Wir sind der Überzeugung, dass jeder Studierende Zugang zu sinnvollen Beschäftigungsmöglichkeiten haben sollte, die ihr Studium ergänzen. Unsere Mission besteht darin, ein benutzerfreundliches Jobportal bereitzustellen, auf dem arbeitende Studierende nahtlos mit Arbeitgebern in Kontakt treten können, die Werkstudentenstellen anbieten.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className="homepage-right-section" style={{ marginTop: '175px' , marginLeft: '50px', marginBottom: '80px' }}>
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/5deaab2125ab5d00070081cd/Male-employee-shares-good-news-with-excited-diverse-colleagues/0x0.jpg?format=jpg&crop=5472,3647,x0,y0,safe&width=960"  // Replace with your image URL
            alt="Background Image"
            style={{ width: '700px', height: 'auto', borderRadius: '10px' }} 
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
