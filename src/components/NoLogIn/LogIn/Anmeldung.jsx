import React from 'react';
import './Anmeldung.css';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import { getHTTPRequest } from '/src/components/serverPackage';
import { useNavigate } from "react-router-dom";
import { Formik, Field, ErrorMessage } from 'formik';


const Anmeldung = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogInRequest = async () => {
    try {
      const paramArray = [email, password];
      console.log(paramArray);
      const apiResponse = await getHTTPRequest('getLoginUser', paramArray);
      if (apiResponse === 'a') {
        alert('Die Email oder das Passwort ist falsch!');
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
          />
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
