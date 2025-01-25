import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewAdmin() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios({
      method: "post",
      url: `${import.meta.env.VITE_API_URL}/admin`,
      data: { firstname, lastname, email, password },
    });
    navigate("/admins");
  };

  return (
    <section id="newUser" className="p-4">
      <h2 className="fw-bold m-0 mb-3">New admin</h2>
      <form method="post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstname" className="form-label">
            Firstname
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            className="form-control"
            autoComplete="off"
            value={firstname}
            onChange={(event) => setFirstname(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastname" className="form-label">
            Lastname
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            className="form-control"
            autoComplete="off"
            value={lastname}
            onChange={(event) => setLastname(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            autoComplete="off"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button className="main-button" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

export default NewAdmin;
