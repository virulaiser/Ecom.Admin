import { useState } from "react";
import "./Login.css";
import { login } from "../redux/adminSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEmail = () => {
    setEmail("admin@doppios.com");
  };
  const handlePassword = () => {
    setPassword("1234");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios({
      method: "post",
      url: `${import.meta.env.VITE_API_URL}/tokens/admin`,
      data: { email, password },
    });
    if (response.data.token) {
      console.log(response.data);
      dispatch(login(response.data));
    } else {
      console.log(response.data);
    }
    navigate("/");
  };
  return (
    <div id="login">
      <div className="login-container">
        <div className="login-img-container">
          <img
            src="https://images.unsplash.com/photo-1622808516114-02a5749cd965?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            alt="bakery"
            className="login-img"
          />
        </div>
        <div className="login-form-container">
          <h4 className="login-title">Welcome to Doppios. Admin</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control input-form"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="form-text login-text" onClick={handleEmail}>
                Click here: admin@doppios.com
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control input-form"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="form-text login-text" onClick={handlePassword}>
                Click here: 1234
              </div>
            </div>

            <button type="submit" className="main-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
