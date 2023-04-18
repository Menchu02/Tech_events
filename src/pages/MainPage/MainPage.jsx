import React, { useState, useEffect } from 'react';
import Highlight_events from '../../components/Highlight_events/Highlight_events';
import Past_events from '../../components/Past_events/Past_events';
import SearchBar from '../../components/SearchBar/SearchBar';
import Slider from '../../components/Slider/Slider';
import UpComing_events from '../../components/UpComing_events/UpComing_events';
import eventiaServices from '../../apiService/eventsServices';
import styles from './main.module.css';

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

  //LLAMADAS
  useEffect(() => {
    eventiaServices
      .getHighlightEvents()
      .then((data) => setHighLightEvents(data));
  }, []);

  useEffect(() => {
    eventiaServices.getNotAvailable().then((data) => setPastEvents(data));
  }, []);

  useEffect(() => {
    eventiaServices.getAvailable().then((data) => setUpComingEvents(data));
  }, []);

  //ESTADO SLIDER
  // const [slider, setSlider] = useState([]);

  // useEffect(() => {
  //   eventiaServices.getHighlightEvents().then((data) => setSlider(data));
  // }, []);

  //estado eventos
  const [events, setEvents] = useState([]);

  //estado filtro por nombre
  const [searchBarByName, setSearchBarByName] = useState('');

  useEffect(() => {
    eventiaServices
      .getAllEvents(searchBarByName)
      .then((data) => setEvents(data));
  }, [searchBarByName]);
  // useEffect(() => {
  //   eventiaServices.getAllEvents().then((data) => console.log(data));
  // }, []);

  //FUNCIÓN FILTRO POR NOMBRE
  const filterEventByName = (e) => {
    let name = e.target.value;
    setSearchBarByName(name);
  };

  return (
    <div>
      {/* <Slider slider={slider} /> */}
      <Slider images={imgSlider} />
      <div className={styles.searchBarContainer}>
        <SearchBar
          filterEventByName={filterEventByName}
          searchBarByName={searchBarByName}
        />
      </div>
      <Highlight_events highlightEvents={highlightEvents} />
      <UpComing_events upComingEvents={upComingEvents} />
      <Past_events pastEvents={pastEvents} />
    </div>
  );
}
