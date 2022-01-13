import React, { useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  async function fetchMoviesHandler() {
    setIsLoading(true);
    try {
      const response = await fetch("https://swapi.py4e.com/api/films/");
      if (!response.ok || response.status !== 200) {
        throw new Error("Failed to load movies");
      }
      const moviesData = await response.json();
      const transformedMovies = moviesData.results.map((m) => {
        return {
          id: m.episode_id,
          title: m.title,
          openingText: m.opening_crawl,
          releaseDate: m.release_date,
        };
      });
      setMovies(transformedMovies);
    } catch (e) {
      alert(e.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 ? (
          <MoviesList movies={movies} />
        ) : !isLoading && movies.length === 0 ? (
          <p>Found no movies</p>
        ) : (
          <p>Loading...</p>
        )}
      </section>
    </React.Fragment>
  );
}

export default App;
