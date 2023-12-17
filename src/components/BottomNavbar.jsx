import React from 'react';
import './BottomNavbar.css';
import { Link } from 'react-router-dom';

const BottomNavbar = () => {
  return (
    <div className="navbar">
      <Link to="/impressum">Impressum</Link>
      <Link to="/AGB">AGB</Link>
      <Link to="/datenschutzerklaerung">Datenschutzerklärung</Link>
      <Link to="/hinweise">Hinweise zu Cookies</Link>
      <Link to="/kontakt">Kontakt</Link>
    </div>
  );
};

export default BottomNavbar;
