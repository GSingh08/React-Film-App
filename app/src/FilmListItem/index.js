import React from "react";

const FilmListItem = props => {
  const { title, year, poster_url } = props.movieData;
  return (
    <div>
      {/* <img className="images" src={poster_url} /> */}
      <div>
        <h3 className="movie-title">{title}</h3>
        {/* <p className="movie-year">{year}</p> */}
      </div>
    </div>
  );
};

export default FilmListItem;
