import React, { useState } from "react";
import "./../../App.css";
import "./Navbar.css";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="navbar_desk">
        <h1 className="logo">
          <span>E</span>VENTIA
        </h1>
        <div className="logup">
          <h1 className="login">Login</h1>
          <button className="singup">Sing Up</button>
        </div>
      </nav>
      <div className="navbar">
        <h1 className="nav_logo">EVENTIA</h1>
        <div className={`nav_items ${isOpen && "open"}`}>
          <h1>test</h1>
        </div>
        <div
          className={`nav_toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
