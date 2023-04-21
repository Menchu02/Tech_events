import React, { useEffect, useState } from 'react';
import styles from './admin.module.css';
import eventiaServices from '../../apiService/eventsServices';
import EventCard from '../EventCard/EventCard';

import Footer from '../Footer/Footer';
import SearchBar from '../SearchBar/SearchBar';
import NavBar from '../NavBar/NavBar';
import SearchBarAdmin from '../SearchBarAdmin/SearchBarAdmin';

export default function Admin() {
  const [admin, setAdmin] = useState([]);

  // Agrega un estado para almacenar los eventos filtrados
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    eventiaServices.getAllEvents(searchInput).then((data) => setAdmin(data));
  }, [searchInput]);

  //FUNCIÓN FILTRO POR NOMBRE
  const filterEventByName = (e) => {
    let query = e.target.value;

    setSearchInput(query);
  };

  return (
    <>
      <SearchBarAdmin
        filterEventByName={filterEventByName}
        searchInput={searchInput}
      />
      <h1 className={styles.titleAdminEvents}>Events</h1>
      <div className={styles.galleryContainer}>
        {admin.map((item) => (
          <EventCard item={item} key={item.id} />
        ))}
      </div>
      ;
    </>
  );
}
