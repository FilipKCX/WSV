import React from 'react';
import './Logo.css' 

import {Link } from "react-router-dom"; 



const Header = () => {
    return (
        <Link to="/HomeUser">
            <div className='logo-llink'>
                WorkingStudent
            </div>    
        </Link>
    );
};

export default Header;
