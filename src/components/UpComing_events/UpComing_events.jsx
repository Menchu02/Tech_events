import React from "react";
import EventCard from "../EventCard/EventCard";
import styles from '../Highlight_events/highlightEvents.module.css';

export default function UpComing_events({ upComingEvents }) {
  return (
    <>
      <h1 className={styles.titleHighlightEvents}>UpComing events</h1>
      <div className={styles.galleryContainer}>
        {upComingEvents.map((item) => (
          <EventCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
