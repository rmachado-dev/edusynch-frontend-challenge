import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import imagemobile from '../images/image-home-mobile.png';
import "./main.css";

const Main = () => {
  return (
    <>
      <section id="main">
        <Container>
          <Row className="d-flex justify-content-between h-100 align-items-center py-5 px-4">
            <Col sm={4} lg={5}>
              <div id="img-1" className="d-none d-lg-block"></div>
              <div id="img-2" className="d-none d-lg-block"></div>
              <div id="img-3" className="d-none d-lg-block"></div>
              <div id="img-4" className="d-none d-lg-block"></div>
              <div id="img-5" className="d-none d-lg-block"></div>
            </Col>
            <Col xs={12} lg={6}>
              <div className="pe-lg-5 mt-lg-5 mb-5 mt-2">
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

              <div className="mt-4">
                {/* desktop */}
                <Form className="d-none d-lg-block">
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
                  <button id="search">search</button>
                </Form>

                {/* mobile */}
                <Form className="d-block d-lg-none">
                  <Row>
                    <Col xs={6}>
                      <Form.Check
                        checked
                        inline
                        label=" i’m a teacher"
                        name="acesso"
                        type="radio"
                        id="teacher"
                        className="tipo"
                      />
                    </Col>
                    <Col xs={6}>
                      <Form.Check
                        inline
                        label=" i’m a student"
                        name="acesso"
                        type="radio"
                        id="student"
                        className="tipo"
                      />
                    </Col>
                  </Row>
                  <button id="search" className="mx-auto d-block mt-4">
                    search
                  </button>
                </Form>
              </div>
            </Col>
          </Row>
			 <Row className="d-block d-lg-none">
				 <Col xs={12}>
					 <img src={imagemobile} className="img-fluid mx-auto d-block" />
				 </Col>
			 </Row>
        </Container>
      </section>
    </>
  );
};

export default Main;
