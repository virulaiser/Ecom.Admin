import { useEffect, useState } from "react";
import "./Users.css";
import axios from "axios";
import FormUp from "../components/FormUp";
import FormDelete from "../components/FormDelete";
import { AiFillDelete, AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdEdit } from "react-icons/md";

function Products() {
  const [products, setProducts] = useState(null);

  const [id, setId] = useState(null);
  const [image, setImage] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        method: "get",
        url: `${import.meta.env.VITE_API_URL}/products/filter/All`,
      });
      setProducts(response.data);
    };
    getProducts();
  }, []);

  return (
    products && (
      <section id="products">
        <div className="p-4 d-flex justify-content-between align-items-center">
          <h2 className="fw-bold m-0">Products</h2>
          <Link to={`newProduct`}>
            <button className="main-button">
              <AiOutlinePlusCircle className="me-1" />
              New product
            </button>
          </Link>
        </div>
        <div className="row mx-4 chart">
          <div className="table-responsive">
            <table className="table text-center">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Description</th>
                  <th scope="col">Category</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Top</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((item, id) => (
                  <tr key={id}>
                    <td className="align-middle">
                      <img
                        className="img-fluid img-thumbnail p-0"
                        src={`${
                          import.meta.env.VITE_SUPABASE_URL
                        }/storage/v1/object/public/products/${
                          item.image
                        }?//t=2023-09-19T13%3A20%3A01.474Z`}
                      />
                    </td>
                    <td className="col align-middle">{item.name}</td>
                    <td className="col align-middle">{item.price}</td>
                    <td className="col align-middle td-products">
                      {item.description.substring(0, 20)}...
                    </td>
                    <td className="col align-middle">{item.category}</td>
                    <td className="col align-middle">{item.stock}</td>
                    <td className="col align-middle">
                      {item.top === true ? "SI" : "NO"}
                    </td>
                    <td className="col align-middle">
                      <Link to={`/products/${item._id}`}>
                        <MdEdit className="me-4 action-icon" />
                      </Link>
                      <AiFillDelete
                        className="action-icon delete-icon"
                        onClick={() => {
                          handleShow();
                          setId(item._id);
                          setImage(item.image);
                        }}
                      />
                      {/* <FormDelete
                        onClick={openModalDel}
                        isOpen={modalIsOpenDel}
                        onClose={closeModalDel}
                        item={item}
                      /> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <FormDelete
            setShow={setShow}
            show={show}
            handleClose={handleClose}
            setProducts={setProducts}
            products={products}
            id={id}
            image={image}
          />
        </div>
      </section>
    )
  );
}

export default Products;
