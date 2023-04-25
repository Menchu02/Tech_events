import './App.css';
import Navbar from './components/NavBar/NavBar';

import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import EventDetail from './pages/EventDetail/EventDetail';

import MainPage from './pages/MainPage/MainPage';
import Admin from './components/Admin/Admin';

// import imgSlider from '../../img';

function App() {
  return (
    <>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route element={<EventDetail />} path='/events/:id' />
          <Route element={<Admin />} path='/events/admin/' />
          <Route element={<MainPage />} path='/' />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
