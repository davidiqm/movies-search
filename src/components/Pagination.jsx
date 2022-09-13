import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const API_KEY = "a57904e5"
const isActivePrev = "inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-l  dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400  dark:hover:bg-gray-700 dark:hover:text-white hover:bg-gray-900"
const isActiveNext = "inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-r border-0 border-l border-gray-700  dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white hover:bg-gray-900"

function Pagination({ totalResults, onResults, inputMovie }) {
  const [page, setPage] = useState(1)
  const [numberPages, setNumberPages] = useState(Math.ceil(totalResults / 10))
  const [flag, setFlag] = useState(false)

  // console.log('child rendered', page, numberPages)

  useEffect(() => {
    if (flag) {
      fetch(`https://www.omdbapi.com/?s=${inputMovie}&page=${page}&apikey=${API_KEY}`)
        .then(response => response.json())
        .then(results => {
          // console.log(`http://www.omdbapi.com/?s=${inputMovie}&page=${page}&apikey=${API_KEY}`)
          // console.log(results)

          const { Search = [], totalResults = 0 } = results

          onResults(Search)
        })
        .catch(reason => console.error(reason))
    }
  }, [page])

  const handleNext = () => {
    if (page === numberPages) {
      return
    }
    if (!flag) {
      setFlag(true)
    }
    setPage(page + 1)
  }

  const handlePrev = () => {
    if (page === 1) {
      return
    }
    setPage(page - 1)
  }

  return (
    <div className='my-8'>
      <div className="flex flex-col items-center">

        {/* ENCABEZADO */}
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Mostrando de:{" "}
          <span className="font-semibold text-gray-900 dark:text-white">{page * 10 - 9}</span> a{" "}
          <span className="font-semibold text-gray-900 dark:text-white">{page === numberPages ? totalResults : page * 10}</span> de{" "}
          <span className="font-semibold text-gray-900 dark:text-white">{totalResults}</span> Películas
        </span>

        {/* BOTONES */}
        <div className="inline-flex mt-2 xs:mt-0">
          <button onClick={handlePrev} disabled={page === 1 ? true : false} className={page === 1 ? "inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-l  dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400" : isActivePrev}>
            <svg aria-hidden="true" className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path></svg>
            Prev
          </button>
          <button onClick={handleNext} disabled={page === numberPages ? true : false} className={page === numberPages ? "inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-r border-0 border-l border-gray-700  dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400" : isActiveNext
          }>
            Next
            <svg aria-hidden="true" className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </button>
        </div>
      </div>
    </div>
  )
}

Pagination.propTypes = {
  totalResults: PropTypes.string,
  onResults: PropTypes.func,
  inputMovie: PropTypes.string
}

export default Pagination