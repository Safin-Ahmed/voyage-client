import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import AllOrder from '../../components/AllOrder/AllOrder';
import useAuth from '../../hooks/useAuth';
import './ManageOrders.css';
const ManageOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const { isLoading, setIsLoading } = useAuth();
    useEffect(() => {
        setIsLoading(true)
        fetch('https://agile-ravine-60330.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                setAllOrders(data);
                setIsLoading(false);
            });
    }, [])
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
        <div className="all-orders-section">
            <Container>
                <h2 className="text-center mb-5">All Orders</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Order No.</th>
                            <th>Customer Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Package Name</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrders.map(order => <AllOrder key={order._id} order={order} orders={allOrders} setOrders={setAllOrders}></AllOrder>)
                        }
                    </tbody>
                </table>

            </Container>
        </div>
    );
};

export default ManageOrders;