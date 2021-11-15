import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./app.css";
import SideBar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import Home from "./pages/Home";
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
        </Routes>
      </div>
    </Router>
  );
};

export default App;
