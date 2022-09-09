import { useState } from "react"

const API_KEY = "a57904e5"
 
export default function SearchForm(props) {
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
            
            props.onResults(Search)
            props.onTotalResults(totalResults)
        })
        .catch(reason => console.error(reason))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input type="text" className="input" placeholder="Buscar película" name="movie" onChange={handleInputChange} />
                    </div>
                    <div className="control">
                        <button type="submit" className="button is-info">Buscar</button>
                    </div>
                </div>
            </form>

            {/* <p>Search: {inputMovie}</p> */}
        </div>
    )
}