import React from 'react';
import './TopNavbar.css';

const TopNavbar = () => {
  return (
    <div className="top-navbar">
      <div className="logo">Logo einfügen</div>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Profil</a>
        <a href="#">Likes</a>
        <a href="#">Chat</a>
        <a href="#">Einstellungen</a>
      </div>
    </div>
  );
};

export default TopNavbar;
