import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Packages.css';
const Packages = () => {
    return (
        <div className="packages-section">
            <Container>
                <h2 className="text-center">Our Tour Packages</h2>
                <div className="package-cards">
                    <Row xs={1} md={2} className="g-4">
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Packages;