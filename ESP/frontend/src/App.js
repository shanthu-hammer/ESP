import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import {
  BrowserRouter as Router,
  Routes as RouteConfig,
  Route,
} from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/authentication/login/Login";
import "./fonts/PublicPixel-z84yD.ttf";
function App() {
  return (
    <div className="app">
      {/* <img src={background_img}></img> */}
      <Router>
        <RouteConfig>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/:id" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
        </RouteConfig>
      </Router>
    </div>
  );
}

export default App;
