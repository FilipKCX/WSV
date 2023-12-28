import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from './Logo';
  
  function Navibar() {

    const navLinks = [
      { text: 'Einstellungen', to: '/einstellungen' },
      { text: 'Chat', to: '/chat' },
      { text: 'Likes', to: '/likes' },
      { text: 'Profil', to: '/profilepage' },
      { text: 'Home', to: '/homeUser' }

  ];

  return (
    <div className='navbarr'> 
    <Navbar expand="lg" className="bg-body-tertiary" sticky='top'>
      <Container>
        <div className='fixed-logo'><Navbar.Brand href="#home" > <Logo /> </Navbar.Brand> </div>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="ml-auto">
           <Link to="/homeUser" className="nav-link">
              <Nav.Link as="span">Home</Nav.Link>
            </Link>
            <Link to="/chat" className="nav-link">
              <Nav.Link as="span">Chat</Nav.Link>
            </Link>
            <Link to="/profilepage" className="nav-link">
              <Nav.Link as="span">Profil</Nav.Link>
            </Link>
            <Link to="/likes" className="nav-link">
              <Nav.Link as="span">Likes</Nav.Link>
            </Link>
            <NavDropdown title="Mehr" id="basic-nav-dropdown" className="custom-center">
            <Link to="/einstellungen" className="dropdown-item">
                <NavDropdown.Item as="span">Einstellungen</NavDropdown.Item>
            </Link>

            <Link to="/kontakt" className="dropdown-item">
                <NavDropdown.Item as="span">Über uns</NavDropdown.Item>
            </Link>
            </NavDropdown>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
  }
  
  export default Navibar;

  