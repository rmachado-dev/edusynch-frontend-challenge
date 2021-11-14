import Dropdown from "react-bootstrap/Dropdown";
import React from "react";
import avatar from "../images/avatar(1).png";
import status from "../images/avatar(2).png";
import "./avatar.css";
import seta from "../images/short_right.png";

const Avatarmobile = () => {
  return (
    <>
      <button className="botao me-5 d-none d-lg-block">
        Change to teacher mode
      </button>

      <div id="avatar">
        <Dropdown>
          <Dropdown.Toggle className="botao-mobile d-block d-sm-none align-self-center d-flex">
            <i class="fas fa-chevron-down align-self-center me-2 d-block d-lg-none"></i>
            <img src={avatar} className="img-fluid" />
            <img src={status} className="align-self-start" />
          </Dropdown.Toggle>

          <Dropdown.Menu id="menu">
            <Dropdown.Item
              href="#"
              className="bg-white py-4 d-flex justify-content-between"
            >
              Change to teacher mode
              <img src={seta} className="img-fluid pe-4" />
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="d-none d-sm-block d-flex align-self-center">
        <img src={avatar} className="img-fluid" />
        <img src={status} className="align-self-start mb-4" />
      </div>
    </>
  );
};

export default Avatarmobile;
