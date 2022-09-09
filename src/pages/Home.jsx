import { useState } from 'react';
import Title from '../components/Title.jsx'
import SearchForm from '../components/SearchForm.jsx'
import MovieList from '../components/MoviesList.jsx'

function Home() {
  const [totalResults, setTotalResults] = useState(0)
  const [results, setResults] = useState([])
  const [usedSearch, setUseadSearch] = useState(false)

  const handleResults = (searchResults) => {
    setResults(searchResults)
    setUseadSearch(true)
  }

  const handleTotalResults = (totalResults) => {
    setTotalResults(totalResults)
  }

  const renderResult = () => {
    return results.length === 0
    ? <div>Sin resultados</div>
    : <MovieList movies={results} totalResults={totalResults} />
  }

  return (
    <div>
      {/* TITULO APP */}
      <Title>Buscador de películas</Title>

      {/* BUSCAR FORM */}
      <div className="search-form-wrapper">
        <SearchForm onResults={handleResults} onTotalResults={handleTotalResults} />
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