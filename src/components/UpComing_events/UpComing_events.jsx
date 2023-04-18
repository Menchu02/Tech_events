import React, { useEffect, useState } from 'react';
import EventCard from '../EventCard/EventCard';
import styles from './upComingEvents.module.css';
import eventiaServices from '../../apiService/eventsServices';
// import SearchBar from '../SearchBar/SearchBar';
export default function UpComing_events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    eventiaServices.getAvailable().then((data) => setEvents(data));
  }, []);

  return (
    <>
      <h1 className={styles.titleUpComingEvents}>UpComing events</h1>
      <div className={styles.galleryContainer}>
        {events.map((item) => (
          <EventCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
