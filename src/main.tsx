import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { StateContextProvider } from './context'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <React.StrictMode>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </React.StrictMode>
  </Router>
)