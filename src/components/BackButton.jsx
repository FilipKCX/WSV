import React from 'react';
import Button from 'react-bootstrap/Button';
import './BackButton.css';

function BackButton() {
  return (
    <div className="back-button-container">
      <Button variant="secondary">Zurück</Button>{' '}
    </div>
  );
}

export default BackButton;
