import React, { useState } from "react";
import "./../../App.css";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="navbar_desk">
        <h1 className="logo">EVENTIA</h1>
        <div className="logup">
          <Link to={"/login"}>
            <h1 className="login">Login</h1>
          </Link>
          <Link to={"/register"}>
            <button className="singup">Sing Up</button>
          </Link>
        </div>
      </nav>
      <div className="navbar">
        <h1 className="nav_logo">EVENTIA</h1>
        <div className={`nav_items ${isOpen && "open"}`}>
          <Link>
            <h1>Active Events</h1>
          </Link>
          <Link>
            <h1>Past Events</h1>
          </Link>
          <Link>
            <h1>About Us</h1>
          </Link>
          <h1 className="media">Social Media</h1>
          <div className="socialmedia">
            <Link>
              <FaFacebookSquare></FaFacebookSquare>
            </Link>
            <Link>
              <BsInstagram></BsInstagram>
            </Link>
            <Link>
              <BsTwitter></BsTwitter>
            </Link>
            <Link>
              <BsLinkedin></BsLinkedin>
            </Link>
          </div>
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
