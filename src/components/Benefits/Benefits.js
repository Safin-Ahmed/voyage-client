import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Benefits.css';
import { BiBusSchool, BiCalendar, BiFlag, BiNavigation } from "react-icons/bi";
const Benefits = () => {
    return (
        <div className="benefits-section">
            <Container>
                <h2 class="text-center mb-5">Why Choose Us?</h2>
                <Row>
                    <Col xs={12} lg={3}>
                        <div className="icon-box mb-4 mb-sm-0">
                            <BiCalendar />
                            <h2>Diverse Destinations</h2>
                            <p>Unlike the other travel agencies we don't arrange trip to the same destinations over and over again. We have diverse collection of trips all around the world</p>
                        </div>
                    </Col>

                    <Col xs={12} lg={3}>
                        <div className="icon-box my-4 my-sm-0">
                            <BiFlag />
                            <h2>Fast Booking</h2>
                            <p>With our online booking system, it is the fastest process of booking in the world right now.You can book your desired package in just a minute</p>
                        </div>
                    </Col>

                    <Col xs={12} lg={3}>
                        <div className="icon-box my-4 my-sm-0">
                            <BiBusSchool />
                            <h2>Adventure Time</h2>
                            <p>We want you to experience an immersive adventure with us all around the world. Our transport system is very enjoyable and high quality</p>
                        </div>
                    </Col>


                    <Col xs={12} lg={3}>
                        <div className="icon-box my-4 my-sm-0">
                            <BiNavigation />
                            <h2>Guided Tours</h2>
                            <p>All the tours are guided by an expert tour mentor which will provide you with all the things necessary for a successfull and enjoyable tour.</p>
                        </div>
                    </Col>



                </Row>
            </Container>
        </div>
    );
};

export default Benefits;