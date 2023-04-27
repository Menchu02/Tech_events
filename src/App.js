import './App.css';
import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { Router } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';


function App() {
  return (
    <div className='App'>
      <ErrorBoundary>
        <Navbar />
        <Router />
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

export default App;
