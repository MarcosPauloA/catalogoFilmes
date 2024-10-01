// import './App.css';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { keyboard } from '@testing-library/user-event/dist/keyboard';
import MovieDetails from './MovieDetails.js';
import { useNavigate, Router, Routes, Route } from 'react-router-dom';
import Header from '../Header.js';

const URL = "https://api.themoviedb.org/3";
const API_KEY = "6ac174ee019af23cadcac8fe0442832a";

const endpoints = {
  originals: "/discover/tv",
  trending: "/trending/all/week",
  now_playing: "/movie/now_playing",
  popular: "/movie/popular",
  top_rated: "/movie/top_rated",
  upcoming: "/movie/upcoming",
};

function Image(movieDetails) {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("TESTE: ", movieDetails.image);
    navigate('/detalhes', { state: { movieDetails } });
  };
  
  return (
    <img src={`https://image.tmdb.org/t/p/w300${movieDetails.image.poster_path}`} alt="Movie Poster" onClick={handleClick}/>
  )

}

function Home() {
  
  const [originals, setOriginals] = useState([]);
  const [trending, setTrending] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);  

  useEffect(() => {
    // Load Originals
    axios
      .get(`${URL}${endpoints.trending}`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((res) => {
        // console.log("resultado: ", res.data.results);
        setOriginals(res.data.results)});
  
    // Get other categories with the same pattern here
  
  }, []);



  return (
    <div className="Home">
      <Header/>
      {originals.map((image) => <Image image={image}/>)}
    </div>
  );
}

export default Home;
