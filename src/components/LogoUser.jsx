import React from 'react';
import { Link } from 'react-router-dom';
import './LogoUser.css'; 

const LogoUser = () => {
  return (
    <Link to="/homeuser" className="logo-link">
      <div className="logo">WorkingStudent</div>
    </Link>
  );
};

export default LogoUser;
