import React, { useEffect, useState } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './MyOrder.css';
const MyOrder = ({ order }) => {
    console.log(order);
    const { serviceTitle, price, orderId, status } = order;
    return (
        <tr>
            <td className="primary-color fw-bold" data-label="Product ID">#{orderId}</td>
            <td data-label="Product Name">{serviceTitle}</td>
            <td data-label="Product Price">${price}</td>
            {
                status === "Pending" ? <td className="status" data-label="Status"><p className="primary-bg text-white">{status}</p></td> : <td className="status" data-label="Status">{status}<p className="bg-success text-white">{status}</p></td>
            }
            <td data-label="Action"><button className="btn primary-bg text-white cancel-btn">X</button></td>
        </tr>
    );
};

export default MyOrder;