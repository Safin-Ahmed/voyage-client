import React from "react";
import "./ServiceForm.css";
import { useForm } from "react-hook-form";
import { Container } from "react-bootstrap";
import axios from "axios";
const ServiceForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const { serviceTitle, price, rating, imgUrl, description } = data;
    const doc = {
      serviceTitle,
      price,
      rating,
      imgUrl,
      description,
    };
    axios
      .post("https://voyage-server.up.railway.app/packages", doc)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Package Added Successfully");
          reset();
        }
      });
  };
  return (
    <div className="add-service-section">
      <Container>
        <h2 className="text-center mb-4">Add a Service</h2>
        <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="Service Name" {...register("serviceTitle")} />
          <input type="number" placeholder="Price" {...register("price")} />
          <input type="number" placeholder="Rating" {...register("rating")} />
          <input placeholder="Image Url" {...register("imgUrl")} />
          <textarea placeholder="Description" {...register("description")} />
          <input type="submit" />
        </form>
      </Container>
    </div>
  );
};

export default ServiceForm;
