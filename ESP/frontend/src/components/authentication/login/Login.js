import React, { useEffect, useState } from "react";
import "../login/Login.css";
import "../../../assets/background.jpg";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../button/CustomButton";
import CheckIDPass from "../../../utilities/CheckIDPass";

function Login() {
  const navigate = useNavigate();
  const loginCredential_default = { id: "default", password: "default" };
  const [loginCredential, setLoginCredential] = useState(
    loginCredential_default
  );
  const [status, setStatus] = useState(true);
  const handleClick = async () => {
    var auth_result = await CheckIDPass(
      loginCredential.id,
      loginCredential.password
    );

    if (auth_result) {
      navigate("/dashboard/" + loginCredential.id);
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

        <CustomButton type="submit" name="LOGIN" onClick={handleClick} />
      </div>
    </div>
  );
}

export default Login;
