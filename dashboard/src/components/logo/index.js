import React from "react";
import {} from "react-bootstrap";
import logo from "../images/logo.png";
import './logo.css';

const Logomobile = () => {
  return (
    <>
      <div id='detalhes' className='d-none d-lg-block'></div>
      <img src={logo} className="img-fluid" alt="logomarca"/>
    </>
  );
};

export default Logomobile;
