import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import usePackage from '../../hooks/usePackage';
import './Order.css';
const Order = () => {
    const { id } = useParams();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => console.log(data);
    const { singlePackage } = usePackage(id);
    const { serviceTitle, price, description, imgUrl } = singlePackage;
    console.log(singlePackage);
    return (
        <div className="order-section">
            <Container>
                <h2 className="mb-3">Checkout</h2>
                <Row>
                    <Col lg={8}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className="shadow mb-3" placeholder="User Name" {...register("username")} />
                            <input className="shadow mb-3" placeholder="Email Address" {...register("email")} />
                            <input className="shadow mb-3" type="number" placeholder="Mobile Number" {...register("mobile", { required: true })} />
                            <input className="shadow mb-3" placeholder="Your Address" {...register("address", { required: true })} />
                            <textarea className="shadow mb-3" placeholder="Extra Note" {...register("note")} />

                            <input type="submit" />
                        </form>
                    </Col>
                    <Col lg={4}>
                        <div className="checkout-card text-center shadow shadow-lg">
                            <img src={imgUrl} alt="" />
                            <h5 className="mt-3">{serviceTitle}</h5>
                            <h6>Product ID : {id}</h6>
                            <p className="price">Price: <span className="price-number">${price}</span></p>
                            <p className="desc">{description}</p>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Order;