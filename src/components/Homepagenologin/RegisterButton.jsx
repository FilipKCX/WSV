import React from 'react';
import './RegisterButton.css';
import {Link } from "react-router-dom"


const RegisterButton = ({ label, onClick }) => {
  return (
    <Link to="/register">
    <button className="register-button-no-login" onClick={onClick}>
      Registrieren
    </button>
    </Link>
  );
};

export default RegisterButton;
