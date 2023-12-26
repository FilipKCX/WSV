import React from 'react';
import './Impressum.css';

const Impressum = () => {
  return (
    <div className="impressum-container">
      <h1>Impressum</h1>
      <div className="impressum-info">
        <div className="impressum-section">
          <h2>Adresse:</h2>
          <p>Lorem Ipsum<br/>
          Musterstraße 123<br/>
          12345 Hamburg</p>
        </div>
        <div className="impressum-section">
          <h2>Kontakt:</h2>
          <p>contact.workingstudent@gmail.com<br/>
          Musterstraße 123<br/>
          12345 Hamburg</p>
        </div>
        <div className="impressum-section">
          <h2>Vertretungsberechtigt:</h2>
          <p>Lorem Ipsum<br/>
          Lorem Ipsum<br/>
          Lorem Ipsum</p>
        </div>
        <div className="impressum-section">
          <h2>Handelsregister:</h2>
          <p>Amtsgericht Hamburg HRB 1234,<br/>
          USt-IdNr. DE 12345678</p>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
