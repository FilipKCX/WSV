import React from 'react';
import './TopNavbarUser.css';
import {Link} from "react-router-dom"

const TopNavbarUser = () => {
  return (
    <div className="top-navbar">
      <div className="topnav-links">
       <Link to="/HomeUser">Home</Link>
       <Link to="/profilepage">Profil</Link>
       <Link to="/likes">Likes</Link>
       <Link to="/chat">Chat</Link>
       <Link to="/settings">Einstellungen</Link>
      </div>
    </div>
  );
};

export default TopNavbarUser;
