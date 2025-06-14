import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <div className="poster-container">
          <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
          <div className="rating-circle">{movie.vote_average.toFixed(1)}</div>
        </div>
        <h3>{movie.title}</h3>
      </Link>
    </div>
  );
}

export default MovieCard;

