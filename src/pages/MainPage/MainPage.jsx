import React from "react";
import Slider from "../../components/Slider/Slider";
import UpComing_events from "../../components/UpComing_events/UpComing_events";

export default function MainPage() {
  const imgSlider = [
    "https://cnnespanol.cnn.com/wp-content/uploads/2022/02/jardineria-consejos-principiantes.jpg?quality=100&strip=info",
    "https://media.thebostoncalendar.com/images/q_auto,fl_lossy/v1653592932/zxjdayzo1zkmo1ewzgjf/outdoor-yoga-in-cambridge--36.jpg",
    "https://isdicoders.com/wp-content/uploads/2022/03/daw-dam-asir-asix-o-hacer-un-coding-bootcamp-1-scaled.jpeg",
  ];
  return (
    <div>
      <Slider images={imgSlider} />
      <UpComing_events />
    </div>
  );
}
