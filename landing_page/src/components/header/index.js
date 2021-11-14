import React from "react";
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import logo from '../images/logo.png';

const Header = () => {
  return (
    <>
      <Navbar bg="none" expand="lg" variant="dark">
        <Container>
          <img src={logo} className="img-fluid me-5" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#" className="text-white">How it works</Nav.Link>
              <Nav.Link href="#" className="text-white">About Us</Nav.Link>
            </Nav>
            <button>Get Started</button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;
