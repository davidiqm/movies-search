import { useState } from 'react';

import { Title } from '../components/Title'
import SearchForm from '../components/SearchForm'
import MovieList from '../components/MoviesList'
import Pagination from '../components/Pagination'

function Home() {
  const [totalResults, setTotalResults] = useState(0)
  const [results, setResults] = useState([])
  const [usedSearch, setUseadSearch] = useState(false)
  const [inputMovie, setInputMovie] = useState('')
  const [newSearch, setNewSearch] = useState(true)

  const handleResults = (searchResults, totalResults, inputMovie) => {
    setResults(searchResults)
    setTotalResults(totalResults)
    setUseadSearch(true)
    setInputMovie(inputMovie)
    setNewSearch(!newSearch)
  }

  const handlePage = (results) => {
    setResults(results)
  }

  const renderResult = () => {
    return results.length === 0
      ? <div>Sin resultados</div>
      :
      <div className='mt-8'>
        <MovieList movies={results} />
        {/* <h3 className='my-5'>Número de resultados: {totalResults}</h3> */}
        <Pagination key={newSearch} totalResults={totalResults} onResults={handlePage} inputMovie={inputMovie} />
      </div>
  }

  return (
    <div className='pt-10'>
      {/* TITULO APP */}
      <Title>Buscador de películas</Title>

      {/* BUSCAR FORM */}
      <div className="flex justify-center my-3">
        <SearchForm onResults={handleResults} />
      </div>

      {/* LISTADO DE PELICULAS */}
      <div>
        {usedSearch
          ? renderResult()
          : <small>Usa el cuadro de búsqueda para buscar una película</small>
        }
      </div>
    </div>
  )
}

export default Home