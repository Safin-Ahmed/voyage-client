import React, { useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { BsFacebook, BsGoogle, BsLinkedin, BsTwitter } from 'react-icons/bs';
import useAuth from '../../hooks/useAuth';
import login from '../../images/login.jpg';
import './Login.css';

const Login = () => {
    const [isNew, setIsNew] = useState(false);
    const [error, setError] = useState('');
    const { user, signInWithGoogle } = useAuth();
    const handleCheckBox = e => {
        setIsNew(e.target.checked);
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                console.log(user);
            })
    }
    return (
        <div className="login-section py-5">
            <Container>
                <Row>
                    <Col lg={6}>
                        <h1 className="text-center primary-color">{isNew ? "Create Your Account" : "Login To Your Account"}</h1>
                        <div className="social-login text-center mt-4">
                            <Button onClick={handleGoogleSignIn} className="mx-2 py-1 px-2 primary-bg"><BsGoogle></BsGoogle></Button>
                            <Button className="mx-2 py-1 px-2 primary-bg"><BsFacebook></BsFacebook></Button>
                            <Button className="mx-2 py-1 px-2 primary-bg"><BsTwitter></BsTwitter></Button>
                            <Button className="mx-2 py-1 px-2 primary-bg"><BsLinkedin></BsLinkedin></Button>
                        </div>
                        <p className="text-center mt-4">or use your email for {isNew ? "registration" : "login"}</p>
                        <Form>
                            {isNew ? <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Control type="text" placeholder="Enter Your Name" />
                            </Form.Group> : ''}

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check onChange={handleCheckBox} type="checkbox" label="Don't have an account?" />
                            </Form.Group>
                            <h6 className="text-danger fw-400 mb-4">{error}</h6>
                            {
                                isNew ? <Button variant="success" type="submit">
                                    Register</Button>
                                    :
                                    <Button variant="success" type="submit">
                                        Login
                                    </Button>
                            }
                        </Form>
                    </Col>
                    <Col lg={6}>
                        <img className="login-banner img-fluid" src={login} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;