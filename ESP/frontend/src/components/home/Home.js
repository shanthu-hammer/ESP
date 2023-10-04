import React from "react";
import "../home/Home.css";
import "../../assets/background.jpg";
import Login from "../authentication/login/Login";
import "../../fonts/PublicPixel-z84yD.ttf";
function Home() {
  return (
    <div className="home">
      <Login />
    </div>
  );
}

export default Home;
