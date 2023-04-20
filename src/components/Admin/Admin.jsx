import React, { useEffect, useState } from 'react';
import styles from './admin.module.css';
import eventiaServices from '../../apiService/eventsServices';
import EventCard from '../EventCard/EventCard';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
// import Navbar from './components/NavBar/NavBar';

export default function Admin() {
  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    eventiaServices.getAllEvents().then((data) => setAdmin(data));
  }, []);

  return (
    <>
      <NavBar />
      <h1 className={styles.titleHighlightEvents}>Admin events</h1>
      <div className={styles.galleryContainer}>
        {admin.map((item) => (
          <EventCard item={item} key={item.id} />
        ))}
      </div>
      ;
      <Footer />
    </>
  );
}
