import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import usePackages from '../../hooks/usePackages';
import Package from '../Package/Package';
import './Packages.css';
const Packages = () => {
    const { packages } = usePackages();
    return (
        <div className="packages-section">
            <Container>
                <h2 className="text-center mb-4">Our Tour Packages</h2>
                <div className="package-cards">
                    <Row xs={1} md={3} className="g-4">
                        {
                            packages.map(pkg => <Package key={pkg._id} package={pkg}></Package>)
                        }
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Packages;