const pgp = require("pg-promise")({});

const connectionURL = "postgres://localhost:5432/film_app";
// const connection = pgp(connectionURL);
const db = pgp(connectionURL);

module.exports = db;
