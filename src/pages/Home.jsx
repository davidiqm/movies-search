import { useState } from 'react';
import { Title } from '../components/Title.jsx'
import SearchForm from '../components/SearchForm.jsx'
import MovieList from '../components/MoviesList.jsx'

function Home() {
  const [totalResults, setTotalResults] = useState(0)
  const [results, setResults] = useState([])
  const [usedSearch, setUseadSearch] = useState(false)

  const handleResults = (searchResults, totalResults) => {
    setResults(searchResults)
    setTotalResults(totalResults)
    setUseadSearch(true)
  }

  const renderResult = () => {
    return results.length === 0
    ? <div>Sin resultados</div>
    : 
    <div className='mt-8'>
      <MovieList movies={results} />
      <h3>Número de resultados: {totalResults}</h3>
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