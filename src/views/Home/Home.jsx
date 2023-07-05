import "./index.scss";
import React from "react";
import MovieServices from "../../api/MovieService";
import { useState, useEffect } from "react";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const BASE_URL = "https://api.themoviedb.org/3/";
  const API_KEY = "3e074b6d14a7158d77bae02b97da066e";
  const withBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`;

  async function getMovies() {
    const {
      data: { results },
    } = await MovieServices.getMovies();
    setMovies(results);
  }

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    console.log(movies);
  });

  return (
    <section className="home">
        {movies.map((movie) => (
            <div key={movie.id}>
                {movie.title}
            </div>
        ))}
    </section>
  )

};

export default Home;
