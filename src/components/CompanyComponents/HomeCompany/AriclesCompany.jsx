import React from 'react';
import { Container, Card, Row, Col, Carousel } from 'react-bootstrap';
import '../../UserComponents/Homeuser/Articles.css'

const Articles = () => {
  return (
    <div className="articles-container">
      <Container >
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.tagesschau.de/image/bdd1fbde-da78-488e-b71e-1e2008dd14d4/AAABiFOfCYw/AAABibBxrfI/16x9-1920/suedkorea-rakete-nuri-100.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Steigern Sie Ihre Unternehmensdynamik.</h3>
              <p>Investieren Sie in die Zukunft Ihres Unternehmens und profitieren Sie von frischem, dynamischem Talent!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.hamburg.de/image/2839300/16x9/990/557/3df0b477a014d0950501884cc85e1685/FS/mitarbeiter--ausbildungsberatung.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Werkstudenten willkommen: Gemeinsam auf Erfolgskurs in die Zukunft.</h3>
              <p>Mit der Einstellung von Werkstudenten legen Sie den Grundstein für eine erfolgsversprechende Zukunft Ihres Unternehmens</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

      <Container>
        <Row>
          <Col>
            <Card bg="primary" text="white" className="my-5">
              <Card.Body>
                <Card.Title>About Us</Card.Title>
                <Card.Text>
                Willkommen bei WorkingStudent, deinem Wegweiser für die perfekte Verbindung von Studium und beruflicher Praxis! 
                Als erfahrene Vermittler unterstützen wir Studierende dabei, die idealen Möglichkeiten als Werkstudenten zu finden. 
                Unsere Mission ist es, die Brücke zwischen Bildung und Praxis zu schlagen, damit du nicht nur studierst, 
                sondern auch wertvolle Erfahrungen in deinem Traumfeld sammelst. Entdecke mit uns die vielfältigen Chancen, 
                die deine Studienzeit bereichern und deine beruflichen Perspektiven erweitern werden.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg="primary" text="white" className="my-5">
              <Card.Body>
                <Card.Title>Our Services</Card.Title>
                <Card.Text>
                Unsere Dienstleistungen richten sich darauf aus, angehende Fachkräfte mit passenden Unternehmen zu verbinden. 
                Wir bieten umfassende Vermittlungsdienste für Werkstudenten an, um individuelle Fähigkeiten und 
                Talente mit den Bedürfnissen unserer Partnerunternehmen in Einklang zu bringen. 
                Von maßgeschneiderten Praktika bis hin zu gezielten Karriereberatungen – wir begleiten dich auf dem Weg 
                zu erfolgreichen beruflichen Erfahrungen während deines Studiums.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <footer className="bg-light-text-center-py-3">
        <p>&copy; 2024 WorkingStudent. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Articles;
