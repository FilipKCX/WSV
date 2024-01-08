import React from 'react';
import '../Logo.css';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Logo = () => {
    return (
        <Container>
            <Link to="/HomeCompany" className='logo-link'>
                WorkingStudent
            </Link>
        </Container>
    );
};

export default Logo;
