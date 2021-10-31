import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import MyOrder from '../../components/MyOrder/MyOrder';
import useAuth from '../../hooks/useAuth';
import './MyOrders.css';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user, isLoading, setIsLoading } = useAuth();
    useEffect(() => {
        const url = `http://localhost:5000/myOrders?user=${user?.email}`
        setIsLoading(true);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                setIsLoading(false);
            });
    }, [user])
    if (isLoading) {
        return (
            <Container>
                <Row className="spinner-container justify-content-center align-items-center">
                    <Spinner animation="grow" variant="danger" />
                </Row>
            </Container>
        )
    }
    return (
        <div className="my-orders-section">
            <Container>
                <h2 className="text-center mb-5">My Orders</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <MyOrder key={order._id} order={order}></MyOrder>)
                        }
                    </tbody>
                </table>

            </Container>
        </div>
    );
};

export default MyOrders;