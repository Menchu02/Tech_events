import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../LoginPage/Login.css";
import "./Register.module.css";
import validatePass from "../../components/validations/PasswordValidation";
import validateRegisterForm from "../../components/validations/RegisterFormValidation";
import EmailValidation from "../../components/validations/EmailValidation";
import eventiaServices from "../../apiService/eventsServices";

function Register() {
  const initialRegister = {
    name: "",
    email: "",
    password: ""
  };
  const [register, setRegister] = useState(initialRegister);
  console.log(register);
  const navigate = useNavigate()

  const onChangeInput = (e) => {
    e.persist();
    setRegister({ ...register, [e.target.name]: e.target.value });
  };
  const registerSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: register.name,
      email: register.email,
      password: register.password
    }

    eventiaServices.userRegister(data);
    navigate("/login");
  };

  return (
    <div id="login">
      <form id="formLogin" name="Form" onSubmit={registerSubmit}>
        <h1 className="titleWelcome">Welcome to Eventia</h1>

        <div className="inputContainer">
          <input
            type="text"
            className="inputLogin"
            name="name"
            // id="user-email"
            onChange={onChangeInput}
          />
          <label htmlFor="labelLogin" className="labelLogin">
            {" "}
            Name{" "}
          </label>
        </div>

        <div className="inputContainer">
          <input
            type="text"
            className="inputLogin"
            name="email"
            id="user-email"
            // onKeyUp={EmailValidation}
            onChange={onChangeInput}
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
            // onKeyUp={validatePass}
            maxLength="30"
            onChange={onChangeInput}
          />
          <label htmlFor="labelLogin" className="labelLogin">
            {" "}
            Password{" "}
          </label>
          <span id="error-password"></span>
        </div>

        <div className="containerButons">
          <input
            type="submit"
            className="submitButton"
            value="Register"
            onClick={EmailValidation}
          />
          <h5 className="loginNow">
            {" "}
            Are you already a member?{" "}
            <Link to={"/login"}>
              <span>Login now</span>
            </Link>{" "}
          </h5>
        </div>
      </form>
    </div>
  );
}

export default Register;
