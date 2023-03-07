import React, { useState, useEffect } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import {ContextProvider} from './ContextProvider'

import Home from '../pages/Home'
import About from '../pages/About'
import Vans from '../pages/Vans'
import VanPage from '../pages/VanPage'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import './server' // Mirage.JS Mock API Server

const App: React.FC = (): JSX.Element => {
  return (
    <ContextProvider>
      <BrowserRouter>
      <div className = "PAGE_WRAPPER relative min-h-screen bg-orange-100">
        <div className="CONTENT_WRAP pb-20">
        <Navbar/>
            <Routes>
              <Route path = "/" element = {<Home/>}/>
              <Route path = "/about" element = {<About/>}/>
              <Route path = "/vans" element = {<Vans/>}/>
              <Route path = "/vans/:van_id" element = {<VanPage/>}/>
            </Routes>
        </div>
        <Footer/>
      </div>
      </BrowserRouter>
    </ContextProvider>
  )
}

export default App
