import { useEffect, useState } from "react";
import "./Users.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import ModalOrder from "./ModalOrder";
import Form from "react-bootstrap/Form";
import { format } from "date-fns";
import { useSelector } from "react-redux";

function Orders() {
  const [orders, setOrders] = useState(null);
  const [selectedCart, setSelectedCart] = useState(null);
  const [show, setShow] = useState(false);
  const admin = useSelector((state) => state.admin);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleStatusChange = async (status, id) => {
    await axios({
      method: "patch",
      url: `${import.meta.env.VITE_API_URL}/orders/${id}`,
      data: { status },
      headers: {
        Authorization: "Bearer " + (admin && admin.token),
      },
    });
  };

  useEffect(() => {
    const getOrders = async () => {
      const response = await axios({
        method: "get",
        url: `${import.meta.env.VITE_API_URL}/orders`,
      });
      setOrders(response.data);
    };
    getOrders();
  }, []);

  return (
    orders && (
      <section id="users">
        <div className="p-4 d-flex justify-content-between align-items-center">
          <h2 className="fw-bold m-0">Orders</h2>
        </div>
        <div className="row mx-4 chart">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">User</th>
                  <th scope="col">Date</th>
                  <th scope="col">Cart</th>
                  <th scope="col">Total price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td>{order._id}</td>
                    <td>{order.userEmail}</td>
                    <td>
                      {format(new Date(order.createdAt), "MMMM dd, yyyy")}
                    </td>
                    <td>
                      <NavLink
                        className="products-link"
                        onClick={() => {
                          handleShow();
                          setSelectedCart(order.cart);
                        }}
                      >
                        View products
                      </NavLink>
                      <ModalOrder
                        handleClose={handleClose}
                        show={show}
                        cart={selectedCart}
                      />
                    </td>
                    <td>{order.totalPrice.toFixed(1)}</td>
                    <td>
                      <Form.Select
                        defaultValue={order.status}
                        onChange={(event) =>
                          handleStatusChange(event.target.value, order._id)
                        }
                      >
                        <option value="Pending">Pending</option>
                        <option value="Preparing">Preparing</option>
                        <option value="On its way">On its way</option>
                        <option value="Delivered">Delivered</option>
                      </Form.Select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    )
  );
}

export default Orders;
