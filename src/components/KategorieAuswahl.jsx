import React from 'react';
import './KategorieAuswahl.css';

const KaAuswahl = () => {
  return (
    <div className="kategorie-container">

      <p className="kategorie-text">Für welche Kategorie möchten<br/>Sie ein Profil erstellen?</p>

      <button className="student-button">Student/in</button>
      <button className="unternehmen-button">Unternehmen</button>

    </div>
  );
};

export default KaAuswahl;