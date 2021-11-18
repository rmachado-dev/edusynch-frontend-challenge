import React, { useState } from "react";
import { Modal, Button, Container, Row, Col, Form } from "react-bootstrap";
import "./botaomodal.css";

function ConteudoModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Get Started <p>Just Login</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Username:</Form.Label>
                <Form.Control type="text" id="meumodal" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col auto>
              <Form.Group className="mb-3">
                <Form.Label>Password: </Form.Label>
                <Form.Control type="password" id="meumodal" />
              </Form.Group>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button className="botao d-none d-lg-block" variant="none">
          LOGIN
        </Button>
        <Button
          className="botao d-block d-lg-none mx-auto w-100"
          variant="none"
        >
          LOGIN
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function BotaoModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="none" onClick={handleShow} className="botao">
        Get Started
      </Button>

      <ConteudoModal show={show} onHide={() => setShow(false)} />
    </>
  );
}

export default BotaoModal;
