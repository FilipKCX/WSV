import React, { useState } from 'react';
import './Prequest.css';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';



const Prequest = () => {
  const [emailError, setEmailError] = useState('');

  const handlePasswordRequest = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
  };
  
  const validateEmail = () => {
    // Simple email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };
  

  
  return (
    <div className="request-container">
      <h1>Passwort anfordern</h1>
      <p>Sie haben Ihr Passwort vergessen? Geben Sie hier Ihre E-Mail Adresse ein und Sie erhalten ein automatisch generiertes Passwort an die angegebene E-Mail</p>

      <Form onSubmit={handlePasswordRequest}>
        <Form.Group controlId="formEmail">
          <Form.Control type="email" name="email" placeholder="E-Mail" onBlur={validateEmail} />
          {emailError && <Form.Text className="text-danger">{emailError}</Form.Text>}
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
