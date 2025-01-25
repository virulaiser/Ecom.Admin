import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UserEdit() {
  const [user, setUser] = useState();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const response = await axios({
        method: "get",
        url: `${import.meta.env.VITE_API_URL}/users/${params.user}`,
      });
      setUser(response.data);
      setFirstname(response.data.firstname);
      setLastname(response.data.lastname);
      setEmail(response.data.email);
    };
    getUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios({
      method: "patch",
      url: `${import.meta.env.VITE_API_URL}/users/${params.user}`,
      data: { firstname, lastname, email, password },
    });
    navigate(`/users`);
  };

  return (
    user && (
      <div className="p-4">
        <h2 className="fw-bold m-0 mb-3">Edit user</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstname" className="form-label">
              Firstname
            </label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              name="firstname"
              aria-describedby="emailHelp"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastname" className="form-label">
              Lastname
            </label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              name="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="main-button">
            Submit
          </button>
        </form>
      </div>
    )
  );
}

export default UserEdit;
