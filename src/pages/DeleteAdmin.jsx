import Modal from "react-bootstrap/Modal";
import axios from "axios";

function DeleteAdmin({ show, handleClose, setShow, id, admins, setAdmins }) {
  const adminDelete = async (adminId) => {
    await axios({
      method: "DELETE",
      url: `${import.meta.env.VITE_API_URL}/admin/${adminId}`,
    });
    setAdmins(admins.filter((user) => user._id !== adminId));
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
        <button className="main-button" onClick={() => adminDelete(id)}>
          Understood
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteAdmin;
