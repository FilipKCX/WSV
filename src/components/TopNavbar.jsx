import React from 'react';
import './TopNavbar.css';
import {Link} from "react-router-dom"

const TopNavbar = () => {
  return (
    <div className="top-navbar">
      <div className="logo">Logo</div>
      <div className="nav-links">
       <Link to="/">Home</Link>
       <Link to="/profilepage">Profil</Link>
       <Link to="/">Likes</Link>
       <Link to="/">Chat</Link>
       <Link to="/">Einstellungen</Link>
      </div>
    </div>
  );
};

export default TopNavbar;
