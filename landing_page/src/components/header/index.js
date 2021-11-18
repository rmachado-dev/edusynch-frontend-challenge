import React from "react";
import { Container, Navbar, Nav, Offcanvas } from "react-bootstrap";
import logo from "../images/logo.png";
import hamb from "../images/hamburger.png";
import "./header.css";
import BotaoModal from "../botaomodal";

const Header = () => {
  return (
    <>
      {/* desktop */}
      <Navbar
        bg="none"
        expand="lg"
        variant="dark"
        className="d-none d-lg-block"
      >
        <Container>
          <img src={logo} className="img-fluid me-5" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex justify-content-end">
              <Nav.Link href="#" className="text-white">
                How it works
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                About Us
              </Nav.Link>
            </Nav>
            {/* <button class="botao">Get Started</button> */}
            <BotaoModal />

          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* mobile */}
      <Navbar
        bg="none"
        variant="dark"
        expand="lg"
        className="d-block d-lg-none"
      >
        <Container className="d-flex justify-content-start align-center h-100">
          <Navbar.Toggle aria-controls="menu-collapse">
            <img alt="" src={hamb} className="img-fluid align-center " />
          </Navbar.Toggle>
          <img src={logo} className="img-fluid ms-2" />

          <Navbar.Collapse id="menu-collapse">
            <Nav className="me-auto">
              {/* logo e close */}
              <div className="d-flex justify-content-between align-items-center">
                <img src={logo} className=" h-100" />
                <Navbar.Toggle aria-controls="menu-collapse">
                  <i className="fas fa-times float-end m-0 p-0"></i>
                </Navbar.Toggle>
              </div>
            </Nav>

            {/* conteúdo */}
            <div className="h-100 d-flex flex-column align-items-center py-5">
              <Nav className="text-center py-5">
                <Nav.Link href="#" className="text-white">
                  How it works
                </Nav.Link>
                <Nav.Link href="#" className="text-white">
                  About Us
                </Nav.Link>
              </Nav>
              {/* <button className="botao mx-auto d-block w-100">Get Started</button> */}
              <BotaoModal />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
