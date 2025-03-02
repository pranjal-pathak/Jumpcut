import { useEffect, useState } from 'react';
import axios from 'axios';

const Banner = () => {
  const [bannerImage, setBannerImage] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/trending/movie/day?api_key=6e92fb894ebdfbd1e275584ed8a44b47&language=en-US&page=1'
      )
      .then((response) => {
          console.log('Films', response.data);
          const min = 0;
          const max = response.data.results.length;
          const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
          const firstMovie = response.data.results[randomIndex];
          const firstMovieTitle = firstMovie.title;
          const firstMoviePoster = firstMovie.backdrop_path;
          setBannerImage(`https://image.tmdb.org/t/p/original/${firstMoviePoster}`)
          setTitle(firstMovieTitle.toUpperCase());
      });
  }, []);

  return (
    <div
      className="h-[20vh] md:h-[85vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      
      <div className="text-white w-full text-center text-8xl">{title}</div>
    </div>
  );
};

export default Banner;
