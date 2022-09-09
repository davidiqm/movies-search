import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Movie({id, title, year, poster}) {
  return (
    <Link to={`/detail/${id}`} className='card'>
      {/* IMAGEN */}
      <div className="card-image">
        <figure className='image'>
          <img src={poster} alt={title} />
        </figure>
      </div>

      {/* CONTENIDO */}
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title">{title}</p>
            <p className="subtitle">{year}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

Movie.propTypes = {
  title: PropTypes.string,
  year: PropTypes.string,
  poster: PropTypes.string
}

export default Movie