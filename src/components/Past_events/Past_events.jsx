import React, { useState, useEffect } from 'react';
import eventiaServices from '../../apiService/eventsServices';
import EventCard from '../EventCard/EventCard';
import styles from "./pastEvents.module.css";
export default function Past_events() {
  const [notAvailable, setNotAvailable] = useState([]);

  useEffect(() => {
    eventiaServices.getNotAvailable().then((data) => setNotAvailable(data));
  }, []);

  return (
    <div>
      <h1>Past events</h1>
      <div className={styles.gallerycontainer}>
      {notAvailable.map((item) => (
        <EventCard item={item} key={item.id} />
      ))}

      </div>
       c
    </div>
  );
}
