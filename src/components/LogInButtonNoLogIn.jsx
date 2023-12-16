import React from 'react';
import './LogInButtonNoLogIn.css';

const LogInButtonNoLogIn = ({ label, onClick }) => {
  return (
    <button className="login-button-no-login" onClick={onClick}>
      Mitglied werden
    </button>
  );
};

export default LogInButtonNoLogIn;
