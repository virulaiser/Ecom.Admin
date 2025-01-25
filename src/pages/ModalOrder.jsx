import React from "react";

import Modal from "react-bootstrap/Modal";

function ModalOrder({ handleClose, show, cart }) {
  return (
    cart && (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="">Products</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Unity price</th>
                </tr>
              </thead>
              <tbody>
                {cart.length > 0 &&
                  cart.map((product, id) => (
                    <tr key={id}>
                      <td className="product-text">{product.name}</td>
                      <td>{product.quantity}</td>
                      <td>{product.price}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </Modal.Body>
        </Modal>
      </>
    )
  );
}

export default ModalOrder;
