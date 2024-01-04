import React from 'react';
import './Kontakt.css';

const Kontakt = () => {
  return (
    <div className="kontakt-container">
      <h1>Kontakt</h1>
      <p>Wir freuen uns, von Ihnen zu hören und stehen Ihnen für Fragen, Anregungen oder Anfragen gerne zur Verfügung.</p>
      <p>E-Mail: contact.workingstudent@gmail.com</p>
      <form className="kontakt-form">
        <input type="text" placeholder="Firma" />
        <input type="text" placeholder="Anrede*" required />
        <input type="text" placeholder="Vorname*" required />
        <input type="text" placeholder="Nachname*" required />
        <input type="text" placeholder="Betreff*" required />
        <input type="email" placeholder="E-Mail*" required />
        <textarea placeholder="Nachricht*" required></textarea>
        <button type="submit">Senden</button>
      </form>
    </div>
  );
};

export default Kontakt;
