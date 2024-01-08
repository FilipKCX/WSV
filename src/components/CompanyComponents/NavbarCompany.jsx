import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from './LogoCompany';
  
  function Navibar() {

    const navLinks = [
      { text: 'Einstellungen', to: '/EinstellungenCompany' },
      { text: 'Chat', to: '/ChatCompany' },
      { text: 'Likes', to: '/LikesCompany' },
      { text: 'Matching', to: '/Matching' },
      { text: 'Profil', to: '/ProfilepageCompany' },
      { text: 'Home', to: '/HomeCompany' }

  ];

  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky='top'>
      <Container>
        <div className='fixed-logo'><Navbar.Brand href="#home" > <Logo/> </Navbar.Brand> </div>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="ml-auto">
           <Link to="/HomeCompany" className="nav-link">
              <Nav.Link as="span">Home</Nav.Link>
            </Link>
            <Link to="/ChatCompany" className="nav-link">
              <Nav.Link as="span">Chat</Nav.Link>
            </Link>
            <Link to="/Matching" className="nav-link">
              <Nav.Link as="span">Matching</Nav.Link>
            </Link>
            <Link to="/ProfilepageCompany" className="nav-link">
              <Nav.Link as="span">Profil</Nav.Link>
            </Link>
            <Link to="/LikesCompany" className="nav-link">
              <Nav.Link as="span">Likes</Nav.Link>
            </Link>
            <NavDropdown title="Mehr" id="basic-nav-dropdown" className="custom-center">
            <Link to="/SettingsCompany" className="dropdown-item">
                <NavDropdown.Item as="span">Einstellungen</NavDropdown.Item>
            </Link>

            <Link to="/ImpressumCompany" className="dropdown-item">
                <NavDropdown.Item as="span">Impressum</NavDropdown.Item>
            </Link>
            <Link to="/AGBCompany" className="dropdown-item">
                <NavDropdown.Item as="span">AGB</NavDropdown.Item>
            </Link>
            <Link to="/DatenschutzCompany" className="dropdown-item">
                <NavDropdown.Item as="span">Datenschutz</NavDropdown.Item>
            </Link>
            <Link to="/HinweiseCompany" className="dropdown-item">
                <NavDropdown.Item as="span">Hinweise</NavDropdown.Item>
            </Link>
            <Link to="/KontaktCompany" className="dropdown-item">
                <NavDropdown.Item as="span">Kontakt</NavDropdown.Item>
            </Link>
            </NavDropdown>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  }
  
  export default Navibar;

  