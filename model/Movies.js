const db = require("../database/connection");

const Movie = {};

Movie.getMovies = () => {
  return db.any("SELECT * FROM movies");
};

module.exports = Movie;
