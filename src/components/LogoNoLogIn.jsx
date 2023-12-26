import React from 'react';
import { Link } from 'react-router-dom';
import './LogoNoLogIn.css'; 

const LogoNoLogIn = () => {
  return (
    <Link to="/" className="logo-link">
      <div className="logo">WorkingStudent</div>
    </Link>
  );
};

export default LogoNoLogIn;
