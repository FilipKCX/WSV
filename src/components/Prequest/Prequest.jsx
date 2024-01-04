import React from 'react';
import './Prequest.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Prequest = () => {
  return (
    <div className="request-container">
      <h1>Passwort anfordern</h1>
      <p>Sie haben Ihr Passwort vergessen? Geben Sie Hier ihre E-Mail Adresse ein und Sie erhalten ein automatisch generiertes Passwort an die angegebene E-Mail</p>

      <div className="input-container">
        <input type="email" placeholder="E-Mail" />
      </div>
      <Link to= ''>
      <Button className='requester-button' variant="outline-primary">Passwort anfordern</Button>{' '}
      </Link>

      <Link to= '/anmeldung'>
      <Button className='backer-button' variant="outline-primary">Zurück zum Log In</Button>{' '}
      </Link>

    </div>
  );
};

export default Prequest;