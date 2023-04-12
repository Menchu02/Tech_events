import './App.css';
import Navbar from './components/NavBar/NavBar';
import Slider from './components/Slider/Slider';
import SerchBar from './components/SearchBar/SearchBar';
import Highlight_events from './components/Highlight_events/Highlight_events';
import UpComing_events from './components/UpComing_events/UpComing_events';
import Past_events from './components/Past_events/Past_events';
import Footer from './components/Footer/Footer';
// import imgSlider from '../../img';

function App() {
  const imgSlider = [
    'https://static.nationalgeographic.es/files/styles/image_3200/public/kids-gardening.jpg?w=1900&h=1371',
    'https://xuanlanyoga.com/wp-content/uploads/2017/10/festival-de-yoga.jpg',
    'https://isdicoders.com/wp-content/uploads/2022/04/Foto3.jpg',
  ];
  return (
    <div className='App'>
      <Navbar />
      <Slider images={imgSlider} />
      <SerchBar />
      <Highlight_events />
      <UpComing_events />
      <Past_events />
      <Footer />
    </div>
  );
}

export default App;
