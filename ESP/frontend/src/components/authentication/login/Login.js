import React from "react";
import "../login/Login.css";
import "../../../assets/background.jpg";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../button/CustomButton";
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
        <input type="password"></input>
        {/* <button onClick={handleClick}>LOGIN</button> */}
        <CustomButton name="LOGIN" onClick={handleClick} />
      </div>
    </div>
  );
}

export default Login;
