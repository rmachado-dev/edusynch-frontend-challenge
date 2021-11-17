import React from "react";
import {Container, Navbar, Nav} from 'react-bootstrap';
import logo from '../images/logo.png';
import './header.css';

const Header = () => {
  return (
    <>
      <Navbar bg="none" expand="lg" variant="dark">
        <Container>
          <img src={logo} className="img-fluid me-5" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex justify-content-end">
              <Nav.Link href="#" className="text-white">How it works</Nav.Link>
              <Nav.Link href="#" className="text-white">About Us</Nav.Link>
            </Nav>
            <button class="botao">Get Started</button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;
