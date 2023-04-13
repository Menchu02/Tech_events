import React from "react";
import Slider from "../Slider/Slider";
import styles from "./EventDetail.module.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function EventDetail() {
  const img = [
    "https://images.pexels.com/photos/7776215/pexels-photo-7776215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  return (
    <div>
      <div className={styles.container}>
        <img className={styles.img} src={img} alt="image" />
        <div className={styles.text}>
          <h1 className={styles.title}>Title of event</h1>
          <h1 className={styles.by}>By Name</h1>
          <h1 className={styles.direction}>Direction</h1>
          <Link to>
            <h1 className={styles.lookonmap}>
              <FaMapMarkerAlt />
              View on map
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventDetail;
