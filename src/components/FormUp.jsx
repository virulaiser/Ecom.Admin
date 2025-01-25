import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { MdEdit } from "react-icons/md";
import { useEffect } from "react";
import axios from "axios";

function FormUp(item) {
  const [dataUser, setDataUser] = useState(item);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setDataUser(item);
  }, [dataUser]);

  const [id] = useState(dataUser.item._id);
  const [name, setName] = useState(dataUser.item.name);
  const [price, setPrice] = useState(dataUser.item.price);
  const [description, setDescription] = useState(dataUser.item.description);
  const [category, setCategory] = useState(dataUser.item.category);
  const [top, setTop] = useState(dataUser.item.top);
  const [stock, setStock] = useState(dataUser.item.stock);
  const [slug, setSlug] = useState(dataUser.item.stock);
  const [image, setImage] = useState(dataUser.item.image);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };

  const modifyPiture = (e) => {
    setImage(e.target.files[0]);
  };
  const handledInfo = async () => {
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

    const response = await axios({
      method: "patch",
      url: `${import.meta.env.VITE_API_URL}/products/${id}`,
      data: sendInfo,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  useEffect(() => {
    handledInfo;
  }, []);

  return (
    dataUser && (
      <div>
        <MdEdit className="action-icon" onClick={handleShow} />

        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>UPDATE FORM</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="name">
                <Form.Label>Name :</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value !== name ? e.target.value : name)
                  }
                  required
                />
              </Form.Group>

              <Form.Group controlId="price">
                <Form.Label>Price :</Form.Label>
                <Form.Control
                  type="number"
                  value={price}
                  onChange={(e) =>
                    setPrice(e.target.value !== price ? e.target.value : price)
                  }
                  required
                />
              </Form.Group>
              <Form.Group controlId="description">
                <Form.Label>Description :</Form.Label>
                <Form.Control
                  type="text"
                  value={description}
                  onChange={(e) =>
                    setDescription(
                      e.target.value !== description
                        ? e.target.value
                        : description
                    )
                  }
                  required
                />
              </Form.Group>
              <Form.Group controlId="description">
                <Form.Label>Slug :</Form.Label>
                <Form.Control
                  type="text"
                  value={slug}
                  onChange={(e) =>
                    setSlug(e.target.value !== slug ? e.target.value : slug)
                  }
                  required
                />
              </Form.Group>

              <Form.Group controlId="top">
                <Form.Label>Top :</Form.Label>
                <Form.Control
                  type=""
                  value={top}
                  onChange={(e) =>
                    setTop(e.target.value !== top ? e.target.value : top)
                  }
                  required
                />
              </Form.Group>
              <Form.Group controlId="category">
                <Form.Label>Category :</Form.Label>
                <Form.Control
                  type="text"
                  value={category}
                  onChange={(e) =>
                    setCategory(
                      e.target.value !== category ? e.target.value : category
                    )
                  }
                  required
                />
              </Form.Group>
              <Form.Group controlId="stock ">
                <Form.Label>Stock :</Form.Label>
                <Form.Control
                  type="number"
                  value={stock}
                  onChange={(e) =>
                    setStock(e.target.value !== stock ? e.target.value : stock)
                  }
                  required
                />
              </Form.Group>

              <Form.Group controlId="image">
                <Form.Label>Image :</Form.Label>
                <Form.Control
                  type="file"
                  onChange={modifyPiture}
                  accept="imgs/product/*"
                />
              </Form.Group>

              <Button variant="primary" type="submit" onClick={handledInfo}>
                Send
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  );
}

export default FormUp;
