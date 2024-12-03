// src/MovieDetail.js

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import movies from '../movies';

function MovieDetail() {
  const { movieId } = useParams();
  const movie = movies.find((m) => m.id === parseInt(movieId));

  if (!movie) {
    return <div>Movie not found!</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">{movie.title}</h2>
      <p className="text-lg text-gray-700 mb-4">{movie.description}</p>
      <div className="w-full h-64 mb-4">
        <iframe
          width="100%"
          height="100%"
          src={movie.trailerUrl}
          title={movie.title}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <Link
        to="/"
        className="inline-block bg-blue-500 text-white py-2 px-4 rounded-full"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default MovieDetail;
