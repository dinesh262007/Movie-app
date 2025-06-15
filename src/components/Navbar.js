import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { searchMovies } from '../api/api';
import './Navbar.css';

const Navbar = ({ onSearchResults, resetSearch }) => {
  const [query, setQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) {
      resetSearch();
      return;
    }

    try {
      const response = await searchMovies(query);
      onSearchResults(response.data.results);
      navigate('/');
    } catch (error) {
      console.error('Search error:', error);
      resetSearch();
    }
  };

  const handleHomeClick = () => {
    resetSearch();
    setQuery('');
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo" onClick={handleHomeClick}>
          MovieApp
        </Link>
        
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={handleHomeClick}>Home</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
        </div>
      </div>
      
      <div className="navbar-right">
        <form className="search-bar" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">
            <span role="img" aria-label="search">🔍</span>
          </button>
        </form>
        
        <div 
          className={`hamburger ${isMenuOpen ? 'open' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;