import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

// const baseURL = process.env.PUBLIC_URL;
const path = window.location.pathname
console.log(path)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter basename={path}>
      <App />
    </BrowserRouter>
  // </React.StrictMode>
)
