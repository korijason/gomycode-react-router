// src/MovieCard.js

import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={movie.imageUrl} alt={movie.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{movie.title}</div>
        <p className="text-gray-700 text-base">{movie.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Link
          to={`/movie/${movie.id}`}
          className="inline-block bg-blue-500 text-white py-2 px-4 rounded-full"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
