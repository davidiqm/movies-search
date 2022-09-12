import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

function  Movie({id, title, year, poster}) {
  return (
    <NavLink to={`/detail/${id}`}>
      <div className='bg-white border rounded-lg shadow-lg text-black'>
        {/* IMAGEN */}
        <div className="">
          <img className='w-full rounded-t-lg' src={poster} alt={title} />
        </div>

        {/* CONTENIDO */}
        <div className="px-5 py-2">
          <p className="text-xl font-bold">{title}</p>
          <div className="py-1">
            <p className="text-lg">Año: {year}</p>
          </div>
          </div>
      </div>
    </NavLink>
  )
}

Movie.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
  poster: PropTypes.string
}

export default Movie