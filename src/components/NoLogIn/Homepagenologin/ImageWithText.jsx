import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const HomePage = () => {
  const containerStyle = {
    marginTop: '100px', // Adjust this value to your desired top margin
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  };

  const cardStyle = {
    width: '800px',
  };

  return (
    <div>
      <Container style={containerStyle}>
        <Row>
          <Col>
            <h1 >Willkommen bei WorkingStudent</h1>
            <p>Finden Sie den perfekten Job oder Werkstudenten für Sie.</p>
          </Col>
        </Row>
      </Container>

      <Container className="mt-2" style={containerStyle}>
        <Row>
          <Col style={cardStyle}>
            <Card className="mb-3">
              <Card.Img
                variant="top"
                src="https://imageio.forbes.com/specials-images/imageserve/5deaab2125ab5d00070081cd/Male-employee-shares-good-news-with-excited-diverse-colleagues/0x0.jpg?format=jpg&crop=5472,3647,x0,y0,safe&width=960"
                style={{ width: '100%', height: '300px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title className="text-left">Wieso WorkingStudent?</Card.Title>
                <Card.Text className="text-left">
                  WorkingStudent verbindet talentierte Studententen mit den besten Arbeitgebern und das auf eine komplett neue Art!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-3 mb-4">
          <Col>
            <h2 className="text-left">Finde den passenden Job!</h2>
            <p className="text-left">Erstelle dein individuelles Profil und präsentiere deine Fähigkeiten, Interessen und bisherigen Erfahrungen. Je detaillierter dein Profil, desto besser können Unternehmen erkennen, wie gut du zu ihren Anforderungen passt.

            </p>
          </Col>
          <Col>
            <h2 className="text-left">Finden Sie Werkstudenten!</h2>
            <p className="text-left">Durchsuchen Sie Profile von hochqualifizierten Studierenden, die auf der Suche nach Werkstudentenmöglichkeiten sind. Unser Portal ermöglicht es Ihnen, gezielt nach Kandidaten zu suchen, die Ihren Anforderungen entsprechen.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
