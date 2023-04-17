import React, { useEffect, useState } from 'react';
import EventCard from '../EventCard/EventCard';
import styles from './upComingEvents.module.css';
import eventiaServices from '../../apiService/eventsServices';
import SearchBar from '../SearchBar/SearchBar';
export default function UpComing_events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    eventiaServices.getAllEvents().then((data) => setEvents(data));
  }, []);

  return (
    <>
      <div className={styles.searchBarContainer}>
        <SearchBar />
      </div>

      <div className={styles.galleryContainer}>
        {events.map((item) => (
          <EventCard key={item.id} item={item} />
        ))}
        {/* <EventCard /> */}
      </div>
    </>
  );
}
