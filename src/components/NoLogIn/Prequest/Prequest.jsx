import React from 'react';
import './Prequest.css';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const Prequest = () => {
  const handlePasswordRequest = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
  };

  return (
    <div className="request-container">
      <h1>Passwort anfordern</h1>
      <p>Sie haben Ihr Passwort vergessen? Geben Sie hier Ihre E-Mail Adresse ein und Sie erhalten ein automatisch generiertes Passwort an die angegebene E-Mail</p>

      <Form onSubmit={handlePasswordRequest}>
        <Form.Group controlId="formEmail">
          <Form.Control type="email" name="email" placeholder="E-Mail" />
        </Form.Group>
        
        <Button className='requester-button' type="submit" variant="outline-primary">Passwort anfordern</Button>{' '}
      </Form>

      <Link to='/anmeldung'>
        <Button className='backer-button' variant="outline-primary">Zurück zum Log In</Button>{' '}
      </Link>
    </div>
  );
};

export default Prequest;
