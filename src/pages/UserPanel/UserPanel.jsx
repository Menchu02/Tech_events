import React, { useEffect, useState } from "react";
import eventiaServices from "../../apiService/eventsServices";
import UpComing_events from "../../components/UpComing_events/UpComing_events";
import Highlight_events from "../../components/Highlight_events/Highlight_events";
import Past_events from "../../components/Past_events/Past_events";
import EventCard from "../../components/EventCard/EventCard";
import styles from "./UserPanel.module.css";
import { Link } from "react-router-dom";

function UserPanel() {
  const [upComingEvents, setUpComingEvents] = useState([]);

  useEffect(() => {
    eventiaServices.getAllEvents().then((data) => setUpComingEvents(data));
  }, []);
  return (
    <div>
      <h1 className={styles.h1event}>Events suscribed</h1>
      <div className={styles.myEvents}>
        {upComingEvents.map((item) => (
          //   <EventCard key={item.id} item={item} />
          <div className={styles.card}>
            <div>
              <img src={item.img} alt="img" />
            </div>
            <div className={styles.info}>
              <h1>{item.name}</h1>
              <h1>{item.location}</h1>
              <h1>{item.eventHour}</h1>
              <button>
                <Link className={styles.link} to={`/events/${item.id}`}>
                  <h1>Go to Event</h1>
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserPanel;
