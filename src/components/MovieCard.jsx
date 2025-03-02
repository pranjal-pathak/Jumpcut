import React from 'react';

const MovieCard = ({ movie, addToWatchList, watchlist, removeFromWatchlist }) => {
  const isPresentInWatchlist = (movie) => {
    for (let item of watchlist) {
      if (movie.id === item.id) {
        return true; // Exits the function immediately when a match is found
      }
    }
    return false; // If no match, return false
  };

  return (
    <div
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-lg overflow-hidden hover:scale-105 transition-transform duration-200 relative"
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

      {/* Title */}
      <div className="absolute bottom-0 w-full text-center text-white text-lg font-semibold bg-black/60 py-2">
        {movie.title}
      </div>

      {/* Watchlist Button */}
      <div className="absolute top-2 right-2">
        {isPresentInWatchlist(movie) ? (
          <button
            className="text-red-500 text-2xl hover:text-red-600 transition duration-200"
            onClick={() => removeFromWatchlist(movie)}
          >
            ❌
          </button>
        ) : (
          <button
            className="text-white text-2xl hover:text-gray-300 transition duration-200"
            onClick={() => addToWatchList(movie)}
          >
            😍
          </button>
        )}
      </div>
    </div>
  );

};

export default MovieCard;

//  `https://image.tmdb.org/t/p/original${movie.backdrop}`;
