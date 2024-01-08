import React from 'react';
import './Anmeldung.css';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

const Anmeldung = () => {
  return (
    <div className="anmeldung-container">
      <h1>Log In</h1>

      <p className='erober'>Erobere die Arbeitswelt mit nur wenigen Klicks!</p>

      <Form>
        <Form.Group controlId="formEmail" className="input-container">
          <Form.Control type="email" placeholder="E-Mail" />
        </Form.Group>

        <Form.Group controlId="formPassword" className="input-container">
          <Form.Control type="password" placeholder="Passwort" />
        </Form.Group>

        <Button className='anmelde-button' variant="outline-primary" type="submit">
          Log In
        </Button>
      </Form>

      <p className="anmeldung-text">
        Durch Klicken auf "Log In" stimmen Sie der Nutzervereinbarung, der Datenschutzrichtlinie
        <br />und der Cookie-Richtlinie von WorkingStudent zu.
      </p>

      <Link to='/passwortanfordern'>
        <p className="password-link">Password vergessen?</p>
      </Link>

      <Link to='/register'>
        <p className="registrierung-link">
          Noch kein WorkingStudent oder auf der Suche nach WorkingStudents? Hier registrieren!
        </p>
      </Link>
    </div>
  );
};

export default Anmeldung;
