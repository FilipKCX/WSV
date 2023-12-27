import React from 'react';
import './Anmeldung.css';
import { Link } from 'react-router-dom';

const Anmeldung = () => {
  return (
    <div className="anmeldung-container">
      <h1>Log In</h1>

      <p>Erobere die Arbeitswelt mit nur wenigen Klicks!</p>

      <div className="input-container">
        <input type="email" placeholder="E-Mail" />
      </div>

      <div className="input-container">
        <input type="password" placeholder="Passwort" />
      </div>

      <button className="anmelde-button">Log In</button>

      <p className="anmeldung-text">
        Durch Klicken auf "Log In" stimmen Sie der Nutzervereinbarung, der Datenschutzrichtlinie
        <br />und der Cookie-Richtlinie von WorkingStudent zu.
      </p>
      <Link to= '/passwortanfordern'>
      <p className="password-link">Password vergessen?</p>
      </Link>
     
      <Link to= '/register'>
      <p className="registrierung-link">
        Noch kein WorkingStudent oder auf der Suche nach WorkingStudents? Hier registrieren!
        </p>
        </Link>
      

    </div>
  );
};

export default Anmeldung;