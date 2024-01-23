import React from 'react';
import { Container, Card, Row, Col, Carousel } from 'react-bootstrap';
import './Articles.css'

const Articles = () => {
  return (
    <div className="articles-container">
      <Container >
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.mercedes-benz.com/content/dam/brandhub/assets/art-and-culture/zeitgeist/collaboration-moncler/02-2023/teaser/mercedes-benz-x-moncler-teaser-2560x1440-02-2023.cbv20230517110952.jpg/_jcr_content/renditions/mq7-original-aspect.jpeg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Erkunde neue Horizonte.</h3>
              <p>Begib dich auf eine Reise der Entdeckung mit unseren innovativen Lösungen und modernsten Technologien.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://group.mercedes-benz.com/bilder/karriere/studenten/situative-bildwelt/werkstudierende-w1680xh945-cutout.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Schließe dich unserer lebendigen Gemeinschaft an.</h3>
              <p>Vernetze dich mit Gleichgesinnten und werde Teil einer dynamischen Gemeinschaft, die Wachstum und Zusammenarbeit schätzt.</p>
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
