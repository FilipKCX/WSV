import React from 'react';
import Button from 'react-bootstrap/Button';
import './SaveButton.css';

function SaveButton() {
  return (
    <div className="save-button-container">
      <Button variant="primary">Speichern</Button>{' '}
    </div>
  );
}

export default SaveButton;
