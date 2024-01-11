import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './KategorieAuswahl.css';

const KaAuswahl = () => {
  return (
    <div className="kategorie-container">
      <p className="kategorie-text">Für welche Kategorie möchten<br/>Sie ein Profil erstellen?</p>
      <Link to='/ProfileCreation'>
      <Button className="student-button" variant="primary">Student/in</Button>
      </Link>
      <Link to='/ProfileCreationCompany'>
      <Button className="unternehmen-button" variant="success">Unternehmen</Button>
      </Link>
    </div>
  );
};

export default KaAuswahl;
