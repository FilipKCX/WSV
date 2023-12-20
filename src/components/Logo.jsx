import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css'; 

const Logo = () => {
  return (
    <Link to="/" className="logo-link">
      <div className="logo">WorkingStudent</div>
    </Link>
  );
};

export default Logo;
