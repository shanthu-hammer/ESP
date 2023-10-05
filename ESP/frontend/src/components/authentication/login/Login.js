import React from "react";
import "../login/Login.css";
import "../../../assets/background.jpg";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/dashboard");
  };

  return (
    <div className="login">
      <div className="login_form">
        <h4>ID </h4>
        <input></input>
        <h4>PASSCODE</h4>
        <input></input>
        <button onClick={handleClick}>LOGIN</button>
      </div>
    </div>
  );
}

export default Login;
