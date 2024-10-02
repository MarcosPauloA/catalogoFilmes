import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Typography, Card, CardContent, CardMedia, Grid2 } from '@mui/material';
import Header from '../Header.js';

function MovieDetails() {
  const location = useLocation();
  const { movieDetails } = location.state || {};
  
  if (!movieDetails) {
    return <Typography variant="h6">Sem dados de filmes disponíveis</Typography>;
  } else {
    return (
      <Container>
        <Header />
        <Card sx={{ maxWidth: 345, margin: '20px auto' }}>
          <CardMedia
            component="img"
            height="300"
            image={`https://image.tmdb.org/t/p/w300${movieDetails.image.poster_path}`}
            alt={movieDetails.image?.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {movieDetails.image?.name} {movieDetails.image?.title} 
            </Typography>
            <Grid2 container spacing={2}>
              <Grid2 item xs={12}>
                <Typography variant="body2" color="text.secondary">
                  <strong>Original Name:</strong> {movieDetails.image?.original_name} {movieDetails.image?.original_title} 
                </Typography>
              </Grid2>
              <Grid2 item xs={12}>
                <Typography variant="body2" color="text.secondary">
                  <strong>Overview:</strong> {movieDetails.image?.overview}
                </Typography>
              </Grid2>
              <Grid2 item xs={12}>
                <Typography variant="body2" color="text.secondary">
                  <strong>First Air Date:</strong> {movieDetails.image?.first_air_date} {movieDetails.image?.release_date}
                </Typography>
              </Grid2>
              <Grid2 item xs={12}>
                <Typography variant="body2" color="text.secondary">
                  <strong>Original Language:</strong> {movieDetails.image?.original_language}
                </Typography>
              </Grid2>
              <Grid2 item xs={12}>
                {movieDetails.image?.origin_country ? 
                <Typography variant="body2" color="text.secondary">
                  <strong>Country of Origin:</strong> {movieDetails.image?.origin_country}
                </Typography>
                : <div></div>}
              </Grid2>
              <Grid2 item xs={12}>
                <Typography variant="body2" color="text.secondary">
                  <strong>Vote Average:</strong> {movieDetails.image?.vote_average}
                </Typography>
              </Grid2>
              <Grid2 item xs={12}>
                <Typography variant="body2" color="text.secondary">
                  <strong>Vote Count:</strong> {movieDetails.image?.vote_count}
                </Typography>
              </Grid2>
              <Grid2 item xs={12}>
                <Typography variant="body2" color="text.secondary">
                  <strong>Popularity:</strong> {movieDetails.image?.popularity}
                </Typography>
              </Grid2>
            </Grid2>
          </CardContent>
        </Card>
      </Container>
    );
  }
}

export default MovieDetails;
