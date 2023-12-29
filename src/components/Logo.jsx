import React from 'react';
import './Logo.css' 

import {Link } from "react-router-dom"; 

const Logo = () => {
    return (
        <Link to="/HomeUser">
            <div className='logo-link'>
                WorkingStudent
            </div>    
        </Link>
    );
};

export default Logo;
