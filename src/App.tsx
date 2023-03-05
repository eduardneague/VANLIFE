import { useState, useEffect } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
    <div className = "PAGE_WRAPPER relative min-h-screen">
      <div className="CONTENT_WRAP pb-20">
      <Navbar/>
          <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/about" element = {<About/>}/>
          </Routes>
      </div>
      <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App
