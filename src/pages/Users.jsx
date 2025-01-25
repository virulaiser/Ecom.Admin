import { useEffect, useState } from "react";
import "./Users.css";
import axios from "axios";
import { AiFillDelete, AiOutlinePlusCircle } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import ModalDelete from "./ModalDelete";

function Users() {
  const [users, setUsers] = useState(null);
  const [show, setShow] = useState(false);
  const [id, setId] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios({
        method: "get",
        url: `${import.meta.env.VITE_API_URL}/users`,
      });
      setUsers(response.data);
    };
    getUsers();
  }, []);
  return (
    users && (
      <section id="users">
        <div className="p-4 d-flex justify-content-between align-items-center">
          <h2 className="fw-bold m-0">Users</h2>
          <Link to={`newUser`}>
            <button className="main-button">
              <AiOutlinePlusCircle className="me-1" />
              New user
            </button>
          </Link>
        </div>
        <div className="row mx-4 chart">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Firstname</th>
                  <th scope="col">Lastname</th>
                  <th scope="col">Email</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <td>{user._id}</td>
                    <td>{user.firstname}</td>
                    <td>
                      {} {user.lastname}
                    </td>
                    <td>{user.email}</td>
                    <td>
                      <Link to={`/users/${user._id}`}>
                        <MdEdit className="me-4 action-icon" />
                      </Link>
                      <AiFillDelete
                        className="action-icon delete-icon"
                        onClick={() => {
                          handleShow();
                          setId(user._id);
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <ModalDelete
          setShow={setShow}
          show={show}
          handleClose={handleClose}
          setUsers={setUsers}
          users={users}
          id={id}
        />
      </section>
    )
  );
}

export default Users;
