import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import { ContextComp } from './Context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextComp>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextComp>
  </React.StrictMode>,
)
