import './App.css';
import MovieDetails from './pages/MovieDetails';
import Home from './pages/Home';
import UpcomingMovies from './pages/UpcomingMovies';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<MovieDetails />} />
          <Route path="/upcoming" element={<UpcomingMovies />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
