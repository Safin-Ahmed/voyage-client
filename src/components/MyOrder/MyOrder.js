import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './MyOrder.css';
const MyOrder = ({ order, orders, setOrders }) => {
    console.log(order);
    const { serviceTitle, price, orderId, status } = order;
    const remainingOrder = orders.filter(ord => ord.orderId !== orderId);
    const handleDelete = () => {
        const confirmation = window.confirm('Are You Sure You Want To Delete This Order?');
        const url = `https://agile-ravine-60330.herokuapp.com/orders?id=${orderId}`;
        if (confirmation) {
            axios.delete(url)
                .then(res => {
                    if (res.data.deletedCount === 1) {
                        alert('Deleted Successfully');
                        setOrders(remainingOrder);
                    }
                })
        }
    }
    const handleCancel = (orderStatus) => {
        const message = orderStatus;
        const url = `https://agile-ravine-60330.herokuapp.com/orders?id=${orderId}&&msg=${message}`;
        const confirmation = window.confirm('Are you sure you want to cancel the order?');
        if (confirmation) {
            axios.put(url)
                .then(res => {
                    console.log(res);
                    if (res.data.modifiedCount) {
                        alert('Order Cancelled');
                        fetch('https://agile-ravine-60330.herokuapp.com/orders')
                            .then(res => res.json())
                            .then(data => {
                                setOrders(data);
                            });
                    }

                })
        }
    }
    return (
        <tr>
            <td className="primary-color fw-bold" data-label="Product ID">#{orderId}</td>
            <td data-label="Product Name">{serviceTitle}</td>
            <td data-label="Product Price">${price}</td>
            {
                status === "Pending" ? <td className="status" data-label="Status"><p className="primary-bg text-white">{status}</p></td> : status === "Cancelled" ? <td className="status" data-label="Status"><p className="bg-danger text-white">{status}</p></td> : <td className="status" data-label="Status"><p className="bg-success text-white">{status}</p></td>
            }
            <td data-label="Action"><button onClick={() => handleCancel('Cancelled')} className="btn primary-bg text-white cancel-btn me-3">Cancel</button><button onClick={handleDelete} className="btn btn-danger text-white cancel-btn">Delete</button></td>
        </tr>
    );
};

export default MyOrder;