import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router";

function FormDelete({
  show,
  handleClose,
  setShow,
  id,
  products,
  image,
  setProducts,
}) {
  const [showModal, setShowModal] = useState(false);

  async function handleDelete(productId) {
    await axios({
      method: "delete",
      url: `${import.meta.env.VITE_API_URL}/products/${productId}`,
      data: { image },
    });
    setProducts(products.filter((product) => product._id !== productId));
    handleClose();
  }

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Delete product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure?</p>
      </Modal.Body>
      <Modal.Footer>
        <button className="main-button close-button" onClick={handleClose}>
          Close
        </button>
        <button className="main-button" onClick={() => handleDelete(id)}>
          Understood
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default FormDelete;
