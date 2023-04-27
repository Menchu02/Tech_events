import React from "react";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <h1 className={styles.logo}>EVENTIA</h1>
    </div>
  );
}
