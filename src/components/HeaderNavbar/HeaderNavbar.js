import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HeaderNavbar.css';
import logo from '../../images/logo.png';
const HeaderNavbar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home"><img width="85" src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/tours">Tours</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                            <Nav.Link as={Link} to="/contact">My Orders</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Manage All Orders</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Add a Service</Nav.Link>

                        </Nav>
                        <Nav className="align-items-center">
                            <h6 className="m-0">User Name</h6>
                            <Nav.Link as={Link} to="/contact">Profile Pic</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Login</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default HeaderNavbar;