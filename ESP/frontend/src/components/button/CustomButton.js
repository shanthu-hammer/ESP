import React from "react";
import "../button/CustomButton.css";
import "../../assets/buttonBackGround.png";
function CustomButton({ name, onClick }) {
  return (
    <div className="button" onClick={onClick}>
      {name}
    </div>
  );
}

export default CustomButton;
