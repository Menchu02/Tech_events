import React from 'react';
import EventCard from '../EventCard/EventCard';
import styles from './highlightEvents.module.css';

export default function Highlight_events({ highlightEvents }) {
  return (
    <>
      <h1 className={styles.titleHighlightEvents}>Highlight events</h1>
      <div className={styles.galleryContainer}>
        {highlightEvents.map((item) => (
          <EventCard item={item} key={item.id} />
        ))}
      </div>
    </>
  );
}
