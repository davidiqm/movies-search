import PropTypes from 'prop-types'
import Movie from './Movie'

function MovieList({ movies }) {
  return (
    <div className='grid grid-cols-3 justify-items-center content-center px-7'>
      {
        movies.map(movie => {
          return (
              <div key={movie.imdbID} className='mx-5 w-96 mb-10'>
                <Movie id={movie.imdbID} title={movie.Title} year={movie.Year} poster={movie.Poster} />
              </div>
          )
        })
      }
    </div>
  )
}

MovieList.propTypes = {
  movies: PropTypes.array
}

export default MovieList