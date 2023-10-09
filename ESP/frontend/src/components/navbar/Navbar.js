import React from "react";
import CustomButton from "../button/CustomButton";
import "../navbar/Navbar.css";
import "../../assets/buttonBackGround.png";
const Navbar = ({ ContactClick, SignoutClick }) => {
  const ContactHandleClick = () => {
    ContactClick();
  };
  const ContactSignoutClick = () => {
    SignoutClick();
  };
  return (
    <div className="navbar">
      <div className="navbar_heading">Entertainment Service Packages </div>
      <div className="navbar_buttons">
        {" "}
        <div
          className="navbar_buttons_contact"
          onClick={() => {
            ContactHandleClick();
          }}
        >
          Contact
        </div>
        <div
          className="navbar_buttons_signout"
          onClick={() => {
            ContactSignoutClick();
          }}
        >
          Signout
        </div>
      </div>
    </div>
  );
};

export default Navbar;
