import React from "react";
import "../service/Service.css";
import CustomButton from "../button/CustomButton";
function Service({ Logo, name, expiraryDate, amount }) {
  const HandleClick = (e) => {
    e.preventDefault();
    alert("Data has been displayed ");
  };

  return (
    <div className="service">
      <img src={Logo} alt={name}></img>
      <div className="service_description">{name}</div>
      <div className="service_description">{expiraryDate}</div>
      <div className="service_description">¥{amount}</div>

      <div className="service_button"
        onClick={(e) => {
          HandleClick(e);
        }}
      >
        Get info{" "}
      </div>
    </div>
  );
}

export default Service;
