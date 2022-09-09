import PropTypes from 'prop-types'
import Movie from './Movie'

function MovieList({ movies, totalResults }) {
  return (
    <div className='movies-list'>
      {
        movies.map(movie => {
          return (
              <div key={movie.imdbID} className='movies-list-item'>
                <Movie id={movie.imdbID} title={movie.Title} year={movie.Year} poster={movie.Poster} />
              </div>
          )
        })
      }

    <h3>Número de resultados: {totalResults}</h3>
    </div>
  )
}

MovieList.propTypes = {
  movies: PropTypes.array
}

export default MovieList