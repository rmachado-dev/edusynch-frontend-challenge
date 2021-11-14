import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Avatarmobile from "../avatar";
import Logomobile from "../logo";
import "./header.css";

const Header = () => {
  return (
    <Navbar className="bg-color">
      <Container>
        <Navbar.Brand className="mx-3">
          <Logomobile />
        </Navbar.Brand>
        <Nav className="me-auto ms-2 d-none d-lg-block">
          <Nav.Link href="#" className='link'>My Classes</Nav.Link>
        </Nav>
        <Avatarmobile />
      </Container>
    </Navbar>
  );
};

export default Header;
