import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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
    navigate('/details', { state: { movieDetails } });
  };
  
  return (
    <img src={`https://image.tmdb.org/t/p/w300${movieDetails.image.poster_path}`} alt="Movie Poster" 
    onClick={handleClick} style={{ border: '2px solid black', borderRadius: '10px' }}/> // CSS inline
  )

}

function Home() {
  
  const [originals, setOriginals] = useState([]);

  useEffect(() => {
    // Load Originals
    axios
      .get(`${URL}${endpoints.trending}`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((res) => {
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
