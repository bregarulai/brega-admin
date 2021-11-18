import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./app.css";
import SideBar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import Home from "./pages/Home";
import NewUser from "./pages/NewUser";
import Product from "./pages/Product";
import ProductListPage from "./pages/ProductListPage";
import User from "./pages/User";
import UserList from "./pages/UserList";

const App = () => {
  return (
    <Router>
      <TopBar />
      <div className="container">
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newuser" element={<NewUser />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newproduct" element={<ProductListPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
