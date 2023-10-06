import React from "react";
import CustomButton from "../button/CustomButton";
import "../navbar/Navbar.css";
import "../../assets/buttonBackGround.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_heading">Entertainment Service Packages </div>
      <div className="navbar_contact">Contact</div>
      <div className="navbar_signout">Signout</div>
    </div>
  );
};

export default Navbar;
