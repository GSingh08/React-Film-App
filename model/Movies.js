const db = require("../database/connection");

const Movie = {};

Movie.getMovies = () => {
  return db.any("SELECT * FROM movies");
};

Movie.findById = id => {
  return db.one("SELECT * FROM movies where id = $1", [id]);
};

module.exports = Movie;
