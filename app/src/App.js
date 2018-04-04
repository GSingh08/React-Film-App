import React, { Component } from "react";
import FilmDetails from "./Components/FilmDetails.js";
import FilmList from "./Components/FilmList.js";
import FilmListItem from "./Components/FilmListItem.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: null,
      movieListLoaded: false
    };
  }

  componentDidMount() {
    fetch("http://localhost:4567/api/movies")
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({
          movieList: response,
          movieListLoaded: true
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="film-library">
        {this.state.movieListLoaded ? (
          <FilmList
            movieList={this.state.movieList}
            movieListLoaded={this.state.movieListLoaded}
          />
        ) : (
          <p> Loading </p>
        )}
        <FilmDetails />
      </div>
    );
  }
}

export default App;
