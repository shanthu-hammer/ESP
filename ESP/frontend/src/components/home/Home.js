import React from "react";
import "../home/Home.css";
import "../../assets/background.jpg";
import Login from "../authentication/login/Login";
function Home() {
  return (
    <div className="home">
      <Login />
    </div>
  );
}

export default Home;
