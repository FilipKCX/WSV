import React, { useRef } from 'react';
import { Container, Carousel, Button, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './TutorialUser.css';

const Tutorial = () => {
  const carouselRef = useRef(null);

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  return (
    <div className="tutorial-container">
      <div className="tutorial-centered-container">
        <Carousel ref={carouselRef} controls={false} interval={null}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="src/assets/welcomeuser.jpg"
              alt="First Slide"
            />
            <Carousel.Caption>
              <h3>Willkommen bei WorkingStudent!</h3>
              <p>Klicken Sie sich durch das Tutorial, um die Seite besser kennenzulernen und optimal zu nutzen!</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/1200x600"
              alt="Second Slide"
            />
            <Carousel.Caption>
              <h3>Home</h3>
              <p>Entdecken Sie wöchentlich neue spannende Artikel auf der Homepage. Über die Navigationsbar kommen Sie zu den wichtigsten Funktionalitäten!</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="src/assets/chat.png"
              alt="Third Slide"
            />
            <Carousel.Caption>
              <h3>Chat</h3>
              <p>Kommunizieren Sie mit Unternehmen über den Chat, um Sie näher kennenzulernen!</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="src/assets/userlikes.png"
              alt="Fourth Slide"
            />
            <Carousel.Caption>
              <h3>Likes</h3>
              <p>Sehen Sie sich unter Likes Unternehmen an, die Sie geliked haben und mit Ihnen in Kontakt treten wollen!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="src/assets/userprofile.png"
              alt="Fifth Slide"
            />
            <Carousel.Caption>
              <h3>Profil</h3>
              <p>Beschreiben Sie sich selbst über die Profilfunktion!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="src/assets/kontakt.png"
              alt="Sixth Slide"
            />
            <Carousel.Caption>
              <h3>Kontakt</h3>
              <p>Gerne nehmen wir Ihre Fragen, Anregungen oder Anfragen entgegen und stehen zur Verfügung!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="tutorial-buttons-container">
        <Button className='tutorial-buttons' id="tutorial-back-button" variant="primary" onClick={handlePrev}>Zurück</Button>{' '}
        <Button className='tutorial-buttons' id="tutorial-next-button" variant="primary" onClick={handleNext}>Weiter</Button>{' '}
      </div>
      <Link to="/HomeUser">
        <Button className="tutorial-buttons" id="tutorial-end-button" variant="primary">Tutorial beenden</Button>
      </Link>
    </div>
  );
};

export default Tutorial;
