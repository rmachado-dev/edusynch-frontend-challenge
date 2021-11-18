import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import "./main.css";

const Main = () => {
  return (
    <>
      <section id="main">
        <Container>
          <Row className="d-flex justify-content-between h-100 align-items-center">
            <Col sm={4} lg={5}>
              <div id="img-1" className="d-none d-lg-block"></div>
              <div id="img-2" className="d-none d-lg-block"></div>
              <div id="img-3" className="d-none d-lg-block"></div>
              <div id="img-4" className="d-none d-lg-block"></div>
              <div id="img-5" className="d-none d-lg-block"></div>
            </Col>
            <Col xs={12} lg={6}>
              <div className="pe-lg-5 mt-5">
                <h1>Find your</h1>
                <h2>best teacher</h2>
                <p className="mt-lg-3 pe-lg-5 d-none d-lg-block">
                  Whether you are a student trying to find your ideal private
                  language teachers/tutors or a teacher trying to find great
                  students for your customised private lessons!
                </p>
              </div>

              <div className="mt-lg-5">
                <Col>
                  <Form id="looking">
                    <Form.Control placeholder="Type here what are you looking for" />
                  </Form>
                </Col>
              </div>

              <div className="mt-4 ">
                {/* desktop */}

                <Form className="d-none d-lg-block d-flex ">
                  <Form.Check
                    checked
                    inline
                    label=" i’m a teacher"
                    name="acesso"
                    type="radio"
                    id="teacher"
                    className="tipo p-3"
                  />
                  <Form.Check
                    inline
                    label=" i’m a student"
                    name="acesso"
                    type="radio"
                    id="student"
                    className="tipo p-3"
                  />
                  <button id="search">search</button>
                </Form>

                {/* mobile */}
                <Form className="d-flex flex-column align-items-center d-block d-lg-none">
                  <Form.Check
                    checked
                    inline
                    label=" i’m a teacher"
                    name="acesso"
                    type="radio"
                    id="teacher"
                    className="tipo"
                  />
                  <Form.Check
                    inline
                    label=" i’m a student"
                    name="acesso"
                    type="radio"
                    id="student"
                    className="tipo"
                  />
                  <button id="search" className="mx-auto d-block mt-4">
                    search
                  </button>
                </Form>
              </div>
            </Col>
            <Col lg={1}></Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Main;
