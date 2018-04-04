import React, { Component } from "react";

class FilmListItem extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        {this.props.list.map(movie => {
          return (
            <li>
              <img class="images" src={movie.poster} />
              {movie.title}
            </li>
          );
        })}
      </div>
    );
  }
}

export default FilmListItem;

////This is another way to do it.

// const FilmListItem = props => {
//   const { title, year, poster_url } = props.movieData;
//   return (
//     <div className="film-list-item">
//       <img className="poster" src={poster_url} />
//
//       <h3 className="movie-title">{title}</h3>
//       <h3 className="movie-year">{year}</h3>
//     </div>
//   );
// };
//
// export default FilmListItem;
