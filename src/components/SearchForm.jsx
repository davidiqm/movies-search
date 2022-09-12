import { useState } from "react"
import PropTypes from "prop-types"

const API_KEY = "a57904e5"
 
function SearchForm({onResults}) {
    const [inputMovie, setInputMovie] = useState(''); 

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setInputMovie(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // alert(inputMovie)

        fetch(`http://www.omdbapi.com/?s=${inputMovie}&apikey=${API_KEY}`)
        .then(response => response.json())
        .then(results => {
            console.log(results)

            const {Search = [], totalResults = 0} = results
            
            onResults(Search, totalResults)
        })
        .catch(reason => console.error(reason))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="flex">
                    <div className="">
                        <input type="text" placeholder="Buscar película" name="movie" onChange={handleInputChange} className="border border-r-0 rounded-l w-72 px-2 py-2 focus:ring-2 focus:outline-none focus:ring-blue-500" />
                    </div>
                    <div className="border border-l-0 rounded-r px-5 py-2 bg-blue-500 text-white">
                        <button type="submit" className="button is-info">Buscar</button>
                    </div>
                </div>
            </form>

            {/* <p>Search: {inputMovie}</p> */}
        </div>
    )
}

SearchFrom.propTypes = {
    onResults: PropTypes.func
}

export default SearchForm