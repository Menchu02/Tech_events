import React from "react";
import "./../../global.css";
import "./Navbar.css";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar">
        <h1 className="logo">
          <span>E</span>VENTIA
        </h1>
        <div className="logup">
          <h1 className="login">Login</h1>
          <button className="singup">Sing Up</button>
        </div>
      </nav>
    </div>
  );
}
