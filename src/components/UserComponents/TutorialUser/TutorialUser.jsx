import React from 'react';
import { Container, Card, Row, Col, Carousel, Button } from 'react-bootstrap';
import './TutorialUser.css'
import { Link } from 'react-router-dom';

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
              src=""
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Home</h3>
              <p>Entdecken Sie wöchentlich neue spannende Artikel! Über die Navigationsbar kommen Sie zu den wichtigsten Funktionalitäten bei WorkingStudent!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src=""
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Chat</h3>
              <p>Kommunizieren Sie mit interessanten Unternehmen über den Chat, um herauszufinden, welches zu Ihnen am besten passt!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src=""
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Profil</h3>
              <p>Gestalten Sie ihr Profil nach Ihrem Ermessen, um Unternehmen auf Sie aufmerksam zu machen!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src=""
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Likes</h3>
              <p>Finden Sie heraus, welche Unternehmen an Ihnen interessiert sind und entscheiden Sie selbst, ob Sie einen Chat mit Ihnen starten wollen!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
      <Link to= '/HomeUser'>
      <Button variant="primary" className="tutorial-end-button">
        Tutorial beenden
      </Button>
      </Link>
    </div>
  );
};

export default Tutorial;
