import React from 'react';
import EventCard from '../EventCard/EventCard';
import styles from './upComingEvents.module.css';

export default function UpComing_events() {
  return (
    <div className={styles.galleryContainer}>
      <EventCard />
    </div>
  );
}
