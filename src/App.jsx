import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home.jsx'
import MovieDetails from './pages/MovieDetails.jsx'
import NotFound from './pages/NotFound.jsx'

import './App.css'

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='detail/:id' element={<MovieDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
