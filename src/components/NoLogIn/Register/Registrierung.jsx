import React from 'react';
import './Registrierung.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getHTTPRequest } from '/src/components/serverPackage';
import SelectButton from '../../SelectButton';
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  email: yup.string()
    .required('E-Mail ist erforderlich.')
    .email('Ungültige E-Mail Adresse.')
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'E-Mail muss gültig sein.'),
  password: yup.string()
    .min(6, 'Das Passwort muss mindestens 6 Zeichen lang sein.')
    .required('Passwort ist erforderlich.'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwörter müssen übereinstimmen.')
    .required('Passwortbestätigung ist erforderlich.'),
});

const Registrierung = () => {
  const navigate = useNavigate();

  const handleButtonToggle = () => {
    // Implementation of your button toggle logic
  };

  const handleRegister = async (values) => {
    try {
      if (values.password !== values.confirmPassword) {
        alert('Passwörter stimmen nicht überein');
        return;
      }

      const userData = {
        email: values.email,
        password: values.password,
        isUser: values.isUser,
      };

      let paramArray = [values.email, values.password, values.isUser];
      console.log(paramArray);
      const apiResponse = await getHTTPRequest('createUser', paramArray);
      sessionStorage.setItem('userID', apiResponse);

      alert(sessionStorage.getItem('userID'));
      let userArray = [sessionStorage.getItem('userID')];
      const apiResponse2 = await getHTTPRequest('getIsUser', userArray);
      sessionStorage.setItem('isUser', apiResponse2);

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
    <div className="registration-container">
      <h1>Registrieren</h1>

      <p className="erober">Erobere die Arbeitswelt mit nur wenigen Klicks!</p>

      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          isUser: '1',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => handleRegister(values)}
      >
        <Form>
          <Form.Group controlId="formEmail" className="input-container">
            <Form.Control as={Field} type="email" placeholder="E-Mail" name="email" />
            <ErrorMessage name="email" component="div" className="error-message" />
          </Form.Group>

          <Form.Group className="input-container">
            <Form.Control as={Field} type="password" placeholder="Passwort" name="password" />
            <ErrorMessage name="password" component="div" className="error-message" />
          </Form.Group>

          <Form.Group className="input-container">
            <Form.Control as={Field} type="password" placeholder="Passwort bestätigen" name="confirmPassword" />
            <ErrorMessage name="confirmPassword" component="div" className="error-message" />
          </Form.Group>

          <Button type="submit" className="register-button" variant="outline-primary" >
            Registrieren
          </Button>{' '}

          <div className="alignb-center">
            <SelectButton onToggle={handleButtonToggle} />
          </div>
          <p className="registration-text">
            Durch Klicken auf "Registrieren" stimmen Sie der Nutzervereinbarung, der Datenschutzrichtlinie
            <br />
            und der Cookie-Richtlinie von WorkingStudent zu.
          </p>
        </Form>
      </Formik>

      <Link to="/anmeldung">
        <p className="login-link">Bereits ein Mitglied? Jetzt anmelden!</p>
      </Link>
    </div>
  );
};

export default Registrierung;
