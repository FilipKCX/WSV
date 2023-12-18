import React from 'react';
import './ProfileEditor.css';

const ProfileEditor = () => {
  return (
    <div className="profile-editor-container">
      <div className="profile-picture">
        <span>Profilbild hinzufügen</span>
      </div>
      <div className="profile-input-box">
        <label>Vorname*:</label>
        <input type="text" placeholder="Vorname*" />
      </div>
      <div className="profile-input-box">
        <label>Nachname*:</label>
        <input type="text" placeholder="Nachname*" />
      </div>
      <div className="profile-input-box">
        <label>Geburtsdatum (tt.mm.jjjj)*:</label>
        <input type="text" placeholder="Geburtsdatum (tt.mm.jjjj)*" />
      </div>
      <div className="profile-input-box">
        <label>Universität*:</label>
        <input type="text" placeholder="Universität*" />
      </div>
      <div className="profile-input-box">
        <label>Studiengang*:</label>
        <input type="text" placeholder="Studiengang*" />
      </div>
      <div className="description-box">
        <label>Beschreibung (max. 120 Wörter):</label>
        <textarea placeholder="Hier Ihre Beschreibung eingeben (max. 120 Wörter)"></textarea>
      </div>
      <div className="button-container">
        <button className="back-button">Zurück</button>
        <button className="save-button">Speichern</button>
      </div>
    </div>
  );
};

export default ProfileEditor;
