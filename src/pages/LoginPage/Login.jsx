import React from "react";
import { useState } from "react";
import { Link, json, useNavigate } from "react-router-dom";
import "./Login.css";
import validateLoginForm from "../../components/validations/LoginFormValidation";
import validatePass from "../../components/validations/PasswordValidation";
import EmailValidation from "../../components/validations/EmailValidation";

function Login() {
  const userModel = {
    email: "",
    password: "",
  };

  const [user, setUser] = useState(userModel);
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("login", JSON.stringify(user));
    navigate("/");
  };

  const userItem = JSON.parse(localStorage.getItem("login"));

  const handleOnChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div id="login">
      <form id="formLogin" name="Form" onSubmit={validateLoginForm}>
        <h1 className="titleWelcome">Welcome to Eventia</h1>

        <div className="inputContainer">
          <input
            type="text"
            className="inputLogin"
            name="email"
            id="user-email"
            onKeyUp={EmailValidation}
            onChange={handleOnChange}
          />
          <label htmlFor="labelLogin" className="labelLogin">
            {" "}
            Email{" "}
          </label>
          <span id="error-msg"></span>
        </div>

        <div className="inputContainer">
          <input
            type="password"
            className="inputLogin"
            name="password"
            onKeyUp={validatePass}
            onChange={handleOnChange}
            maxLength="30"
          />
          <label htmlFor="labelLogin" className="labelLogin">
            {" "}
            Password{" "}
          </label>
          <span id="error-password"></span>
        </div>

        <div className="containerButons">
          <Link to={"/"}>
            <input
              type="submit"
              className="submitButton"
              value="Sign In"
              onClick={handleSubmit}
            />
          </Link>

          <h5 className="registerNow">
            {" "}
            Not a member yet?{" "}
            <Link to={"/register"}>
              <span>Register now</span>
            </Link>{" "}
          </h5>
        </div>
      </form>
    </div>
  );
}

export default Login;
