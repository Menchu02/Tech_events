import './App.css';
import Navbar from './components/NavBar/NavBar';
import Slider from './components/Slider/Slider';
import SerchBar from './components/SearchBar/SearchBar';
import Highlight_events from './components/Highlight_events/Highlight_events';
import UpComing_events from './components/UpComing_events/UpComing_events';
import Past_events from './components/Past_events/Past_events';
import Footer from './components/Footer/Footer';
import EventCard from './components/EventCard/EventCard';
// import imgSlider from '../../img';

function App() {
  const imgSlider = [
    'https://cnnespanol.cnn.com/wp-content/uploads/2022/02/jardineria-consejos-principiantes.jpg?quality=100&strip=info',
    'https://media.thebostoncalendar.com/images/q_auto,fl_lossy/v1653592932/zxjdayzo1zkmo1ewzgjf/outdoor-yoga-in-cambridge--36.jpg',
    'https://isdicoders.com/wp-content/uploads/2022/03/daw-dam-asir-asix-o-hacer-un-coding-bootcamp-1-scaled.jpeg',
  ];
  return (
    <div className='App'>
      <Navbar />

      <Slider images={imgSlider} />
      <UpComing_events />
      {/* <SerchBar /> */}
      <EventCard />
      {/* <Highlight_events /> */}

      {/* <Past_events /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
