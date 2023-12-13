// src/components/LoginComponent.js
import React, { useState } from 'react';
import './LogIn.css';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="login-container">
      <h2></h2>
      <p>Gestalte mit uns deine Karriere! Starte durch und erstelle jetzt dein eigenes Profil bei WorkingStudent</p>
      <form>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="E-Mail"
        />
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
        />

        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/signup">Sign up here</a>.</p>
    </div>
  );
};

export default LoginComponent;
