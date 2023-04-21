import React, { useState, useEffect } from 'react';
import Highlight_events from '../../components/Highlight_events/Highlight_events';
import Past_events from '../../components/Past_events/Past_events';
import SearchBar from '../../components/SearchBar/SearchBar';
import Slider from '../../components/Slider/Slider';
import UpComing_events from '../../components/UpComing_events/UpComing_events';
import eventiaServices from '../../apiService/eventsServices';
import styles from './main.module.css';
import EventList from '../../components/EventList/EventList';
import Admin from '../../components/Admin/Admin';

export default function MainPage() {
  //ESTADOS EVENTOS
  const [highlightEvents, setHighLightEvents] = useState([]);
  const [upComingEvents, setUpComingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);

  // Agrega un estado para almacenar los eventos filtrados
  const [searchInput, setSearchInput] = useState('');

  //LLAMADAS
  //DESTACADOS
  useEffect(() => {
    eventiaServices
      .getHighlightEvents(searchInput)
      .then((data) => setHighLightEvents(data));
  }, [searchInput]);
  //NO DISPONIBLES
  useEffect(() => {
    eventiaServices
      .getNotAvailable(searchInput)
      .then((data) => setPastEvents(data));
  }, [searchInput]);
  //DISPONIBLES
  useEffect(() => {
    eventiaServices
      .getAvailable(searchInput)
      .then((data) => setUpComingEvents(data));
  }, [searchInput]);

  //FUNCIÓN FILTRO POR NOMBRE
  const filterEventByName = (e) => {
    let query = e.target.value;

    setSearchInput(query);
  };

  return (
    <div>
      <Slider highlightEvents={highlightEvents} />
      <div className={styles.searchBarContainer}>
        <SearchBar
          filterEventByName={filterEventByName}
          searchInput={searchInput}
        />
      </div>
      <div className={styles.eventsContainer}>
        <Highlight_events highlightEvents={highlightEvents} />

        <UpComing_events upComingEvents={upComingEvents} />

        <Past_events pastEvents={pastEvents} />
      </div>
    </div>
  );
}
