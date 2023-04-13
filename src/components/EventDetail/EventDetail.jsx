import React from "react";
import Slider from "../Slider/Slider";
import styles from "./EventDetail.module.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function EventDetail() {
  const img = [
    "https://images.pexels.com/photos/7776215/pexels-photo-7776215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  return (
    <div>
      <div className={styles.container}>
        <img className={styles.eventimg} src={img} alt="image" />
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
      <div className={styles.containerbutton}>
        <button className={styles.joinButton}>
          <BsFillPersonFill /> 0/10
        </button>
      </div>
      <h1 className={styles.titles}>Description</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        tempora impedit ex officiis iure consequuntur nisi minus iusto voluptate
        exercitationem voluptates esse, reiciendis iste deserunt? Praesentium
        ullam nam ipsa at?
      </p>
      <h1 className={styles.titles}>Date & Time</h1>
      <p>Day, Month day, year at hour </p>
      <Link>
        <h1 className={styles.links}> Add to calendar </h1>
      </Link>
    </div>
  );
}

export default EventDetail;
