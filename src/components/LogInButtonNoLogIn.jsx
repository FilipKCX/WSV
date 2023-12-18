import React from 'react';
import './LogInButtonNoLogIn.css';
import {Link } from "react-router-dom"


const LogInButtonNoLogIn = ({ label, onClick }) => {
  return (
    <Link to="/Register">
    <button className="login-button-no-login" onClick={onClick}>
      Mitglied werden
    </button>
    </Link>
  );
};

export default LogInButtonNoLogIn;
