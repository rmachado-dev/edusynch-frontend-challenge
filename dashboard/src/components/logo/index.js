import React from "react";
import {} from "react-bootstrap";
import logo from "../images/logo.png";
import detalhe from "../images/bg-logo.png";
import './logo.css';

const Logomobile = () => {
  return (
    <>
      <div id='detalhes' className='d-none d-lg-block'></div>
      <img src={logo} className="img-fluid" />
    </>
  );
};

export default Logomobile;
