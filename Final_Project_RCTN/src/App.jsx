import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Routes, Route, Router} from "react-router-dom"
import Header from './pages/Header'
import List from './pages/ListMovie'
import Movie from './pages/Movie'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<List/>}/>
        <Route path='/:param' element={<List/>}/>
        <Route path='/movie/:id' element={<Movie/>}/>
      </Routes>
    </>
  )
}

export default App
