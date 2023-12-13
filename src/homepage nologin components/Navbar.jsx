import React from 'react';
import './Navbar.css'
  
  // Navbar component
  function Navbar() {
    const navLinks = [
      { text: 'Einstellungen', href: '#einstellungen' },
      { text: 'Chat', href: '#chat' },
      { text: 'Likes', href: '#likes' },
      { text: 'Profil', href: '#profil' },
      { text: 'Home', href: '#home' }
  ];

  return (
    <nav className="navbar">
      {navLinks.map((link, index) => (
        <a key={index} href={link.href}>
          {link.text}
        </a>
      ))}
    </nav>
  );
  }
  
  export default Navbar;