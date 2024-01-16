import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './Card.css';

const DynamicCards = ({ userId }) => {


    

      
      const card = (
        <Card className="custom-card">
          <Card.Img variant="top" src={logo} />
          <Card.Body>
            <Card.Title>Name: </Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Studium: </ListGroup.Item>
            <ListGroup.Item>Abschluss: </ListGroup.Item>
            <ListGroup.Item>Arbeitszeit: </ListGroup.Item>
            <ListGroup.Item>Berufserfahrung: </ListGroup.Item>
            <ListGroup.Item><Card.Link>Zum Profil</Card.Link></ListGroup.Item>
          </ListGroup>
          <Card.Body className="card-buttons">
            <button className="round-button check-button">✓</button>
            <button className="round-button x-button">×</button>
          </Card.Body>
        </Card>
      );
      
  return card;

};

export default DynamicCards;