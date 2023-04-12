import './App.css';
import Navbar from "./components/NavBar/NavBar";
import Slider from "./components/Slider/Slider";
import SerchBar from "./components/SearchBar/SearchBar";
import Highlight_events from "./components/Highlight_events/Highlight_events";
import UpComing_events from "./components/UpComing_events/UpComing_events"
import Past_events from "./components/Past_events/Past_events";
import Footer from './components/Footer/Footer';

function App() {
  return <div className='App'> 
  <Navbar/>
  <Slider/>
  <SerchBar/>
  <Highlight_events/>
  <UpComing_events/>
  <Past_events/>
  <Footer/>
  </div>;
}

export default App;
