import React from "react";
import { useState } from "react";
import { Link, json, useNavigate } from "react-router-dom";
import "./Login.css";
import validateLoginForm from "../../components/validations/LoginFormValidation";
import validatePass from "../../components/validations/PasswordValidation";
import EmailValidation from "../../components/validations/EmailValidation";
import eventiaServices from "../../apiService/eventsServices";


function Login() {
  const userModel = {
    email: "",
    password: "",
  };

  const [user, setUser] = useState(userModel);
  let navigate = useNavigate();
  
  console.log(user);
  
  const handleOnChange = (e) => {
    e.persist();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const saveAuthUser = (authUser) => {
    localStorage.setItem("auth", JSON.stringify(authUser));
  }

  const loginSubmit = (e) => {
    e.preventDefault();
    const data = {
        name: user.name,
        email: user.email,
        password: user.password,
    };
    eventiaServices.userLogin(data)
        .then((res) => {
            const authUser = {
                token: res.token,
                email: res.email,
                role: res.role,
            };
            localStorage.setItem("auth_token", res.token);
            localStorage.setItem("auth_email", res.email);
            localStorage.setItem("auth_role", res.role);
            localStorage.setItem("auth", JSON.stringify(authUser));
            navigate("/");
            document.location.reload();
        })
        .catch((err) =>
            console.log(err)
        )
}
  return (
    <div id="login">
      <form id="formLogin" name="Form" onSubmit={loginSubmit}>
        <h1 className="titleWelcome">Welcome to Eventia</h1>

        <div className="inputContainer">
          <input
            type="text"
            className="inputLogin"
            name="email"
            id="user-email"
            // onKeyUp={EmailValidation}
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
            // onKeyUp={validatePass}
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
          {/* <Link to={"/"}> */}
            <button
              // type="submit"
              className="submitButton"
              // value="Sign In"
              // onClick={loginSubmit}
            >
              sign in
            </button>
          {/* </Link> */}

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
