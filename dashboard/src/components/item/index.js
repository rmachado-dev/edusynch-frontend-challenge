import React from "react";
import { Col, Row } from "react-bootstrap";
import thumbnail from "../images/thumbnail.png";
import star_active from "../images/star-active.png";
import star_disable from "../images/star-disable.png";
import "./item.css";

const Item = () => {
  return (
    <Col xs={12} sm={6} lg={4} id="item">
      <div className="bg-white p-3 mx-3 rounded mb-4">
        <Row>
          <Col>
            <img src={thumbnail} className="img-fluid w-100 mb-2" />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <img src={star_active} className="img-fluid me-2" />
            <img src={star_active} className="img-fluid me-2" />
            <img src={star_active} className="img-fluid me-2" />
            <img src={star_disable} className="img-fluid me-2" />
            <img src={star_disable} className="img-fluid me-2" />
          </Col>
          <Col className="text-end">
            <div className="badge">10 LESSONS</div>
          </Col>
        </Row>
        <Row className="mt-4 mb-3">
          <Col>
            <h1>Master English: Improve Your Speaking</h1>
          </Col>
        </Row>
      </div>
    </Col>

    // <Container id="item">
    //   <div className="bg-white p-2 mx-3 rounded mb-4">
    //     <Row>
    //         <Col>
    //         <img src={thumbnail} className='img-fluid w-100 mb-2' />
    //         </Col>
    //     </Row>
    //     <Row className='mb-3'>
    //       <Col>
    //         <img src={star_active} className='img-fluid me-2' />
    //         <img src={star_active} className='img-fluid me-2' />
    //         <img src={star_active} className='img-fluid me-2' />
    //         <img src={star_disable} className='img-fluid me-2' />
    //         <img src={star_disable} className='img-fluid me-2' />

    //       </Col>
    //       <Col className="text-end">
    //           <div className='badge'>10 LESSONS</div>
    //       </Col>
    //     </Row>
    //     <Row className="mt-4 mb-3">
    //       <Col>
    //         <h1>Master English: Improve Your Speaking</h1>
    //       </Col>
    //     </Row>
    //   </div>
    // </Container>
  );
};

export default Item;
