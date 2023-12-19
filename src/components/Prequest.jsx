import React from 'react';
import './Anmeldung.css';
import { Link } from 'react-router-dom';

const Prequest = () => {
  return (
    <div className="request-container">

      <p>Sie haben Ihr Passwort vergessen? Geben Sie Hier ihre E-Mail Adresse ein und Sie erhalten ein automatisch generiertes Passwort an die angegebene E-Mail</p>

      <div className="input-container">
        <input type="email" placeholder="E-Mail" />
      </div>
      <Link to= '/'>
      <button className="request-button">Passwort anfordern</button>
      </Link>

      <Link to= '/anmeldung'>
      <button className="back-button">Zurück zum Log In</button>
      </Link>

    </div>
  );
};

export default Prequest;