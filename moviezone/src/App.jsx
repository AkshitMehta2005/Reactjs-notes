import React, { useState } from "react";
import { movies } from "./data";

const App = () => {
  const [moviesList, setMoviesList] = useState(movies);

  const filterCategory = (cat) => {
    // Filter the movies based on the category
    const filteredMovies = movies.filter((movie) => movie.category === cat);
    setMoviesList(filteredMovies);  // Update the state with filtered movies
  };

  return (
    <div className="my-3 text-center">
      <div>
      <button  onClick={() => setMoviesList(movies)} type="button" className="btn btn-outline-primary mx-3">
        All
      </button>
      <button onClick={() => filterCategory("Action")} type="button" className="btn btn-outline-secondary mx-3">
        Action
      </button>
      <button onClick={() => filterCategory("Thriller")} type="button" className="btn btn-outline-success mx-3">
        Thriller
      </button>
      <button onClick={() => filterCategory("Animation")} type="button" className="btn btn-outline-danger mx-3">
        Animation
      </button>
      <button onClick={() => filterCategory("Horror")} type="button" className="btn btn-outline-warning mx-3">
        Horror
      </button>
      <button onClick={() => filterCategory("Drama")} type="button" className="btn btn-outline-info mx-3">
        Drama
      </button>
      <button onClick={() => filterCategory("Sci-Fi")} type="button" className="btn btn-outline-light mx-3">
        Sci-Fi
      </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
          textAlign: "center",
          margin: "auto",
          marginTop: "2rem",
        }}
      >
        {moviesList.map((data) => (
          <div key={data.id} style={{ maxWidth: "250px"}}>
            <div style={{ padding: "10px" }} className="hover_effect">
              <img
                src={data.poster_path}
                alt=""
                style={{
                  width: "200px",
                  border: "1px solid yellow",
                  borderRadius: "10px",
                }}
              />
            </div>
            <div>
              <h5>{data.title}</h5>
            </div>
            <div>
              <p>{data.release_date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
