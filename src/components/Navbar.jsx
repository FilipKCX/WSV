import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
  
  function Navbar() {

    const navLinks = [
      { text: 'Einstellungen', to: '/einstellungen' },
      { text: 'Chat', to: '/chat' },
      { text: 'Likes', to: '/likes' },
      { text: 'Profil', to: '/profil' },
      { text: 'Home', to: '/homeUser' }

  ];

  return (
    <nav className="navbar">
      {navLinks.map((link, index) => (
        <Link key={index} to={link.to}>
          {link.text}
        </Link>
      ))}
    </nav>
  );
  }
  
  export default Navbar;

  