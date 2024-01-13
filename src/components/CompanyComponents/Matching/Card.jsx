import React from 'react';
import { Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './Card.css';
impo
const ThreeCards = () => {
  async function makeCards() {
    
  
  try {
    const apiResponse = await getHTTPRequest("getLoginUser", paramArray);
    if(apiResponse == 'a')
    {
      alert('Die Email oder das Passwort ist falsch!');
      return;
    }    
    sessionStorage.setItem('userID', apiResponse);
  
    if ( sessionStorage.getItem('isUser') == "1") {
      navigate("/HomeUser");
    }
    else
    {
      navigate("/HomeCompany");
    } 
    } 
    catch (error)
    {
      console.error("Error:", error);
      throw error; 
    }
  }

  return (
    <Container className="container-full-height">
      <Row className="justify-content-md-center row-full-height">
        <Col md="auto">
          <Card className="custom-card">
            <Card.Img variant="top" src="https://via.placeholder.com/50x30" />
            <Card.Body>
              <Card.Title>Name: Student A</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Studium:</ListGroup.Item>
              <ListGroup.Item>Abschluss: </ListGroup.Item>
              <ListGroup.Item>Arbeitszeit:</ListGroup.Item>
              <ListGroup.Item>Berufserfahrung:</ListGroup.Item>
              <ListGroup.Item><Card.Link href="#">Zum Profil</Card.Link></ListGroup.Item>
            </ListGroup>
            <Card.Body className="card-buttons">
              <button className="round-button check-button">✓</button>
              <button className="round-button x-button">×</button>
            </Card.Body>
          </Card>
        </Col>
        <Col md="auto">
          <Card className="custom-card">
            <Card.Img variant="top" src="https://via.placeholder.com/50x30" />
            <Card.Body>
              <Card.Title>Name: Student B</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Studium:</ListGroup.Item>
              <ListGroup.Item>Abschluss: </ListGroup.Item>
              <ListGroup.Item>Arbeitszeit:</ListGroup.Item>
              <ListGroup.Item>Berufserfahrung:</ListGroup.Item>
              <ListGroup.Item><Card.Link href="#">Zum Profil</Card.Link></ListGroup.Item>
            </ListGroup>
            <Card.Body className="card-buttons">
              <button className="round-button check-button">✓</button>
              <button className="round-button x-button">×</button>
            </Card.Body>
          </Card>
        </Col>
        <Col md="auto">
          <Card className="custom-card">
            <Card.Img variant="top" src="https://via.placeholder.com/50x30" />
            <Card.Body>
              <Card.Title>Name: Student C</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Studium:</ListGroup.Item>
              <ListGroup.Item>Abschluss: </ListGroup.Item>
              <ListGroup.Item>Arbeitszeit:</ListGroup.Item>
              <ListGroup.Item>Berufserfahrung:</ListGroup.Item>
              <ListGroup.Item><Card.Link href="#">Zum Profil</Card.Link></ListGroup.Item>
            </ListGroup>
            <Card.Body className="card-buttons">
              <button className="round-button check-button">✓</button>
              <button className="round-button x-button">×</button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ThreeCards;