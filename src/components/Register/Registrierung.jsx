import React, { useState } from 'react';
import './Registrierung.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Registrierung = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegistration = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Prepare data for backend
    const userData = {
      email: email,
      password: password,
    };

    // Send POST request to backend
    fetch('http://localhost:3001/createAccount', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Handle success or error messages
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="registration-container">
      <h1>Registrieren</h1>

      {/* Input fields */}
      <div className="input-container">
        <input
          type="email"
          placeholder="E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="input-container">
        <input
          type="password"
          placeholder="Passwort"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="input-container">
        <input
          type="password"
          placeholder="Passwort bestätigen"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      {/* Register button */}
      <Button className='register-button' variant="outline-primary" onClick={handleRegistration}>
        Registrieren
      </Button>{' '}

      {/* Agreement text and login link */}
      <p className="registration-text">
        Durch Klicken auf "Registrieren" stimmen Sie der Nutzervereinbarung, der Datenschutzrichtlinie
        <br />und der Cookie-Richtlinie von WorkingStudent zu.
      </p>
      <Link to="/anmeldung">
        <p className="login-link">Bereits ein Mitglied? Jetzt anmelden!</p>
      </Link>
    </div>
  );
};

export default Registrierung;
