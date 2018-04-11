import React, { Component } from 'react'
import './App.css'
import FilmList from './FilmList'
import FilmDetails from './FilmDetails'

class App extends Component {
  constructor (props) {
    super()
    this.state = {
      apiDataLoaded: false,
      movieData: null
    }
  }

  // fetch data from our api
  componentDidMount () {
    fetch('http://localhost:4567/api/movies')
      .then(res => res.json())
      .then(res => {
        this.setState({
          apiDataLoaded: true,
          movieData: res
        })
      })
  }

  render () {
    return (
      <div className='film-library'>
        {this.state.apiDataLoaded ? (
          <FilmList movieData={this.state.movieData} />
        ) : (
          <p>loading</p>
        )}
        <FilmDetails />
      </div>
    )
  }
}

export default App
