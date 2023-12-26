import React from 'react';
import './Logo.css' 
import wslogo from '../assets/Neu_Logo.png'; 
import {Link } from "react-router-dom"; 



const Header = () => {
    return (
        <Link to="/">
            <img src={wslogo} alt="WorkingStudent Logo" className="logo" />
        </Link>
    );
};

export default Header;
