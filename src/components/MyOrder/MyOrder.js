import React, { useEffect, useState } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './MyOrder.css';
const MyOrder = ({ order }) => {
    console.log(order);
    const { serviceTitle, price, rating, imgUrl, description } = order;
    return (
        <Row className="justify-content-between">
            <Col>
                <div className="package-img">
                    <img src={imgUrl} alt="" />
                </div>
            </Col>
            <Col>
                <div className="package-info">
                    <h5>Product: {serviceTitle} {rating}*</h5>
                    <h5>Price: ${price}</h5>
                    <p>{description}</p>
                </div>
            </Col>
            <Col>
                <Button variant="danger">X</Button>
            </Col>
        </Row>
    );
};

export default MyOrder;