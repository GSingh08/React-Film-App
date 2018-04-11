import React from "react";
import FilmListItem from "../FilmListItem";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const FilmList = props => {
  // Map over movieData array and display individual movie component
  let filmItems = props.movieData.map(movie => (
    <Link to={`/movies/${movie.id}`}>
      <FilmListItem movieData={movie} key={movie.id} />
    </Link>
  ));

  return (
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>
      <div className="film-row">{filmItems}</div>
    </div>
  );
};

export default FilmList;
