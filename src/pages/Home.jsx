import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Home.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function Home() {
  const admin = useSelector((state) => state.admin);

  const navigate = useNavigate();
  useEffect(() => {
    if (!admin) {
      navigate("/login");
    }
  }, [admin]);
  return (
    <div className="home">
      <div className="home-nav">
        <Navbar />
      </div>
      <div className="home-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
