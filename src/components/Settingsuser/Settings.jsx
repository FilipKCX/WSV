import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './Settings.css';

const SettingsPanel = () => {
  const [oldEmail, setOldEmail] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [emailVerification, setEmailVerification] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [passwordVerification, setPasswordVerification] = useState('');
  const [deactivatePush, setDeactivatePush] = useState(false);
  const [deactivateEmail, setDeactivateEmail] = useState(false);

  const handleOldEmailChange = (e) => {
    setOldEmail(e.target.value);
  };

  const handleNewEmailChange = (e) => {
    setNewEmail(e.target.value);
  };

  const handleEmailVerificationChange = (e) => {
    setEmailVerification(e.target.value);
  };

  const handleOldPasswordChange = (e) => {
    setOldPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handlePasswordVerificationChange = (e) => {
    setPasswordVerification(e.target.value);
  };

  const handlePushToggle = () => {
    setDeactivatePush(!deactivatePush);
  };

  const handleEmailToggle = () => {
    setDeactivateEmail(!deactivateEmail);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (newPassword === passwordVerification) {
      console.log('Old Password:', oldPassword);
      console.log('New Password:', newPassword);
      console.log('Password Verification:', passwordVerification);
    } else {
      console.error('Password verification failed. New passwords do not match.');
    }
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (newEmail === emailVerification) {
      console.log('Old Email:', oldEmail);
      console.log('New Email:', newEmail);
      console.log('Email Verification:', emailVerification);
    } else {
      console.error('Email verification failed. New emails do not match.');
    }
  };

  const handleSaveSettings = (e) => {
    e.preventDefault();
    console.log('Saving all settings...');
  };

  return (
    <div className='settdiv'>
    <Container>
      {/* Email Section */}
      <h3>E-Mail Einstellungen</h3>
      <Form>
        <Form.Group>
          <Form.Label>Alte E-Mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="Alte E-Mail"
            value={oldEmail}
            onChange={handleOldEmailChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Neue E-Mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="Neue E-Mail"
            value={newEmail}
            onChange={handleNewEmailChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Neue E-Mail verifizieren</Form.Label>
          <Form.Control
            type="email"
            placeholder="Neue E-Mail verifizieren"
            value={emailVerification}
            onChange={handleEmailVerificationChange}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleEmailSubmit} className="ml-auto mt-2">
          E-Mail ändern
        </Button>

        <hr className="blue-line" />
      </Form>

      {/* Password Section */}
      <h3>Passwort Einstellungen</h3>
      <Form>
        <Form.Group>
          <Form.Label>Altes Passwort</Form.Label>
          <Form.Control
            type="password"
            placeholder="Altes Passwort"
            value={oldPassword}
            onChange={handleOldPasswordChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Neues Passwort</Form.Label>
          <Form.Control
            type="password"
            placeholder="Neues Passwort"
            value={newPassword}
            onChange={handleNewPasswordChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Neues Passwort verifizieren</Form.Label>
          <Form.Control
            type="password"
            placeholder="Neues Passwort verifizieren"
            value={passwordVerification}
            onChange={handlePasswordVerificationChange}
          />
        </Form.Group>

        <Button variant="primary" onClick={handlePasswordSubmit} className="ml-auto mt-2">
          Passwort ändern
        </Button>

        <hr className="blue-line" />
      </Form>

      {/* Notification Section */}
      <h3>Benachrichtigung Einstellung</h3>
      <Form>
        <Form.Group>
          <Form.Check
            type="switch"
            label="Push Benachrichtigungen deaktivieren"
            checked={deactivatePush}
            onChange={handlePushToggle}
          />
        </Form.Group>

        <Form.Group>
          <Form.Check
            type="switch"
            label="E-Mail Benachrichtigung deaktivieren"
            checked={deactivateEmail}
            onChange={handleEmailToggle}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleSaveSettings} className="ml-auto mt-2 mb-3">
          Einstellungen speichern
        </Button>
      </Form>
    </Container>
    </div>
  );
};

export default SettingsPanel;
