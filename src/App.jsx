import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home.jsx'
import MovieDetails from './pages/MovieDetails.jsx'

import 'bulma/css/bulma.css'
import './App.css'

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='detail/:movieId' element={<MovieDetails />} />
      </Routes>
    </div>
  )
}

export default App
