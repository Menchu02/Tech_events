import React from "react";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_left}>
        <h1 className={styles.logo}>EVENTIA</h1>
        <div className={styles.social}>
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
      <div className={styles.events}>
        <Link>
          <h1>Active Events</h1>
        </Link>
        <h1>|</h1>
        <Link>
          <h1>Past Events</h1>
        </Link>
        <h1>|</h1>
        <Link>
          <h1>About Us</h1>
        </Link>
      </div>
    </div>
  );
}
