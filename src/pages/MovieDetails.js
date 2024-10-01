import { useState, useEffect } from 'react';
import axios from 'axios';
import { keyboard } from '@testing-library/user-event/dist/keyboard';
import { useLocation } from 'react-router-dom';
import Header from '../Header.js';
function MovieDetails() {

  const location = useLocation();
  const { movieDetails } = location.state || {};
  // console.log("Detalhes "+ JSON.stringify(movieDetails, null, 2));
  console.log("Detalhes "+ JSON.stringify(movieDetails, null, 2));
  if (!movieDetails) {
    return <div>No movie data available</div>;
  }
  else {
  return ( 
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <Header/>
      <h1>{JSON.stringify(movieDetails.image?.name)}</h1>
      <img src={`https://image.tmdb.org/t/p/w300${movieDetails.image.poster_path}`} alt={movieDetails.image?.name} style={{ width: '300px' }} />
      <p><strong>Original Name:</strong> {JSON.stringify(movieDetails.image?.original_name)}</p>
      <p><strong>Overview:</strong> {JSON.stringify(movieDetails.image?.overview)}</p>
      <p><strong>First Air Date:</strong> {JSON.stringify(movieDetails.image?.first_air_date)}</p>
      <p><strong>Original Language:</strong> {JSON.stringify(movieDetails.image?.original_language)}</p>
      <p><strong>Country of Origin:</strong> {JSON.stringify(movieDetails.image?.origin_country)}</p>
      <p><strong>Vote Average:</strong> {JSON.stringify(movieDetails.image?.vote_average)}</p>
      <p><strong>Vote Count:</strong> {JSON.stringify(movieDetails.image?.vote_count)}</p>
      <p><strong>Popularity:</strong> {JSON.stringify(movieDetails.image?.popularity)}</p>
    </div>
  );
  }
}

export default MovieDetails;
