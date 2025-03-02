import React, { useEffect, useState } from 'react';
import genreids  from '../constants/utils';

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);
  

  useEffect(() => {
    const moviesFromLocalStarage = JSON.parse(localStorage.getItem('movies'));
    if (moviesFromLocalStarage) {
      setWatchlist(moviesFromLocalStarage);
    }
  }, []);


  const genre = (id) => genreids[id];

  return (
    <div className="overflow-auto  rounded-lg border-gray-200 shadow-md m-5">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-4 font-medium text-gray-900">Name</th>
            <th>
              <div className="flex">
                <div>
                  <i className="fa-solid fa-arrow-up hover:cursor-pointer" />
                  <span>Ratings</span>
                  <i className="fa-solid fa-arrow-down   hover:cursor-pointer" />
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
          {watchlist.map((movie) => (
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
              <td className="pl-6 py-4">{genre(movie.genre_ids[0])}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Watchlist;
