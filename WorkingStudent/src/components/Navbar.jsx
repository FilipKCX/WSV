import React from 'react';
import './Navbar.css'

// NavigationBar component
const NavigationBar = () => {
    // Array of navigation links
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
  };
  
  // Navbar component
  function Navbar() {
    return (
      <div className="Navbar">
        <NavigationBar />
      </div>
    );
  }
  
  export default Navbar;