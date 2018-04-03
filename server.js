const express = require("express");
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const movies = [
  {
    id: 1,
    title: "Titanic",
    year: 2007,
    description:
      "84 years later, a 100 year-old woman named Rose DeWitt Bukater tells the story to her granddaughter Lizzy Calvert, Brock Lovett, Lewis Bodine, Bobby Buell and Anatoly Mikailavich on the Keldysh about her life set in April 10th 1912, on a ship called Titanic when young Rose boards the departing ship with the upper-class passengers and her mother, Ruth DeWitt Bukater, and her fiancé, Caledon Hockley. Meanwhile, a drifter and artist named Jack Dawson and his best friend Fabrizio De Rossi win third-class tickets to the ship in a game. And she explains the whole story from departure until the death of Titanic on its first and last voyage April 15th, 1912 at 2:20 in the morning.",
    poster_url:
      "https://imgc.allpostersimages.com/img/posters/titanic_u-L-F4S6CQ0.jpg?src=gp&w=300&h=375"
  },
  {
    id: 2,
    title: "Black Panther",
    year: 2018,
    description:
      "After the death of his father, T'Challa returns home to the African nation of Wakanda to take his rightful place as king. When a powerful enemy suddenly reappears, T'Challa's mettle as king -- and as Black Panther -- gets tested when he's drawn into a conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    id: 3,
    title: "Jodie Foster",
    description:
      "Jodie Foster stars as Clarice Starling, a top student at the FBI's training academy. Jack Crawford (Scott Glenn) wants Clarice to interview Dr. Hannibal Lecter (Anthony Hopkins), a brilliant psychiatrist who is also a violent psychopath, serving life behind bars for various acts of murder and cannibalism. Crawford believes that Lecter may have insight into a case and that Starling, as an attractive young woman, may be just the bait to draw him out.",
    year: 1992,
    poster: "https://images-na.ssl-images-amazon.com/images/I/41dJipyydvL.jpg"
  },
  {
    id: 4,
    title: "No Country for Old Men",
    description:
      "While out hunting, Llewelyn Moss (Josh Brolin) finds the grisly aftermath of a drug deal. Though he knows better, he cannot resist the cash left behind and takes it with him. The hunter becomes the hunted when a merciless killer named Chigurh (Javier Bardem) picks up his trail. Also looking for Moss is Sheriff Bell (Tommy Lee Jones), an aging lawman who reflects on a changing world and a dark secret of his own, as he tries to find and protect Moss.",
    year: 2007,
    poster: "https://images-na.ssl-images-amazon.com/images/I/51U1qJ70-ML.jpg"
  }
];
app.get("/api/movies", (req, res) => res.json(movies));

app.listen(4567, () => console.log("Example app listening on port 4567!"));
