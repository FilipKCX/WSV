import React from 'react';
import './BottomNavbar.css';
import { Link } from "react-router-dom"
import wostuLogo from '../assets/WS_logo'



const BottomNavbar = () => {
  return (
    <div className="bottom">
      <Link to="/Impressum">Impressum</Link>
      <Link to="/AGB">AGB</Link>
      <Link to="/Datenschutz">Datenschutzerklärung</Link>
      <Link to="/Hinweise">Hinweise zu Cookies</Link>
      <Link to="/Kontakt">Kontakt</Link>
    </div>
  );
};

export default BottomNavbar;
