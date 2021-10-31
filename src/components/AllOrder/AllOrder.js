import axios from 'axios';
import React from 'react';

const AllOrder = ({ order, orders, setOrders }) => {
    const { serviceTitle, username, email, address, mobile, orderId, status } = order;
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
    const handleAccept = (orderStatus) => {
        const message = orderStatus;
        const url = `https://agile-ravine-60330.herokuapp.com/orders?id=${orderId}&&msg=${message}`;
        const confirmation = window.confirm('Are you sure you want to accept the order?');
        if (confirmation) {
            axios.put(url)
                .then(res => {
                    console.log(res);
                    if (res.data.modifiedCount) {
                        alert('Order Accepted');
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
            <td className="primary-color fw-bold" data-label="Order No.">#{orderId}</td>
            <td data-label="Customer Name">{username}</td>
            <td data-label="Email">{email}</td>
            <td data-label="Mobile">{mobile}</td>
            <td data-label="Package Name">{serviceTitle}</td>
            {
                status === "Pending" ? <td className="status" data-label="Status"><p className="primary-bg text-white">{status}</p></td> : status === "Cancelled" ? <td className="status" data-label="Status"><p className="bg-danger text-white">{status}</p></td> : <td className="status" data-label="Status"><p className="bg-success text-white">{status}</p></td>
            }
            <td data-label="Action"><button onClick={handleDelete} className="btn btn-danger text-white cancel-btn me-3">Decline</button><button onClick={() => handleAccept('Approved')} className="btn btn-success text-white cancel-btn">Accept</button></td>
        </tr>
    );
};

export default AllOrder;