import React from 'react'
import FilmListItem from '../FilmListItem'

const FilmList = props => {
  // Map over movieData array and display individual movie component
  let filmItems = props.movieData.map(movie => (
    <FilmListItem movieData={movie} key={movie.id} />
  ))

  return (
    <div className='film-list'>
      <h1 className='section-title'>FILMS</h1>
      <div className='film-row'>
        {filmItems}
      </div>

    </div>
  )
}

export default FilmList
