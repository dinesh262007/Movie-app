import React, { useEffect, useState } from 'react';
import { fetchPopularMovies, searchMovies } from '../api/api';
import MovieCard from '../components/MovieCard';
import { useSearchParams } from 'react-router-dom';

function Home() {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search');

  useEffect(() => {
    if (searchQuery) {
      searchMovies(searchQuery).then(res => setMovies(res.data.results));
    } else {
      fetchPopularMovies().then(res => setMovies(res.data.results));
    }
  }, [searchQuery]);

  return (
    <div className="movie-list">
      {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  );
}

export default Home;


