import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Navbar.css';
  
  function Navbar() {

    const navLinks = [
      { text: 'Einstellungen', to: '/einstellungen' },
      { text: 'Chat', to: '/chat' },
      { text: 'Likes', to: '/likes' },
      { text: 'Profil', to: '/profilepage' },
      { text: 'Home', to: '/homeUser' }

  ];

  return (
    <nav className="navbartop">
      {navLinks.map((link, index) => (
        <Link key={index} to={link.to} className='navbar-link'>
          {link.text}
        </Link>
      ))}
    </nav>
  );
  }
  
  export default Navbar;

  