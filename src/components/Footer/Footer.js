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
                        <Col>
                            <div className="promotional-text">
                                <p className="text-white text-center mb-0">It’s Time For a New Adventure! Don’t Wait Any Longer. Contact us!
                                </p>
                            </div>
                        </Col>
                        <Col className="text-center">
                            <Button className="book-btn">Book Destination</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="main-footer">
                <Container>
                    <Row>

                        <Col lg={3}>
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
                        <Col lg={3}>
                            <p>Policies</p>
                            <Nav className="m-auto d-block">
                                <Nav.Link as={Link} to="/">Terms of Condition</Nav.Link>
                                <Nav.Link as={Link} to="/tours">Privacy Policy</Nav.Link>
                                <Nav.Link as={Link} to="/contact">Order Tracking</Nav.Link>
                                <Nav.Link as={Link} to="/contact">Booking Policy</Nav.Link>

                            </Nav>
                        </Col>
                        <Col lg={3}>
                            <p>Travel Gallery</p>
                            <Row className="gx-2 gy-2">
                                <Col lg={4}>
                                    <img className="img-fluid" src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/brazil-image-gallery-9.jpg" alt="" />
                                </Col>

                                <Col lg={4}>
                                    <img className="img-fluid" src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/brazil-image-gallery-9.jpg" alt="" />
                                </Col>
                                <Col lg={4}>
                                    <img className="img-fluid" src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/brazil-image-gallery-9.jpg" alt="" />
                                </Col>
                                <Col lg={4}>
                                    <img className="img-fluid" src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/brazil-image-gallery-9.jpg" alt="" />
                                </Col>
                                <Col lg={4}>
                                    <img className="img-fluid" src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/brazil-image-gallery-9.jpg" alt="" />
                                </Col>
                                <Col lg={4}>
                                    <img className="img-fluid" src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/brazil-image-gallery-9.jpg" alt="" />
                                </Col>

                            </Row>
                        </Col>
                        <Col lg={3}>
                            <div className="last-column">
                                <img className="footer-logo" src={footerLogo}></img>
                                <p>Our mission is to provide the best possible experience for travelling. We are continiously working hard to ensure that quality.</p>
                                <Nav className="social-links">
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
                                <p>© 2021 Safin Ahmed, All Rights Reserved
                                </p>
                            </Col>

                            <Col lg={6}>
                                <Nav className="social-links justify-content-end">
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