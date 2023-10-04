import React from "react";
import "../login/Login.css";
import "../../../assets/background.jpg";
function Login() {
  return (
    <div className="login">
      <div className="login_form">
        <h4>ID </h4>
        <input></input>
        <h4>PASSCODE</h4>
        <input></input>
        <button>LOGIN</button>
      </div>
    </div>
  );
}

export default Login;
