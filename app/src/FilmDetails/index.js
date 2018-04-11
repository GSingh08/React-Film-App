import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class FilmDetails extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      title: "",
      year: "",
      description: "",
      screenshot_url: "",
      filmId: this.props.match.params.id,
      film: null,
      filmDataLoaded: false
    };
    this.fetchById = this.fetchById.bind(this);
    this.upDateData = this.upDateData.bind(this);
  }

  componentDidMount() {
    this.fetchById();
  }

  componentDidUpdate() {
    if (this.state.filmId !== Number(this.props.match.params.id)) {
      this.upDateData();
    }
  }

  fetchById() {
    fetch(`http://localhost:4567/api/movies/${this.state.filmId}`)
      .then(response => response.json())
      .then(response => {
        this.setState({
          ...response,
          filmDataLoaded: true
        });
      });
  }

  upDateData() {
    this.setState({
      filmId: Number(this.props.match.params.id)
    });
    this.fetchById();
  }

  render() {
    const { title, year, description, screenshot_url } = this.state;
    return (
      <div className="film-details">
        <div>
          <img className="screenshot_url" src={this.state.screenshot_url} />
          <div>
            <span>
              {title}
              {year}
            </span>
          </div>
          <div>
            <span className="description">{description}</span>
          </div>
          <div />
        </div>
      </div>
    );
  }
}

export default FilmDetails;
