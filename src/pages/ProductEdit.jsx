import axios from "axios";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

function ProductEdit() {
  const [id, setId] = useState(null);
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);
  const [description, setDescription] = useState(null);
  const [category, setCategory] = useState(null);
  const [top, setTop] = useState(null);
  const [stock, setStock] = useState(null);
  const [slug, setSlug] = useState(null);
  const [image, setImage] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios({
        method: "get",
        url: `${import.meta.env.VITE_API_URL}/products/admin/${params.product}`,
      });
      setId(response.data._id);
      setName(response.data.name);
      setPrice(response.data.price);
      setDescription(response.data.description);
      setCategory(response.data.category);
      setTop(response.data.top);
      setStock(response.data.stock);
      setSlug(response.data.slug);
      setImage(response.data.image);
    };
    getProduct();
  }, []);

  const sendInfo = {
    id,
    name,
    price,
    description,
    category,
    top,
    stock,
    image,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios({
      method: "patch",
      url: `${import.meta.env.VITE_API_URL}/products/${params.product}`,
      data: sendInfo,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    navigate(`/products`);
  };

  const modifyPicture = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    slug && (
      <div className="p-4">
        <h2 className="fw-bold m-0 mb-3">Edit product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              aria-describedby="emailHelp"
              value={name}
              onChange={(e) =>
                setName(e.target.value !== name ? e.target.value : name)
              }
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price:
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
              value={price}
              onChange={(e) =>
                setPrice(e.target.value !== price ? e.target.value : price)
              }
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description:
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={description}
              onChange={(e) =>
                setDescription(
                  e.target.value !== description ? e.target.value : description
                )
              }
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="slug" className="form-label">
              Slug
            </label>
            <input
              type="text"
              className="form-control"
              id="slug"
              name="slug"
              value={slug}
              onChange={(e) =>
                setSlug(e.target.value !== slug ? e.target.value : slug)
              }
              required
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
              <option defaultValue={top}>It's a top product?</option>
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
              <option defaultValue={category}>Choose the category</option>
              <option value="Cafe">Cafe</option>
              <option value="Bakery">Bakery</option>
              <option value="Coffee beans">Coffee beans</option>
              <option value="Cakes">Cakes</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="stock" className="form-label">
              Stock:
            </label>
            <input
              type="number"
              className="form-control"
              id="stock"
              name="stock"
              value={stock}
              onChange={(e) =>
                setStock(e.target.value !== stock ? e.target.value : stock)
              }
              required
            />
          </div>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Change the image</Form.Label>
            <Form.Control
              type="file"
              onChange={modifyPicture}
              accept="imgs/product/*"
            />
          </Form.Group>

          <button type="submit" className="main-button">
            Submit
          </button>
        </form>
      </div>
    )
  );
}

export default ProductEdit;
