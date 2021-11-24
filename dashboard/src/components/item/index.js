import React from "react";
import { Col, Row } from "react-bootstrap";
import "./item.css";

const Item = ({curso}) => {
  return (
    <Col xs={12} sm={6} lg={4} id="item" key={curso.id}>
      <div className="bg-white p-3 mx-3 rounded mb-4">
        <Row>
          <Col>
            <img src={curso.imagem} className="img-fluid w-100 mb-2" alt="imagem"/>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <img alt='avaliação' src={curso.star_active} className="img-fluid me-2" />
            <img alt='avaliação' src={curso.star_active} className="img-fluid me-2" />
            <img alt='avaliação' src={curso.star_active} className="img-fluid me-2" />
            <img alt='avaliação' src={curso.star_disable} className="img-fluid me-2" />
            <img alt='avaliação' src={curso.star_disable} className="img-fluid me-2" />
          </Col>
          <Col className="text-end">
            <div className="badge">{curso.lessons} LESSONS</div>
          </Col>
        </Row>
        <Row className="mt-4 mb-3">
          <Col>
            <h1>{curso.titulo}</h1>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default Item;
