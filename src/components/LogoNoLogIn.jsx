import React from 'react';
import { Link } from 'react-router-dom';
import './LogoNoLogIn.css'; 

const LogoNoLogIn = () => {
  return (
    <Link to="/" className="llogo-link">
      <div className="llogo">WorkingStudent</div>
    </Link>
  );
};

export default LogoNoLogIn;
