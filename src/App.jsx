import "./app.css";
import SideBar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <TopBar />
      <div className="container">
        <SideBar />
        <Home />
      </div>
    </div>
  );
};

export default App;
