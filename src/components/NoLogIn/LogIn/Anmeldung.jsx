import React from 'react';
import './Anmeldung.css';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import { getHTTPRequest } from '/src/components/serverPackage';
import { useNavigate } from "react-router-dom";
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  email: yup.string().matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'E-Mail muss gültig sein').email('Ungültige E-Mail Adresse').required('E-Mail ist erforderlich'),
  password: yup.string().min(6, 'Das Passwort muss mindestens 6 Zeichen lang sein.').required('Passwort ist erforderlich'),
});

const Anmeldung = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogInRequest = async (values) => {
    try {
      const paramArray = [values.email, values.password];
      console.log(paramArray);
      const apiResponse = await getHTTPRequest('getLoginUser', paramArray);
      if (apiResponse === 'a') {
        alert('Die Email oder das Passwort ist falsch!');
        return;
      }
      sessionStorage.setItem('userID', apiResponse);

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

      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => handleLogInRequest(values)}
      >
        <Form>
          <Form.Group controlId="formEmail" className="input-container">
            <Field
              type="email"
              placeholder="E-Mail"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              as={Form.Control}
            />
            <ErrorMessage name="email" component="div" className="error-message" />
          </Form.Group>

          <Form.Group controlId="formPassword" className="input-container">
            <Field
              type="password"
              placeholder="Passwort"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              as={Form.Control}
            />
            <ErrorMessage name="password" component="div" className="error-message" />
          </Form.Group>

          <Button type="submit" className='anmelde-button' variant="outline-primary">
            Log In
          </Button>
        </Form>
      </Formik>

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
