import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import Slider from "./components/Slider/Slider";
import SerchBar from "./components/SearchBar/SearchBar";
import Highlight_events from "./components/Highlight_events/Highlight_events";
import UpComing_events from "./components/UpComing_events/UpComing_events";
import Past_events from "./components/Past_events/Past_events";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import EventDetail from "./pages/EventDetail/EventDetail";
import EventCard from "./components/EventCard/EventCard";
import MainPage from "./pages/MainPage/MainPage";
import Login from "./pages/LoginPage/Login";

// import imgSlider from '../../img';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route element={<EventDetail />} path="/events/:id" />
          <Route element={<MainPage />} path="/" />
          <Route element={<Login />} path="/login" />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
