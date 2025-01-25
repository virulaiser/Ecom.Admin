import axios from "axios";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

function NewProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [top, setTop] = useState("");
  const [slug, setSlug] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    sendInfo();
    navigate("/products");
  };
  const handleFotoChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  //mandar nuevo producto a bd
  const sendInfo = async () => {
    const sendInfo = {
      name,
      price,
      description,
      category,
      top,
      slug,
      image,
      stock,
    };

    const response = await axios({
      method: "post",
      url: `${import.meta.env.VITE_API_URL}/products`,
      data: sendInfo,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response.data);
  };

  return (
    <section id="newUser" className="p-4">
      <h2 className="fw-bold m-0 mb-3">New product</h2>

      <form method="post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="firstname"
            className="form-control"
            autoComplete="off"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price:
          </label>
          <input
            type="number"
            name="price"
            id="price"
            className="form-control"
            autoComplete="off"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description:
          </label>
          <input
            type="text"
            name="description"
            id="description"
            className="form-control"
            autoComplete="off"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="stock" className="form-label">
            Stock:
          </label>
          <input
            type="number"
            name="stock"
            id="stock"
            className="form-control"
            value={stock}
            onChange={(event) => setStock(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="top" className="form-label">
            Top product
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(event) => setTop(event.target.value)}
          >
            <option selected>It's a top product?</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category:
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(event) => setCategory(event.target.value)}
          >
            <option selected>Choose the category</option>
            <option value="Cafe">Cafe</option>
            <option value="Bakery">Bakery</option>
            <option value="Coffee beans">Coffee beans</option>
            <option value="Cakes">Cakes</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="slug" className="form-label">
            Slug
          </label>
          <input
            type="text"
            name="slug"
            id="slug"
            className="form-control"
            value={slug}
            onChange={(event) => setSlug(event.target.value)}
          />
        </div>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Upload an image</Form.Label>
          <Form.Control
            type="file"
            onChange={handleFotoChange}
            accept="imgs/product/*"
            required
          />
        </Form.Group>
        <button className="main-button" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

export default NewProduct;
