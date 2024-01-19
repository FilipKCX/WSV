import React from 'react';
import { Container, Card, Row, Col, Carousel, Button } from 'react-bootstrap';
import './TutorialCompany.css'
import { Link } from 'react-router-dom';
import HomePic from '../../../assets/Bildschirmfoto 2024-01-17 um 16.44.31.png'
import ChatPic from '../../../assets/Bildschirmfoto 2024-01-17 um 16.49.26.png'
import ProfilePic from '../../../assets/Bildschirmfoto 2024-01-17 um 16.49.57.png'


const Tutorial = () => {
  return (
    <div className="tutorial-container">
      <Container >
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src=""
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Willkommen bei WorkingStudent!</h3>
              <p>Klicken Sie sich durch das Tutorial, um die Seite besser kennenzulernen und optimal zu nutzen!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={HomePic}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Home</h3>
              <p>Entdecken Sie wöchentlich neue spannende Artikel und über die Navigationsbar kommen Sie zu den wichtigsten Funktionalitäten bei WorkingStudent!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ChatPic}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Chat</h3>
              <p>Kommunizieren Sie mit potentiellen Werkstudenten über den Chat, um Sie näher kennenzulernen!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src=""
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Matching</h3>
              <p>Stöbern Sie durch interessante Studentenprofile, um genau die richtigen Werkstudenten für Ihr Unternehmen zu finden!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ProfilePic}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Profil</h3>
              <p>Gestalten Sie ihr Profil nach Ihrem Ermessen, um Ihr Unternehmen so attraktiv wie möglich für Werkstudenten zu machen!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
      <Link to= '/HomeCompany'>
      <Button variant="primary" className="tutorial-end-button">
        Tutorial beenden
      </Button>
      </Link>
    </div>
  );
};

export default Tutorial;
