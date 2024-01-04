import React, { useState } from 'react';
import './Registrierung.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
 
import { getHTTPRequest } from '/src/components/serverPackage';
import SelectButton from '../SelectButton';

const Registrierung = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Prepare data for backend
    const userData = {
      email: email,
      password: password,
    };


    let commandURL = "http://localhost:34123/createUser&" + email + "&" + password;
    let paramArray = [email, password];
    
    
    let apiResponse = getHTTPRequest("createUser", paramArray);
    //apiResponse = getDataMain()
    alert(apiResponse);

  };

  return (
    <div className="registration-container">
      <h1>Registrieren</h1>

      <p className='erober'>Erobere die Arbeitswelt mit nur wenigen Klicks!</p>

      <Form.Group className="input-container">
        <Form.Control
          type="email"
          placeholder="E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="input-container">
        <Form.Control
          type="password"
          placeholder="Passwort"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="input-container">
        <Form.Control
          type="password"
          placeholder="Passwort bestätigen"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </Form.Group>

      <Button className='register-button' variant="outline-primary" onClick={handleRegister}>
        Registrieren
      </Button>{' '}
      <div className='alignb-center'>
      <SelectButton/>
      </div>
       
      {/* Agreement text and login link */}
      <p className="registration-text">
        Durch Klicken auf "Registrieren" stimmen Sie der Nutzervereinbarung, der Datenschutzrichtlinie
        <br />und der Cookie-Richtlinie von WorkingStudent zu.
      </p>
      <Link to='/anmeldung'>
        <p className="login-link">Bereits ein Mitglied? Jetzt anmelden!</p>
      </Link>
    </div>
  );
};

export default Registrierung;

