import React from 'react';
import './LogInButton.css';
import {Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';


const LogInButton = ({ label, onClick }) => {
  return (
    <Link to="/anmeldung">
    <Button className='login-button-no-login' variant="outline-primary">Log In</Button>{' '}
    </Link>
  );
};

export default LogInButton;
