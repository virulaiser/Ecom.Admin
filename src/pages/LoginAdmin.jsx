import { useState } from "react";
import axios from "axios";

// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

function LoginAdmin() {
  // const token = useSelector((state) => state.user.token);
  // // Ahora puedes usar el token en tu componente
  // console.log("desde state token =>", token);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendForm = async (e) => {
    e.preventDefault();
    try {
      // Realiza la solicitud POST utilizando Axios
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/admin/token`,
        formData,
        {
          /* headers: {
            Authorization: `Bearer ${token}`,
          }, */
        }
      );

      // Haz algo con la respuesta, como mostrarla en la consola
      console.log(response);
      setFormData({
        username: "",
        password: "",
      });
    } catch (error) {
      // Maneja errores, por ejemplo, mostrándolos en la consola
      console.error(error);
    }
  };

  return (
    <>
      <div className="container-fluid main-container2">
        <div className="container-fluid d-flex align-items-center flex-column justify-content-center m-0 p-0 contact-banner"></div>
        <div className="container mb-5 mt-5 contact-container custom-background ">
          <div className=" d-flex-column  align-self-center align-content-between">
            <div className="row">
              <div className="col-6">
                <div className="container border rounded shadows">
                  <div>
                    <h2 className="fw-bold pt-4">Login Admin</h2>
                  </div>
                  <form onSubmit={sendForm} className="row g-3">
                    <div className="col-5">
                      <label htmlFor="username" className="form-label">
                        Username :
                      </label>
                      <input
                        className="form-control"
                        name="username"
                        id="username"
                        placeholder="username..."
                        value={formData.username}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-5">
                      <label htmlFor="password" className="form-label">
                        Password:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="password"
                        id="password"
                        placeholder="password..."
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-5 text-center pt-1">
                      <button
                        type="submit"
                        className="btn  m-4 text-center btn-primary "
                      >
                        Send{" "}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginAdmin;
