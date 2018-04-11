CREATE DATABASE film_app;

\c film_app;

DROP TABLE movies;

CREATE TABLE movies (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(255),
  year INTEGER,
  description VARCHAR (1000),
  poster_url VARCHAR (255),
  screenshot_url VARCHAR (255)
);
