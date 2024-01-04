import React from 'react';
import { Nav } from 'react-bootstrap';
import './BottomNavbar.css';
import { Link } from 'react-router-dom';

const BottomNavbar = () => {
  return (
    <div className="bottom">
      <Nav className="bottom-nav">
        <Link to="/Impressum" className="nav-link">Impressum</Link>
        <Link to="/AGB" className="nav-link">AGB</Link>
        <Link to="/Datenschutz" className="nav-link">Datenschutzerklärung</Link>
        <Link to="/Hinweise" className="nav-link">Hinweise zu Cookies</Link>
        <Link to="/Kontakt" className="nav-link">Kontakt</Link>
      </Nav>
    </div>
  );
};

export default BottomNavbar;
