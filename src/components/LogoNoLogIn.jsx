import React from 'react';
import './LogoNoLogIn.css';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Logo = () => {
    return (
        <Container>
            <Link to="/" className='llogo-link'>
                WorkingStudent
            </Link>
        </Container>
    );
};

export default Logo;
