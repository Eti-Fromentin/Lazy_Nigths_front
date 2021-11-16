import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import axios from 'axios';

import MovieCard from './MovieCard';

import 'swiper/css';
import './Slider.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Pagination, Navigation]);

function FetchMovies({ category }) {
  const [fetchedMovies, setFetchedMovies] = useState([]);
  const [moviesFavorites, setMoviesFavorites] = useState();
  const [refresh, setRefresh] = useState(false);
  const randomPageLazy = getRandomInt(500);
  const randomPageHappy = getRandomInt(250);
  const randomPageBlue = getRandomInt(50);
  const callParameters = getParameters(category);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function getParameters(category) {
    if (category === 'lazy') {
      return `&with_genres=35&with_genres=28&with_genres=12&with_genres=10749&sort_by=vote_count.desc&page=${randomPageLazy}`;
    } else if (category === 'happy') {
      return `&with_genres=35&with_genres=28&with_genres=12&without_genres=10749&sort_by=vote_count.desc&page=${randomPageHappy}`;
    } else if (category === 'blue') {
      return `&with_genres=10749&without_genres=35,28,80,99,27,10751,10770&sort_by=popularity.desc&page=${randomPageBlue}`;
    }
  }

  function Refresh() {
    setRefresh(!refresh);
  }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=d174ca19b8b8536a5dcd5988d5132531${callParameters}&primary_release_date.gte=1970-01-01&with_original_language=en`,
      )
      .then((response) => response.data)
      .then((data) => setFetchedMovies(data.results));
    axios
      .get(`http://localhost:8000/api/favorites/movie`)
      .then((response) => response.data)
      .then((data) => setMoviesFavorites(data));
  }, [refresh]);

  useEffect(() => {}, [moviesFavorites]);

  return (
    <div>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper"
        >
          {fetchedMovies.length &&
            fetchedMovies
              .filter((movie) => movie.poster_path)
              .slice(0, 10)
              .map((movie, index) => (
                <SwiperSlide key={index}>
                  <MovieCard
                    key={index}
                    title={movie.title}
                    desc={movie.overview}
                    img={movie.poster_path}
                    id={movie.id}
                    listFavorites={moviesFavorites}
                  />
                </SwiperSlide>
              ))}
        </Swiper>
        <button onClick={Refresh}>Refresh</button>
      </div>
    </div>
  );
}

export default FetchMovies;
