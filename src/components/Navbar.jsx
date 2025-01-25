import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import {
  BiSolidDashboard,
  BiSolidPurchaseTag,
  BiSolidCart,
  BiSolidUser,
  BiLogOut,
} from "react-icons/bi";
import { MdAdminPanelSettings } from "react-icons/md";
import { useDispatch } from "react-redux";
import { logout } from "../redux/adminSlice";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout(null));
    navigate("/login");
  };
  return (
    <aside className="nav-container">
      <div>
        <h2 className="logo-title">Doppios.</h2>
        <ul>
          <li className="nav-item">
            <NavLink to={`/`} className="nav-link">
              <BiSolidDashboard className="nav-icon" />
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={`/products`} className="nav-link">
              <BiSolidPurchaseTag className="nav-icon" />
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={`/orders`} className="nav-link">
              <BiSolidCart className="nav-icon" />
              Orders
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={`/users`} className="nav-link">
              <BiSolidUser className="nav-icon" />
              Users
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={`/admins`} className="nav-link">
              <MdAdminPanelSettings className="nav-icon" />
              Admins
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="nav-logout" onClick={handleLogout}>
        <NavLink className="nav-link">
          <BiLogOut className="nav-icon" />
          Logout
        </NavLink>
      </div>
    </aside>
  );
}

export default Navbar;
