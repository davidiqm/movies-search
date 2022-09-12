import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'

import BackButton from '../components/BackButton.jsx'
import { Title as MovieTitle } from '../components/Title.jsx'

const API_KEY = "a57904e5"

function MovieDetails() {
  const [movie, setMovie] = useState({})
  const {id} = useParams()

  const fetchMovie = async (id) => {
    try {
      fetch(`http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
      .then(response => response.json())
      .then(movie => {
          console.log(movie)
          setMovie(movie)
      })
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    console.log(id)
    fetchMovie(id)
  }, [])

  const { Title, Poster, Actors, Metascore, Plot } = movie

  return (
    <div className='pb-10'>
      <div className='max-w-5xl mx-auto bg-white rounded-b-lg text-black shadow-xl'>
        <div className='pt-5'>
          <BackButton  />
        </div>
        <div className='py-5 pb-10 px-28'>
          <MovieTitle>{Title}</MovieTitle>
          <img src={Poster} alt={Poster} className="mx-auto my-3" />
          <h3>Reparto: {Actors}</h3>
          <span>Puntaje Metascore: {Metascore}</span>
          <p>Trama: {Plot}</p>
        </div>
      </div>
    </div>
  )

}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
    isExact: PropTypes.bool,
    path: PropTypes.string,
    url: PropTypes.string
  })
}

export default MovieDetails