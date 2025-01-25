import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";

function ModalDelete({ show, handleClose, setShow, id, users, setUsers }) {
  const userDelete = async (userId) => {
    await axios({
      method: "DELETE",
      url: `${import.meta.env.VITE_API_URL}/users/${userId}`,
    });
    setUsers(users.filter((user) => user._id !== userId));
    handleClose();
  };
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Delete user</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure?</p>
      </Modal.Body>
      <Modal.Footer>
        <button className="main-button close-button" onClick={handleClose}>
          Close
        </button>
        <button className="main-button" onClick={() => userDelete(id)}>
          Understood
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalDelete;
