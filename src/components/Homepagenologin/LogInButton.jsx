import React from 'react';
import './LogInButton.css';
import {Link } from "react-router-dom"


const LogInButton = ({ label, onClick }) => {
  return (
    <Link to="/anmeldung">
    <button className="login-button-no-login" onClick={onClick}>
      Log In
    </button>
    </Link>
  );
};

export default LogInButton;
