import React, { useEffect, useState } from 'react';
import { fetchPopularMovies } from '../api/api';
import MovieCard from '../components/MovieCard';

const Home = ({ searchResults, searchPerformed, resetSearch }) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const response = await fetchPopularMovies();
        setPopularMovies(response.data.results);
      } catch (error) {
        console.error('Error loading movies:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const moviesToDisplay = searchPerformed ? searchResults : popularMovies;

  if (isLoading) {
    return <div className="loading">Loading movies...</div>;
  }

  return (
    <div className="movie-list">
      {moviesToDisplay.length > 0 ? (
        moviesToDisplay.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))
      ) : searchPerformed ? (
        <div className="no-results">
          No movies found. Try a different search.
        </div>
      ) : (
        <div className="no-results">
          No popular movies available at the moment.
        </div>
      )}
    </div>
  );
};

export default Home;