import React from 'react';
import './BottomNavbar.css';
import {Link } from "react-router-dom"

const BottomNavbar = () => {
  return (
    <div className="navbar">
      <Link to="/impressum">Impressum</Link>
      <Link to="/agb">AGB</Link>
      <Link to="/datenschutzerklärung">Datenschutzerklärung</Link>
      <Link to="/cookies">Cookies</Link>
      <Link to="/kontakt">Kontakt</Link>
    </div>
  );
};

export default BottomNavbar;
