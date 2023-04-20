import React from 'react';
import EventCard from '../EventCard/EventCard';
import styles from './eventList.module.css';

export default function EventList({ filteredEvents }) {
  return (
    <>
      <h1 className={styles.titleHighlightEvents}>Highlight events</h1>
      <div className={styles.galleryContainer}>
        {filteredEvents.map((event) => (
          <EventCard item={event} key={event.id} />
        ))}
      </div>
    </>
  );
}
