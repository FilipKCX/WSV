import React from 'react';
import { Nav } from 'react-bootstrap';
import './BottomNavbar.css';
import { Link } from 'react-router-dom';

const BottomNavbar = () => {
  return (
    <div className="bottom">
      <Nav className="bottom-nav">
        <Link to="/ImpressumNo" className="nav-link">Impressum</Link>
        <Link to="/AGBNo" className="nav-link">AGB</Link>
        <Link to="/DatenschutzNo" className="nav-link">Datenschutzerklärung</Link>
        <Link to="/HinweiseNo" className="nav-link">Hinweise zu Cookies</Link>
        <Link to="/KontaktNo" className="nav-link">Kontakt</Link>
      </Nav>
    </div>
  );
};

export default BottomNavbar;
