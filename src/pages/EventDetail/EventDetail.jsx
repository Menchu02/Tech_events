import React, { useEffect, useState } from 'react';
import Slider from '../../components/Slider/Slider';
import styles from './EventDetail.module.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';
import eventiaServices from '../../apiService/eventsServices';

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
        <img className={styles.eventimg} src={eventDetail.img} alt='image' />
        <div className={styles.text}>
          <h1 className={styles.title}>{eventDetail.name}</h1>
          <h1 className={styles.by}>By {eventDetail.organitzer}</h1>
          <h1 className={styles.direction}>{eventDetail.location}</h1>
          <Link to>
            <h1 className={styles.lookonmap}>
              <FaMapMarkerAlt />
              View on map
            </h1>
          </Link>
        </div>
        <div className={styles.deskJoin}>
          <h1>Date & Time</h1>
          <h2>{eventDetail.eventDate}</h2>
          <h3>Add To Calendar</h3>
          <button className={styles.deskJoinButton}>
            {' '}
            <BsFillPersonFill /> 0/10
          </button>
          <button className={styles.deskShareButton}>Share with friends</button>
        </div>
      </div>
      <div className={styles.containerbutton}>
        <button className={styles.joinButton}>
          <BsFillPersonFill /> 0/10
        </button>
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.titles}>Description</h1>
        <p>{eventDetail.description}</p>
        <div>
          <h1 className={styles.titles}>Date & Time</h1>
          <p>
            {eventDetail.eventDate} at {eventDetail.eventHour}
          </p>
          <Link>
            <h1 className={styles.links}> Add to calendar </h1>
          </Link>
          <Link to={'/'}>
            <h1 className={styles.links}> Home </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventDetail;
