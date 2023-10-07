import React, { useEffect, useState } from "react";
import "../login/Login.css";
import "../../../assets/background.jpg";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../button/CustomButton";
function Login() {
  const navigate = useNavigate();
  const loginCredential_default = { id: "default", password: "default" };
  const [loginCredential, setLoginCredential] = useState(
    loginCredential_default
  );
  const [status, setStatus] = useState(true);
  const handleClick = () => {
    console.log("ID is " + loginCredential.id);
    console.log("Passcode is " + loginCredential.password);
    if (loginCredential.id == "wei" && loginCredential.password == "wei123") {
      navigate("/dashboard");
    } else {
      setStatus(false);
    }
  };
  const HandleOnChange = (e) => {
    setLoginCredential({
      ...loginCredential,
      [e.target.name]: [e.target.value.trim().toLowerCase()],
    });
  };

  useEffect(() => {});
  return (
    <div className="login">
      <div className="login_form">
        {!status && <h6>Wrong ID or Password </h6>}

        <h4>ID </h4>
        <input
          onChange={(e) => {
            HandleOnChange(e);
          }}
          name="id"
        ></input>
        <h4>PASSWORD</h4>
        <input
          onChange={(e) => {
            HandleOnChange(e);
          }}
          type="password"
          name="password"
        ></input>
        {/* <button onClick={handleClick}>LOGIN</button> */}
        <CustomButton type="submit" name="LOGIN" onClick={handleClick} />
      </div>
    </div>
  );
}

export default Login;
