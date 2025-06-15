import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from '../api/api';

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieById(id).then(res => setMovie(res.data));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-detail">
  <img
  src={
    movie.poster_path
      ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
      : '/no-image.png'
  }alt={movie.title} 
/>

  <div className="movie-detail-info">
    <h1>{movie.title}</h1>
    <p>{movie.overview}</p>
    <p><strong>Rating:</strong> {movie.vote_average}</p>
    <p><strong>Release Date:</strong> {movie.release_date}</p>
    <p><strong>Genre:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
    <p><strong>Runtime:</strong> {movie.runtime} minutes</p>
    <p><strong>Language:</strong> {movie.original_language.toUpperCase()}</p>
    <p><strong>Budget:</strong>
     ${movie.budget.toLocaleString()}</p>
    
  </div>
</div>

  );
}

export default MovieDetail;
