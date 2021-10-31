import React from 'react';
import { Button, Col, Container, Nav, Row } from 'react-bootstrap';
import './Footer.css';
import footerLogo from '../../images/footer-logo.png';
import { FiClock, FiNavigation2, FiPhone } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <Container>
                    <Row className="justify-content-center align-items-center">
                        <Col xs={12} sm={6}>
                            <div className="promotional-text">
                                <p className="text-white text-center mb-0 px-5 px-sm-0">It’s Time For a New Adventure! Don’t Wait Any Longer. Contact us!
                                </p>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} className="text-center">
                            <Button className="book-btn mt-4 mt-sm-0">Book Destination</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="main-footer ps-4 ps-sm-0">
                <Container>
                    <Row>

                        <Col xs={6} lg={3}>
                            <p>Sitemap</p>
                            <Nav className="m-auto d-block">
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/tours">Tours</Nav.Link>
                                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                                <Nav.Link as={Link} to="/contact">My Orders</Nav.Link>
                                <Nav.Link as={Link} to="/contact">Manage All Orders</Nav.Link>
                                <Nav.Link as={Link} to="/contact">Add a Service</Nav.Link>

                            </Nav>
                        </Col>
                        <Col xs={6} lg={3}>
                            <p>Policies</p>
                            <Nav className="m-auto d-block">
                                <Nav.Link as={Link} to="/">Terms of Condition</Nav.Link>
                                <Nav.Link as={Link} to="/tours">Privacy Policy</Nav.Link>
                                <Nav.Link as={Link} to="/contact">Order Tracking</Nav.Link>
                                <Nav.Link as={Link} to="/contact">Booking Policy</Nav.Link>

                            </Nav>
                        </Col>
                        <Col className="d-none d-sm-block" xs={6} lg={3}>
                            <p>Travel Gallery</p>
                            <Row className="gx-2 gy-2">
                                <Col xs={6} lg={4}>
                                    <img className="img-fluid" src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/brazil-image-gallery-9.jpg" alt="" />
                                </Col>

                                <Col xs={6} lg={4}>
                                    <img className="img-fluid" src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/brazil-image-gallery-9.jpg" alt="" />
                                </Col>
                                <Col xs={6} lg={4}>
                                    <img className="img-fluid" src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/brazil-image-gallery-9.jpg" alt="" />
                                </Col>
                                <Col xs={6} lg={4}>
                                    <img className="img-fluid" src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/brazil-image-gallery-9.jpg" alt="" />
                                </Col>
                                <Col xs={6} lg={4}>
                                    <img className="img-fluid" src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/brazil-image-gallery-9.jpg" alt="" />
                                </Col>
                                <Col xs={6} lg={4}>
                                    <img className="img-fluid" src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/brazil-image-gallery-9.jpg" alt="" />
                                </Col>

                            </Row>
                        </Col>
                        <Col xs={12} lg={3}>
                            <div className="last-column mt-5 mt-sm-0">
                                <img className="footer-logo" src={footerLogo}></img>
                                <p>Our mission is to provide the best possible experience for travelling. We are continiously working hard to ensure that quality.</p>
                                <Nav className="social-links mobile-social">
                                    <li><FiPhone />1-677-124-44227</li>
                                    <li><FiNavigation2 />184 Main Street West Victoria 8007</li>
                                    <li><FiClock />Mon - Sat 8.00 - 18.00 Sunday CLOSED</li>
                                </Nav>
                            </div>
                        </Col>
                    </Row>
                    <div className="copyright-footer">
                        <Row className="justify-content-between">
                            <Col lg={6}>
                                <p className="text-center text-sm-start">© 2021 Safin Ahmed, All Rights Reserved
                                </p>
                            </Col>

                            <Col lg={6}>
                                <Nav className="social-links justify-content-center justify-content-sm-end">
                                    <Nav.Link href="#"><FaTwitter /></Nav.Link>
                                    <Nav.Link href="#"><FaFacebookF /></Nav.Link>
                                    <Nav.Link href="#"><FaInstagram /></Nav.Link>
                                    <Nav.Link href="#"><FaLinkedinIn /></Nav.Link>
                                </Nav>
                            </Col>

                        </Row>
                    </div>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;