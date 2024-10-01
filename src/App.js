import './App.css';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { keyboard } from '@testing-library/user-event/dist/keyboard';
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
          <Route path="/detalhes" element={<MovieDetails />} />
          <Route path="/breve" element={<UpcomingMovies />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
