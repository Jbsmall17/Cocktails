import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Route,Routes} from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Error from "./Pages/Error"
import SingleCocktail from './Pages/SingleCocktail'
import Navbar from './component/Navbar'

function App() {

  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error />} />
        <Route path="/cocktails/:id" element={<SingleCocktail />} />
      </Routes>
    </main>
  )
}

export default App
