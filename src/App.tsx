import React from 'react'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements, 
  Route
} from 'react-router-dom'

import {ContextProvider} from './ContextProvider'

import Home from '../pages/Home/Home'
import About from '../pages/About/About'

import Vans, {loader as vansLoader} from '../pages/Vans/Vans'
import VanPage, {loader as vanPageLoader} from '../pages/Vans/VanPage'

import HostLayout from '../pages/Host/HostLayout'
import HostVanLayout from '../pages/Host/Host Vans/HostVanLayout'
import Dashboard from '../pages/Host/Dashboard'
import Income from '../pages/Host/Income'
import Reviews from '../pages/Host/Reviews'
import HostVans from '../pages/Host/Host Vans/HostVans'
import HostVanPricing from '../pages/Host/Host Vans/HostVanPricing'
import HostVanDetails from '../pages/Host/Host Vans/HostVanDetails'
import HostVanPhotos from '../pages/Host/Host Vans/HostVanPhotos'

import PageNotFound from '../pages/PageNotFound'
import WentWrong from '../pages/WentWrong'

import Login from '../pages/Login/Login'
import AuthRequired from '../components/AuthRequired'

import Layout from '../components/Layout'
import Footer from '../components/Footer'

import './server'

const router = createBrowserRouter(createRoutesFromElements(
    <Route element = {<Layout/>} errorElement = {<WentWrong/>}>          
      <Route index element = {<Home/>}/>
      <Route path = "about" element = {<About/>}/>
      <Route path = "vans">
        <Route index element = {<Vans/>} loader = {vansLoader}/>
        <Route path = ":van_id" element = {<VanPage/>} loader = {vanPageLoader}/>
      </Route>
      <Route path = "login" element = {<Login/>} />
      
      <Route element = {<AuthRequired/>}>
        <Route path = "/host" element = {<HostLayout/>}>
          <Route index element = {<Dashboard/>}/>
          <Route path = "income" element = {<Income/>}/>
          <Route path = "reviews" element = {<Reviews/>}/>
          <Route path = "vans" element = {<HostVans/>}/>
          <Route path = "vans/:van_id" element = {<HostVanLayout/>}>
            <Route index element = {<HostVanDetails/>}/>
            <Route path = "pricing" element = {<HostVanPricing/>}/>
            <Route path = "photos" element = {<HostVanPhotos/>}/>
          </Route>
        </Route>
      </Route>

      <Route path = "*" element = {<PageNotFound/>}/>
    </Route>
)) 

const App: React.FC = (): JSX.Element => {
  return (
    <ContextProvider>
      <div className = "PAGE_WRAPPER relative min-h-screen bg-orange-100">
        <div className="CONTENT_WRAP pb-20">
          <RouterProvider router = {router}/>
        </div>
        <Footer/>
      </div>
    </ContextProvider>
  )
}

export default App
