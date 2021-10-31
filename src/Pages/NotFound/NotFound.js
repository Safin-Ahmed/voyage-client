import React from 'react';
import { Container } from 'react-bootstrap';
import notFound from '../../images/notfound.jpg';
const NotFound = () => {
    return (
        <div>
            <Container>
                <img style={{ maxWidth: '100%' }} src={notFound} alt="" />
            </Container>
        </div>
    );
};

export default NotFound;