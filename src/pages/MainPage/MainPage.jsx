import React, { useState, useEffect } from 'react';
import Highlight_events from '../../components/Highlight_events/Highlight_events';
import Past_events from '../../components/Past_events/Past_events';
import SearchBar from '../../components/SearchBar/SearchBar';
import Slider from '../../components/Slider/Slider';
import UpComing_events from '../../components/UpComing_events/UpComing_events';
import eventiaServices from '../../apiService/eventsServices';
import styles from './main.module.css';
import EventList from '../../components/EventList/EventList';

export default function MainPage() {
  const imgSlider = [
    'https://cnnespanol.cnn.com/wp-content/uploads/2022/02/jardineria-consejos-principiantes.jpg?quality=100&strip=info',
    'https://media.thebostoncalendar.com/images/q_auto,fl_lossy/v1653592932/zxjdayzo1zkmo1ewzgjf/outdoor-yoga-in-cambridge--36.jpg',
    'https://isdicoders.com/wp-content/uploads/2022/03/daw-dam-asir-asix-o-hacer-un-coding-bootcamp-1-scaled.jpeg',
  ];

  //ESTADOS EVENTOS
  const [highlightEvents, setHighLightEvents] = useState([]);
  const [upComingEvents, setUpComingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);

  // Agrega un estado para almacenar los eventos filtrados
  const [filteredEvents, setFilteredEvents] = useState([]);

  // //ESTADO FILTRO POR NOMBRE
  // const [searchBarByName, setSearchBarByName] = useState('');

  //LLAMADAS
  //DESTACADOS
  useEffect(() => {
    eventiaServices
      .getHighlightEvents()
      .then((data) => setHighLightEvents(data));
  }, []);
  //NO DISPONIBLES
  useEffect(() => {
    eventiaServices.getNotAvailable().then((data) => setPastEvents(data));
  }, []);
  //DISPONIBLES
  useEffect(() => {
    eventiaServices.getAvailable().then((data) => setUpComingEvents(data));
  }, []);

  //FUNCIÓN FILTRO POR NOMBRE
  const filterEventByName = (e) => {
    let query = e.target.value;
    // Filtra los eventos por nombre
    const filtered = [
      ...highlightEvents,
      ...upComingEvents,
      ...pastEvents,
    ].filter((event) => event.name.toLowerCase().includes(query.toLowerCase()));
    setFilteredEvents(filtered);
  };

  return (
    <div>
      {/* <Slider slider={slider} /> */}
      <Slider images={imgSlider} />
      <div className={styles.searchBarContainer}>
        <SearchBar
          filterEventByName={filterEventByName}
          filteredEvents={filteredEvents}
        />
      </div>
      {filteredEvents.length > 0 ? (
        // Si hay eventos filtrados, muestra solo esos
        <div>
          <h2>Resultados de búsqueda:</h2>
          <EventList filteredEvents={filteredEvents} />
        </div>
      ) : (
        <div>
          <Highlight_events highlightEvents={highlightEvents} />

          <UpComing_events upComingEvents={upComingEvents} />

          <Past_events pastEvents={pastEvents} />
        </div>
      )}
    </div>
  );
}
