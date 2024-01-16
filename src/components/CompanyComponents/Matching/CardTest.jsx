import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './Card.css';
import logo from '../../../images/LL.jpg'

const DynamicCards = ({ userId }) => {
 
      const card = (
        <Card className="custom-card">
          <Card.Img variant="top" src={logo} className="rounded-image"/>
          <Card.Body>
            <Card.Title>Name: Connor McGregor </Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item className='fixed-height'>Studium: Psychologie</ListGroup.Item>
            <ListGroup.Item className='fixed-height'>Abschluss: Bachelor of Science </ListGroup.Item>
            <ListGroup.Item className='fixed-height'>Arbeitszeit: 20h </ListGroup.Item>
            <ListGroup.Item className='fixed-height'>Berufserfahrung: keine</ListGroup.Item>
            <ListGroup.Item><Card.Link>Zum Profil</Card.Link></ListGroup.Item>
          </ListGroup>
          <Card.Body className="card-buttons">
            <button className="roundmatch-button x-button">×</button>
            <button className="roundmatch-button check-button">✓</button>
          </Card.Body>
        </Card>
      );
      
  return card;

};

export default DynamicCards;