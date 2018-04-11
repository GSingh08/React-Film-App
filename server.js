const express = require("express");
const app = express();
const Movie = require("./model/Movies");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/api/movies", (request, response) => {
  Movie.getMovies().then(movie => {
    response.json(movie);
  });
});

app.listen(4567, () => console.log("Example app listening on port 4567!"));
