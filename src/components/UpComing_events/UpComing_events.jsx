import React from 'react';
import EventCard from '../EventCard/EventCard';
import styles from './upComingEvents.module.css';

export default function UpComing_events({ upComingEvents }) {
  return (
    <>
      <h1 className={styles.titleUpComingEvents}>UpComing events</h1>
      <div className={styles.galleryContainer}>
        {upComingEvents.map((item) => (
          <EventCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
