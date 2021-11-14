import React from 'react';
import { Col, Row } from 'react-bootstrap';
import icone from '../images/pagination.png';

const Paginacao = () =>{
    return(
        <Row className='text-center d-none d-sm-block'>
            <Col >
                <img src={icone} className='img-fluid me-2'/>
                <img src={icone} className='img-fluid me-2'/>
                <img src={icone} className='img-fluid me-2'/>
            </Col>
        </Row>
    )
}

export default Paginacao;