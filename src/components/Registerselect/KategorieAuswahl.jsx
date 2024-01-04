import React from 'react';
import { Button } from 'react-bootstrap';
import './KategorieAuswahl.css';

const KaAuswahl = () => {
  return (
    <div className="kategorie-container">
      <p className="kategorie-text">Für welche Kategorie möchten<br/>Sie ein Profil erstellen?</p>

      <Button className="student-button" variant="primary">Student/in</Button>
      <Button className="unternehmen-button" variant="success">Unternehmen</Button>
    </div>
  );
};

export default KaAuswahl;
