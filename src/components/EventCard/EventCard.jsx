import React from 'react';
import styles from './eventCard.module.css';
import { Link } from 'react-router-dom';

export default function EventCard({ item }) {
  return (
    <>
      <Link to={`/events/${item.id}`}>
        <div className={styles.eventCardContainer}>
          <div className={styles.imgContainer}>
            <img
              className={styles.imgCardEvent}
              src={item.img}
              alt='img event'
            />
          </div>
          <div className={styles.bottomEventCard}>
            <div className={styles.dateContainer}>
              <h2>{item.eventDate}</h2>
            </div>
            <div className={styles.infoContainer}>
              <h2 className={styles.titleEvent}>{item.name}</h2>
              <p className={styles.locationEvent}>{item.location} {item.eventHour}</p>
              <button>More</button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
