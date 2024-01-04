import React from 'react';
import './RegisterButton.css';
import {Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';


const RegisterButton = ({ label, onClick }) => {
  return (
    <Link to="/register">
    <Button className='register-button-no-login' variant="outline-primary">Registrieren</Button>{' '}
    </Link>
  );
};

export default RegisterButton;
