import React, { useEffect, useState } from 'react';
import styles from './admin.module.css';
import eventiaServices from '../../apiService/eventsServices';
// import EventCard from '../EventCard/EventCard';
import { Link } from 'react-router-dom';

// import Footer from '../Footer/Footer';
// import SearchBar from '../SearchBar/SearchBar';
// import NavBar from '../NavBar/NavBar';
import SearchBarAdmin from '../SearchBarAdmin/SearchBarAdmin';
import FormAdmin from '../../pages/FormAdmin/FormAdmin';

export default function Admin() {
  const [admin, setAdmin] = useState([]);

  //estado modal
  const [formAdmin, setFormAdmin] = useState(false);

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

  //FUNCION TOOGLE MODAL
  const handlerModal = () => {
    setFormAdmin(!formAdmin);
  };

  return (
    <>
      <div className={styles.adminButtonContainer}>
        <SearchBarAdmin
          filterEventByName={filterEventByName}
          searchInput={searchInput}
        />
        <button onClick={handlerModal} className={styles.adminButton}>
          New event
        </button>
      </div>
      <h1 className={styles.titleAdminEvents}>Events</h1>

      {formAdmin ? (
        <FormAdmin />
      ) : (
        <div className={styles.galleryContainer}>
          {admin.map((item) => (
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
      )}
    </>
  );
}
