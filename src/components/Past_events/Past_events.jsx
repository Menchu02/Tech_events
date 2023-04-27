import React, { useState, useEffect } from 'react';
import EventCard from '../EventCard/EventCard';
import { Link } from 'react-router-dom';
import styles from '../Highlight_events/highlightEvents.module.css';

export default function Past_events({ pastEvents }) {
  return (
    <>
      <h1 className={styles.titleHighlightEvents}>Past events</h1>
      <div className={styles.galleryContainer} id={styles.pastEvents}>
        {pastEvents.map((item) => (
          <Link key={item.id} to={`/events/${item.id}`}>
            <div className={styles.pastEvents}>
              <EventCard item={item} key={item.id} />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
