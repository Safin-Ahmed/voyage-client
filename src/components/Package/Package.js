import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { VscStarFull } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import './Package.css';
const Package = (props) => {
    const { serviceTitle, price, rating, imgUrl, description, _id } = props.package;
    return (
        <Col>
            <Card className="single-card">
                <Card.Img variant="top" src={imgUrl} />
                <Card.Body>
                    <div className="card-top d-flex justify-content-between">
                        <div className="left">
                            <Card.Title>{serviceTitle}</Card.Title>
                        </div>
                        <div className="right">
                            <h4>$ {price}</h4>
                        </div>
                    </div>
                    <div className="rating d-flex align-items-center">
                        <VscStarFull />
                        <p className="m-0 ms-1">{rating}</p>
                    </div>
                    <Card.Text>
                        {description.slice(0, 200)}
                    </Card.Text>
                    <Button as={Link} to={`/order/${_id}`} style={{ background: '#ef2853', border: '1px solid #ef2853' }}>Book Now</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Package;