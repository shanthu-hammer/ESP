import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes as RouteConfig,
  Route,
} from "react-router-dom";
import Home from "./components/home/Home";
import background_img from "./assets/background.jpg";
function App() {
  const backgroundStyle = {
    backgroundImage: `url(${background_img})`,
    backgroundSize: "cover", // Adjust the background size as needed
    // You can add more background properties like backgroundRepeat, backgroundPosition, etc.
  };
  return (
    <div>
      <header className="App-header"></header>
      {/* <img src={background_img}></img> */}
      <Router>
        <RouteConfig>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
        </RouteConfig>
      </Router>
    </div>
  );
}

export default App;
