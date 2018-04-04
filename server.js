const express = require('express')
const app = express()

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

const movies = [
  {
    id: 1,
    title: 'Titanic',
    year: 2007,
    description:
      '84 years later, a 100 year-old woman named Rose DeWitt Bukater tells the story to her granddaughter Lizzy Calvert, Brock Lovett, Lewis Bodine, Bobby Buell and Anatoly Mikailavich on the Keldysh about her life set in April 10th 1912, on a ship called Titanic when young Rose boards the departing ship with the upper-class passengers and her mother, Ruth DeWitt Bukater, and her fiancé, Caledon Hockley. Meanwhile, a drifter and artist named Jack Dawson and his best friend Fabrizio De Rossi win third-class tickets to the ship in a game. And she explains the whole story from departure until the death of Titanic on its first and last voyage April 15th, 1912 at 2:20 in the morning.',
    poster_url:
      'https://imgc.allpostersimages.com/img/posters/titanic_u-L-F4S6CQ0.jpg?src=gp&w=300&h=375'
  },
  {
    id: 2,
    title: 'Black Panther',
    year: 2018,
    description:
      "After the death of his father, T'Challa returns home to the African nation of Wakanda to take his rightful place as king. When a powerful enemy suddenly reappears, T'Challa's mettle as king -- and as Black Panther -- gets tested when he's drawn into a conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people.",
    poster_url:
      'https://ia.media-imdb.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
  },
  {
    id: 3,
    title: 'Silence of The Lambs',
    description:
      "Jodie Foster stars as Clarice Starling, a top student at the FBI's training academy. Jack Crawford (Scott Glenn) wants Clarice to interview Dr. Hannibal Lecter (Anthony Hopkins), a brilliant psychiatrist who is also a violent psychopath, serving life behind bars for various acts of murder and cannibalism. Crawford believes that Lecter may have insight into a case and that Starling, as an attractive young woman, may be just the bait to draw him out.",
    year: 1992,
    poster_url: 'https://images-na.ssl-images-amazon.com/images/I/41dJipyydvL.jpg'
  },
  {
    id: 4,
    title: 'No Country for Old Men',
    description:
      'While out hunting, Llewelyn Moss (Josh Brolin) finds the grisly aftermath of a drug deal. Though he knows better, he cannot resist the cash left behind and takes it with him. The hunter becomes the hunted when a merciless killer named Chigurh (Javier Bardem) picks up his trail. Also looking for Moss is Sheriff Bell (Tommy Lee Jones), an aging lawman who reflects on a changing world and a dark secret of his own, as he tries to find and protect Moss.',
    year: 2007,
    poster_url: 'https://images-na.ssl-images-amazon.com/images/I/51U1qJ70-ML.jpg'
  },
  {
    id: 5,
    title: 'Kill Bill: Volume 1',
    description: "The lead character, called 'The Bride,' was a member of the Deadly Viper Assassination Squad, led by her lover 'Bill.' Upon realizing she was pregnant with Bill's child, 'The Bride' decided to escape her life as a killer. She fled to Texas, met a young man, who, on the day of their wedding rehearsal was gunned down by an angry and jealous Bill (with the assistance of the Deadly Viper Assassination Squad). Four years later, 'The Bride' wakes from a coma, and discovers her baby is gone. She, then, decides to seek revenge upon the five people who destroyed her life and killed her baby. The saga of Kill Bill Volume I begins.",
    year: 2003,
    poster_url: 'https://ia.media-imdb.com/images/M/MV5BYTczMGFiOWItMjA3Mi00YTU5LWIwMDgtYTEzNjRkNDkwMTE2XkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg',
    screenshot_url: 'http://www.digitaldingus.com/reviews/hd/0003/kbvol13_fullres.jpg'
  },
  {
    id: 6,
    title: 'Cloud Atlas',
    description: 'Everything is connected: an 1849 diary of an ocean voyage across the Pacific; letters from a composer to his lover; a thriller about a conspiracy at a nuclear power plant; a farce about a publisher in a nursing home; a rebellious clone in futuristic Korea; and the tale of a tribe living on post-apocalyptic Hawaii far in the future.',
    year: 2012,
    poster_url: 'https://ia.media-imdb.com/images/M/MV5BMTczMTgxMjc4NF5BMl5BanBnXkFtZTcwNjM5MTA2OA@@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
    screenshot_url: 'https://static01.nyt.com/images/2012/10/26/arts/26CLOUD1/26CLOUD1-jumbo.jpg'
  },
  {
    id: 7,
    title: "Monster's Ball",
    description: "Set in the Southern United States, 'Monster's Ball' is a tale of a racist white man, Hank, who falls in love with a black woman named Leticia. Ironically Hank is a prison guard working on Death Row who executed Leticia's husband. Hank and Leticia's interracial affair leads to confusion and new ideas for the two unlikely lovers.",
    year: 2001,
    poster_url: 'https://ia.media-imdb.com/images/M/MV5BNTkyMzk3NTYtY2FiYy00MWIwLWIyYzctODIzNzVlOGQxZmYwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
    screenshot_url: 'https://i.ytimg.com/vi/Y-94HNhLJBs/maxresdefault.jpg'
  },
  {
    id: 8,
    title: 'Apocalypto',
    description: 'In the Maya civilization, a peaceful tribe is brutally attacked by warriors seeking slaves and human beings for sacrifice for their gods. Jaguar Paw hides his pregnant wife and his son in a deep hole nearby their tribe and is captured while fighting with his people. An eclipse spares his life from the sacrifice and later he has to fight to survive and save his beloved family.',
    year: 2006,
    poster_url: 'https://ia.media-imdb.com/images/M/MV5BMzhmNGMzMDMtZDM0Yi00MmVmLWExYjAtZDhjZjcxZDM0MzJhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
    screenshot_url: 'http://s2.dmcdn.net/Inac0/1280x720--ib.jpg'
  },
  {
    id: 9,
    title: 'Interview with the Vampire: The Vampire Chronicles',
    description: "It hasn't even been a year since a plantation owner named Louis lost his wife in childbirth. Both his wife and the infant died, and now he has lost his will to live. A vampire named Lestat takes a liking to Louis and offers him the chance to become a creature of the night: a vampire. Louis accepts, and Lestat drains Louis' mortal blood and then replaces it with his own, turning Louis into a vampire. Louis must learn from Lestat the ways of the vampire.",
    year: 1994,
    poster_url: 'https://ia.media-imdb.com/images/M/MV5BYThmYjJhMGItNjlmOC00ZDRiLWEzNjUtZjU4MjA3MzY0MzFmXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_SY1000_CR0,0,667,1000_AL_.jpg',
    screenshot_url: 'https://movieplayer.net-cdn.it/images/2009/08/23/claudia-kirsten-dunst-louis-brad-pitt-e-lestat-tom-cruise-in-una-scena-del-film-interview-with-the-vampire-127952.jpg'
  },
  {
    id: 10,
    title: 'V for Vendetta',
    description: "In a future British tyranny, a shadowy freedom fighter, known only by the alias of 'V', plots to overthrow it with the help of a young woman.",
    year: 2005,
    poster_url: 'https://ia.media-imdb.com/images/M/MV5BYzllMjJkODAtYjMwMi00YmNhLWFhYzAtZjZjODg5YzEwOGUwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY999_CR0,0,679,999_AL_.jpg',
    screenshot_url: 'https://nerdist.com/wp-content/uploads/2016/05/v-for-vendetta-FEAT.jpg'
  }
]
app.get('/api/movies', (req, res) => res.json(movies))

app.listen(4567, () => console.log('Example app listening on port 4567!'))
