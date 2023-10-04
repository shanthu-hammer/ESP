import React from "react";
import "../service/Service.css";
function Service({ Logo, name, expiraryDate, amount }) {
  return (
    <div className="service">
      <img src={Logo} alt={name}></img>
      <div className="service_description">{name}</div>
      <div className="service_description">{expiraryDate}</div>
      <div className="service_description">{amount}</div>
    </div>
  );
}

export default Service;
