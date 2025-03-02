import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import MovieCard from './MovieCard';
import axios from 'axios';

const Movies = () => {
  const [movies, setMovies] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const moviesFromLocalStarage = JSON.parse(localStorage.getItem('movies'));
    if (moviesFromLocalStarage) {
      setWatchlist(moviesFromLocalStarage);
    }
  }, []);

  const addToWatchList = (movie) => {
    const updatedWatchlist = [...watchlist, movie];
    setWatchlist(updatedWatchlist);
    localStorage.setItem('movies', JSON.stringify(updatedWatchlist));
  };
  console.log(watchlist);

  const removeFromWatchlist = (movie) => {
    let filteredWatchlist = watchlist.filter((item) => item.id !== movie.id);
    setWatchlist(filteredWatchlist);
    localStorage.setItem('movies', JSON.stringify(filteredWatchlist));
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=6e92fb894ebdfbd1e275584ed8a44b47&language=en-US&page=${pageNumber}`
      )
      .then((response) => {
        setMovies(response.data.results);
      });
  }, [pageNumber]);

  const handleNext = () => {
    setPageNumber((prev) => prev + 1);
  };
  const handlePrev = () => {
    if (pageNumber > 1) setPageNumber((prev) => prev - 1);
  };
  return (
    <div className="my-10 ">
      <div>
        <h1 className="text-4xl font-semibold text-center text-blue-600">TRENDING </h1>
      </div>
      <div className="flex flex-wrap items-center justify-left gap-8 mt-10 mx-10">
        {movies?.map((movie, index) => {
          return (
            <MovieCard
              key={index}
              movie={movie}
              addToWatchList={addToWatchList}
              removeFromWatchlist={removeFromWatchlist}
              watchlist={watchlist}
            />
          );
        })}
      </div>
      <Pagination nextPageFn={handleNext} prevPageFn={handlePrev} pageNumber={pageNumber} />
    </div>
  );
};

export default Movies;
