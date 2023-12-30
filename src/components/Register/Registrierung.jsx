import React from 'react';
import './Registrierung.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const Registrierung = () => {
  return (
    <div className="registration-container">
      <h1>Registrieren</h1>

      <p className='erober'>Erobere die Arbeitswelt mit nur wenigen klicks!</p>

      <div className="input-container">
        <input type="email" placeholder="E-Mail" />
      </div>

      <div className="input-container">
        <input type="password" placeholder="Passwort" />
      </div>

      <div className="input-container">
        <input type="password" placeholder="Passwort bestätigen" />
      </div>

      <Button className='register-button' variant="outline-primary">Registrieren</Button>{' '}

      <p className="registration-text">
        Durch Klicken auf "Registrieren" stimmen Sie der Nutzervereinbarung, der Datenschutzrichtlinie
        <br />und der Cookie-Richtlinie von WorkingStudent zu.
      </p>
      <Link to= '/anmeldung'>
      <p className="login-link">Bereits ein Mitglied? Jetzt anmelden!</p>
      </Link>
      
    </div>
  );
};

export default Registrierung;