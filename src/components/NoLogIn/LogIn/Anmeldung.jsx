import React from 'react';
import './Anmeldung.css';
import { Link } from 'react-router-dom';
import { Button, Form, Toast } from 'react-bootstrap';
import { useState } from 'react';
import { getHTTPRequest } from '/src/components/serverPackage';
import { useNavigate } from "react-router-dom";


const Anmeldung = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);

  const handleLogInRequest = async () => {
    try {
      const paramArray = [email, password];
      console.log(paramArray);
      const apiResponse = await getHTTPRequest('getLoginUser', paramArray);
      if (apiResponse === 'a') {
        setShowToast(true);
        return;
      }
      sessionStorage.setItem('userID', apiResponse);
      const apiResponse2 = await getHTTPRequest("getIsUser", [apiResponse]);
      sessionStorage.setItem("isUser", apiResponse2);
      

      if (sessionStorage.getItem('isUser') === '1') {

        navigate('/HomeUser');

      } else {

        navigate('/HomeCompany');

      }
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };

  const validateEmail = () => {
    // Simple email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
    } else {
      setEmailError('');
    }
  };

  return (
    <div className="anmeldung-container">
      <h1>Log In</h1>

      <p className='erober'>Erobere die Arbeitswelt mit nur wenigen Klicks!</p>
          <Form.Group controlId="formEmail" className="input-container">

            <Form.Control
            type="email"
            placeholder="E-Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail} // Validate email format onBlur
          />
           {emailError && <Form.Text className="text-danger">{emailError}</Form.Text>}
          </Form.Group>

          <Form.Group controlId="formPassword" className="input-container">

            <Form.Control
            type="password"
            placeholder="Passwort"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          </Form.Group>

          <Button type="submit" className='anmelde-button' variant="outline-primary" onClick={handleLogInRequest}>
            Log In
          </Button>
          <Toast show={showToast} onClose={() => setShowToast(false)} delay={3000} autohide className="toast-righta">
        <Toast.Header>
          <strong className="mr-auto">Fehler beim Anmelden!</strong>
        </Toast.Header>
        <Toast.Body>Die Email oder das Passwort ist falsch!</Toast.Body>
      </Toast>

      <p className="anmeldung-text">
        Durch Klicken auf "Log In" stimmen Sie der Nutzervereinbarung, der Datenschutzrichtlinie
        <br />und der Cookie-Richtlinie von WorkingStudent zu.
      </p>

      <Link to='/passwortanfordern'>
        <p className="password-link">Passwort vergessen?</p>
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
