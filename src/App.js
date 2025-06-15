import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import MovieDetail from './pages/MovieDetail';
import './App.css';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSearchResults = (results) => {
    setSearchResults(results);
    setSearchPerformed(true);
  };

  const resetSearch = () => {
    setSearchResults([]);
    setSearchPerformed(false);
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar 
          onSearchResults={handleSearchResults} 
          resetSearch={resetSearch} 
        />
        <main className="page-container">
          <Routes>
            <Route
              path="/"
              element={
                <Home 
                  searchResults={searchResults} 
                  searchPerformed={searchPerformed}
                  resetSearch={resetSearch}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;