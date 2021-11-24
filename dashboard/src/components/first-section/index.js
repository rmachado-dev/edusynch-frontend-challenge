import React from "react";
import "./first-section.css";
import imagem from "../images/img-first.png";

const FirstSection = () => {
  return (
    <>
      <section id="first-section" className="d-block d-sm-none">
        <div className="bg-white rounded mx-3">
          
          <div id="shape-32" className="float-end"></div>
          <div id="shape-64" className="float-end"></div>
          <div className="my-5 py-5 px-4">
            <h1>
              Hello <strong>Student</strong>
              <span>.</span>
            </h1>
            <p>
              Whether you are a student trying to find your ideal private
              language teachers/tutors
            </p>
          </div>
        </div>
      </section>

      <section
        id="first-section"
        className="bg-white rounded d-none d-sm-block my-4 mx-3 pb-4 pt-5"
      >
        <div className="d-flex align-items-start">
          <div id="shape-63" className="float-start"></div>
          <div id="shape-126" className="float-start"></div>

          <div className="align-self-start me-5">
            <h1>
              Hello <strong>Student</strong>
              <span>.</span>
            </h1>
            <p>
              Whether you are a student trying to find your ideal private
              language teachers/tutors
            </p>
          </div>

          <div>
            <img src={imagem} className="img-fluid" alt="imagem"/>
          </div>
        </div>
      </section>
    </>
  );
};

export default FirstSection;
