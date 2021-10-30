import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import MyOrder from '../../components/MyOrder/MyOrder';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [orderPackage, setOrderPackage] = useState([]);
    const { user, isLoading } = useAuth();
    useEffect(() => {
        const url = `http://localhost:5000/myOrders?user=${user?.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user])
    useEffect(() => {
        const url = `http://localhost:5000/myOrders/order?id=${orders}`;
        fetch(url)
            .then()
    }, [orders])
    return (
        <div className="my-orders-section">
            <Container>
                {
                    orders.map(order => <MyOrder key={order._id} order={order}></MyOrder>)
                }
            </Container>
        </div>
    );
};

export default MyOrders;