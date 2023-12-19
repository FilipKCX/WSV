import React, { useState } from 'react';
import './ProfileView.css';

const ProfileView = () => {
  const [editingDescription, setEditingDescription] = useState(false);
  const [description, setDescription] = useState('Hier kannst du dich selbst beschreiben und deine Fähigkeiten teilen.');

  const handleDescriptionClick = () => {
    setEditingDescription(true);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleDescriptionKeyDown = (event) => {
    if (event.key === 'Enter') {
      setEditingDescription(false);
    }
  };

  return (
    <div className="profile-view">
      <div className="profile-header">
        <div className="profile-picture">
          {/* Hier kannst du das Profilbild des Nutzers einfügen */}
        </div>
        <div className="edit-profile">
          Bild bearbeiten
          <span className="edit-icon" onClick={() => console.log('Bild bearbeiten')}>
            🖊️
          </span>
        </div>
      </div>

      <div className="profile-section">
        <h2>
          Persönliche Daten
          <span className="edit-icon" onClick={() => console.log('Bearbeite persönliche Daten')}>
            🖊️
          </span>
        </h2>
        <ul>
          <li>Name: Max Mustermann</li>
          <li>Email: max@example.com</li>
          <li>Telefon: +1234567890</li>
          <li>Anschrift: Musterstraße 123, 12345 Musterstadt</li>
        </ul>
      </div>

      <div className="profile-section">
        <h2>
          Profilbeschreibung
          <span className="edit-icon" onClick={handleDescriptionClick}>
            🖊️
          </span>
        </h2>
        {editingDescription ? (
          <textarea
            value={description}
            onChange={handleDescriptionChange}
            onKeyDown={handleDescriptionKeyDown}
          />
        ) : (
          <div className="editable-text" onClick={handleDescriptionClick}>
            {description}
          </div>
        )}
      </div>

      <div className="profile-section">
        <h2>
          Werdegang
          <span className="edit-icon" onClick={() => console.log('Bearbeite Werdegang')}>
            🖊️
          </span>
        </h2>
        <div className="timeline">
          <div className="event">
            <div className="date">Januar 2020</div>
            <div className="description">Start meines beruflichen Werdegangs</div>
          </div>
          <div className="event">
            <div className="date">März 2021</div>
            <div className="description">Weiterentwicklung im Bereich XYZ</div>
          </div>
          <div className="event">
            <div className="date">Juni 2022</div>
            <div className="description">Neues Projekt gestartet</div>
          </div>
          {/* Weitere Ereignisse hier hinzufügen */}
        </div>
      </div>

      {/* Weitere Abschnitte hier hinzufügen */}
    </div>
  );
};

export default ProfileView;
