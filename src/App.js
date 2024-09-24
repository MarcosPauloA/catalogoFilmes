import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { keyboard } from '@testing-library/user-event/dist/keyboard';

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

function Image(image) {
  console.log("TESTE: ", image.image.poster_path);
  return (
    <img src={`https://image.tmdb.org/t/p/w300${image.image.poster_path}`} alt="Movie Poster" />
  )

}

function App() {

  const [originals, setOriginals] = useState([]);
  const [trending, setTrending] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);  

  useEffect(() => {
    // Load Originals
    axios
      .get(`${URL}${endpoints.originals}`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((res) => {
        console.log("resultado: ", res.data.results);
        setOriginals(res.data.results)});
  
    // Get other categories with the same pattern here
  
  }, []);



  return (
    <div className="App">
      {originals.map((image) => <Image image={image}/>)}
    </div>
  );
}

export default App;
