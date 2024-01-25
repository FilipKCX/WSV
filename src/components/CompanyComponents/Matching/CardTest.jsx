import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import './Card.css';
import logo from '../../../imagess/LL.jpg'
import { Link } from 'react-router-dom';

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
            <ListGroup.Item className='text-center'>
              <Link to='/MatchingProfile'>
        <Button variant="outline-secondary" className="card-link-button">
          Zum Profil
        </Button>
        </Link>
      </ListGroup.Item>
          </ListGroup>
          <Card.Body className="card-buttons">
            <Button variant="primary" className="likebuttonc">
          Like
        </Button>
        <Button variant="danger" className="dislikebuttonc">
          Dislike
        </Button>
          </Card.Body>
        </Card>
      );
      
  return card;

};

export default DynamicCards;