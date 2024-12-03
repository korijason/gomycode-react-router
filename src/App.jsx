// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieDetail from './components/MovieDetails';
import MovieCard from './components/MovieCard';
import movies from './movies';

function App() {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-6">Movie List</h1>
        <Routes>
          <Route
            path="/"
            element={
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {movies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            }
          />
          <Route path="/movie/:movieId" element={<MovieDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
