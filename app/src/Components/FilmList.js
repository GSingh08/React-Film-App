import React, { Component } from "react";
import FilmListItem from "./FilmListItem.js";

class FilmList extends Component {
  render() {
    return (
      <div className="film-library" onscroll="myFunction()">
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          <FilmListItem list={this.props.movieList} />
        </div>
      </div>
    );
  }
}

export default FilmList;

//Can do it this way because you don't need to change the state of it.

// const FilmList = props => {
//   let filmItems = propsmovieData.map(movie => (
//     <FilmListItem movieData={movie} key={movie.id} />
//   ));
//
//   return (
//     <div className="film-list">
//       <h1 className="section-title">FILMS</h1>
//       <div className="film-row">{filmItems}</div>
//     </div>
//   );
// };
