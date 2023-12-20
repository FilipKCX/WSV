import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import wostuLogo from '../assets/WS_logo.png'
  
  function Navibar() {

    const navLinks = [
      { text: 'Einstellungen', to: '/einstellungen' },
      { text: 'Chat', to: '/chat' },
      { text: 'Likes', to: '/likes' },
      { text: 'Profil', to: '/profilepage' },
      { text: 'Home', to: '/homeUser' }

  ];

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Working Student
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#chat">Chat</Nav.Link>
            <Nav.Link href="#profil">Profil</Nav.Link>
            <Nav.Link href="#likes">Likes</Nav.Link>

            <NavDropdown title="Mehr" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Einstellungen</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  }
  
  export default Navibar;

  