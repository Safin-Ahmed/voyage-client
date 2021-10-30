import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HeaderNavbar.css';
import logo from '../../images/logo.png';
import useAuth from '../../hooks/useAuth';
const HeaderNavbar = () => {
    const { user, isLoading, logOut } = useAuth();
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
                            {user && <Nav.Link as={Link} to="/contact">My Orders</Nav.Link>}
                            {user && <Nav.Link as={Link} to="/contact">Manage All Orders</Nav.Link>}
                            {user && <Nav.Link as={Link} to="/addPackage">Add a Package</Nav.Link>}

                        </Nav>
                        <Nav className="align-items-center">
                            {user?.displayName && <Navbar.Text className="me-2 text-center">Signed In as : {user.displayName}</Navbar.Text>}
                            <div className="user-info d-flex">
                                {user?.photoURL && <img className="ms-4 me-4" width={50} height="auto" style={{ borderRadius: "50%" }} src={user.photoURL} alt="" />}
                                {user?.email || user?.displayName ?
                                    <Button onClick={logOut} variant="success me-sm-4">Logout</Button>
                                    :
                                    <Button as={Link} to="/login" variant="success">Login</Button>
                                }
                            </div>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default HeaderNavbar;