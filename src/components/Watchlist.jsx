import React, { useEffect, useState } from 'react';
import genreids from '../constants/utils';

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [search, setSearch] = useState('');
  const [genreList, setGenreList] = useState([]);
  const [currGenre, setCurrGenre] = useState('All');

  useEffect(() => {
    const moviesFromLocalStarage = JSON.parse(localStorage.getItem('movies'));
    if (moviesFromLocalStarage) {
      setWatchlist(moviesFromLocalStarage);
    }
  }, []);

  const getGenre = (id) => genreids[id];  

  const handleAscendingRatings = () => {
    const sortAscending = watchlist.sort(
      (movieA, movieB) => movieA.vote_average - movieB.vote_average
    );
    setWatchlist([...sortAscending]);
  };

  const handleDescendingRatings = () => {
    const sortDescending = watchlist.sort(
      (movieA, movieB) => movieB.vote_average - movieA.vote_average
    );
    setWatchlist([...sortDescending]);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    let tempGenreList = watchlist.map((movie) => getGenre(movie.genre_ids[0]));
    tempGenreList = new Set(tempGenreList);
    setGenreList(['All', ...tempGenreList]);
  }, [watchlist]);

  const handleCurrGene = (genre) => {
    setCurrGenre(genre);
  };

  return (
    <div>
      <div className="flex justify-center my-10">
        <input
          type="text"
          placeholder="Search movie"
          className="h-[3rem] w-[18rem] px-4 bg-gray-200 outline-none border-gray-300 rounded-lg"
          onChange={handleSearch}
          value={search}
        />
      </div>
      <div className="flex flex-wrap justify-end items-center gap-4 px-8 py-4">
        {genreList.map((genre) => {
          const isActive = currGenre === genre;
          const baseStyle =
            'bg-gray-200 border-dotted border-gray-900 px-2 py-1 rounded-lg text-sm text-black';
          const bg = isActive ? 'bg-blue-300' : 'bg-gray-200';
          return (
            <div
              className={`${baseStyle} ${bg} hover:cursor-pointer`}
              onClick={() => handleCurrGene(genre)}
            >
              {genre}
            </div>
          );
        })}
      </div>
      <div className="overflow-auto  rounded-lg border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-4 font-medium text-gray-900">Name</th>
              <th>
                <div className="flex">
                  <div>
                    <i
                      className="fa-solid fa-arrow-up hover:cursor-pointer px-1"
                      onClick={handleAscendingRatings}
                    />
                    Ratings
                    <i
                      className="fa-solid fa-arrow-down   hover:cursor-pointer px-1"
                      onClick={handleDescendingRatings}
                    />
                  </div>
                </div>
              </th>
              <th>
                <div className="flex">
                  <div>Popularity</div>
                </div>
              </th>
              <th>
                <div className="flex">
                  <div>Genre</div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {watchlist
              .filter((movie) => {
                if (currGenre === 'All') {
                  return true;
                } else {
                  return getGenre(movie.genre_ids[0]) === currGenre;
                }
              })
              .filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()))
              .map((movie) => (
                <tr className="hover:bg-gray-50" key={movie.id}>
                  <td className="flex items-center px-6 py-4 font-normal text-gray-900 gap-4">
                    <img
                      className="h-[6rem] w-[10rem] object-fit"
                      src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                      alt="poster"
                    />
                    <div className="font-md text-gray-700 text-lg">{movie.title}</div>
                  </td>
                  <td className="pl-6 py-4">{movie.vote_average}</td>
                  <td className="pl-6 py-4">{movie.popularity}</td>
                  <td className="pl-6 py-4">{getGenre(movie.genre_ids[0])}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Watchlist;
