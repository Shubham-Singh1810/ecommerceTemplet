import React from 'react'
import {Routes, Route} from "react-router-dom"
import About from '../About/About'
import Home from '../Home/Home'

function AllRoutes() {
  return (
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
    </Routes>
  )
}

export default AllRoutes