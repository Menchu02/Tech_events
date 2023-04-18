import React from 'react';

// import EventCard from '../EventCard/EventCard';
import { Link } from 'react-router-dom';
import styles from './pastEvents.module.css';
export default function Past_events({ pastEvents }) {
  // const [notAvailable, setNotAvailable] = useState([]);

  // useEffect(() => {
  //   eventiaServices.getNotAvailable().then((data) => setNotAvailable(data));
  // }, []);

  return (
    <>
      <h1 className={styles.titleHighlightEvents}>Past events</h1>
      <div className={styles.galleryContainer}>
        {pastEvents.map((item) => (
          <Link key={item.id} to={`/events/${item.id}`}>
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
                  <p className={styles.locationEvent}>{item.location}</p>
                  <p className={styles.locationEvent}>{item.eventHour}</p>
                  <button>More</button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
