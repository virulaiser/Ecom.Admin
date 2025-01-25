import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Users from "./pages/Users";
import Home from "./pages/Home";
import ProductsAdmin from "./components/ProductsAdmin";
import UserEdit from "./pages/UserEdit";
import NewUser from "./pages/NewUser";
import Login from "./pages/Login";
import Admins from "./pages/Admins";
import NewAdmin from "./pages/NewAdmin";
import NewProduct from "./pages/NewProduct";
import ProductEdit from "./pages/ProductEdit";
import AdminEdit from "./pages/AdminEdit";

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/" element={<Home />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="products/newProduct" element={<NewProduct />} />
        <Route path="products/:product" element={<ProductEdit />} />
        <Route path="orders" element={<Orders />} />
        <Route path="users" element={<Users />} />
        <Route path="users/:user" element={<UserEdit />} />
        <Route path="users/newUser" element={<NewUser />} />
        <Route path="admins" element={<Admins />} />
        <Route path="admins/newAdmin" element={<NewAdmin />} />
        <Route path="admins/:admin" element={<AdminEdit />} />
        <Route path="product" element={<ProductsAdmin />} />
      </Route>
    </Routes>
  );
}

export default App;
