import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import App from './App'

// const path = window.location.pathname
// console.log(path)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <HashRouter /*basename={path}*/>
    <App />
  </HashRouter>
  // </React.StrictMode>
)
