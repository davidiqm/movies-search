import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const API_KEY = "a57904e5"

function MovieDetails(props) {
  const [movie, setMovie] = useState({})

  const fetchMovie = async ({id}) => {
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

  const goBack = () => {
    window.history.back()
  }

  useEffect(() => {
    console.log(props.params)
    // fetchMovie({id})
  }, [])

  const { Title, Poster, Actors, Metascore, Plot } = movie

  return (
    <div>
      <button onClick={goBack}>Ir a Casa</button>
      <h1>{Title}</h1>
      <img src={Poster} alt={Poster} />
      <h3>{Actors}</h3>
      <span>{Metascore}</span>
      <p>{Plot}</p>
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