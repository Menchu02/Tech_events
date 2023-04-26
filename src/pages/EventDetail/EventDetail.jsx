import React, { useEffect, useState } from "react";
import Slider from "../../components/Slider/Slider";
import styles from "./EventDetail.module.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import eventiaServices from "../../apiService/eventsServices";

function EventDetail() {
  // const img = [
  //   "https://images.pexels.com/photos/7776215/pexels-photo-7776215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  // ];

  const { id } = useParams();
  const [eventDetail, setEventDetail] = useState({});
  useEffect(() => {
    eventiaServices.getEventById(id).then((data) => {
      setEventDetail(data);
    });
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <img className={styles.eventimg} src={eventDetail.img} alt="image" />
        <div className={styles.text}>
          <h1 className={styles.title}>{eventDetail.name}</h1>
          <h1 className={styles.by}>By {eventDetail.organizer}</h1>
          <h1 className={styles.direction}>{eventDetail.location}</h1>
        </div>
        <div className={styles.deskJoin}>
          <h1>Date & Time</h1>
          <h2>
            {eventDetail.eventDate} at {eventDetail.eventHour}
          </h2>
          <button className={styles.deskJoinButton}>
            {" "}
            <BsFillPersonFill /> {eventDetail.registersCount}/
            {eventDetail.maxParticipants}
          </button>
          <button className={styles.deskShareButton}>JOIN</button>
        </div>
      </div>
      <div className={styles.containerbutton}>
        <button className={styles.joinButton}>
          <BsFillPersonFill /> {eventDetail.registersCount}/
          {eventDetail.maxParticipants}
        </button>
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.titles}>Description</h1>
        <p className={styles.description}>{eventDetail.description}</p>
        <div>
          <h1 className={styles.titles2}>Date & Time</h1>
          <p className={styles.description2}>
            {eventDetail.eventDate} at {eventDetail.eventHour}
          </p>
          <button className={styles.join2Button}>JOIN</button>
        </div>
        {/* <img
          className={styles.map}
          src="https://i.imgur.com/QwZzpyu.png"
          alt="fakemaps"
        /> */}
      </div>
    </div>
  );
}

export default EventDetail;
