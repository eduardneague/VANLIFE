import React, {useState, useContext} from 'react'
import { VanType } from '../../types/VanType'
import {nanoid} from 'nanoid'
import {useLocation, Navigate, Link} from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai'
import RentedVan from '../../components/RentedVan'
import {Context} from '../../src/ContextProvider'

const Dashboard: React.FC = (): JSX.Element => { 
  const [render, setRender] = useState(false)
  const location = useLocation()
  
  const loggedIn = localStorage.getItem("loggedIn")

  function handleClick(): void {
    localStorage.setItem("loggedIn", "null")
    setRender(prevRender => !prevRender)
  }

  const {rentedVans} = useContext(Context)
  
  const rentedVanElements = rentedVans.map((van: VanType, index: number) => {
    if(index < 3) {
      return (
        <RentedVan
              key = {nanoid()}
              id = {van.id}
              name = {van.name}
              imageUrl = {van.imageUrl}
              price = {van.price}
              type = {van.type}
          />
      )
    } else return
  })

  if(loggedIn == "null") {
    return (
      <Navigate to = "/login"/>
    )
  } else {
    return (
      <div className = "flex w-full h-[40rem] justify-center">
        <div className = "flex flex-col w-10/12 bg-orange-100">
          <h1 className = "text-center font-bold text-xl"> {location.state?.message} </h1>

          <div className = "w-full h-52 flex flex-col mt-4">
            <div className = "w-full h-2/3 bg-orange-200 p-4 flex flex-col rounded-tr-lg rounded-tl-lg shadow-orange-200 shadow">
              <h1 className = "font-bold text-2xl">Welcome!</h1>
              <div className = "w-full h-20 flex justify-between items-center mt-2">
                <p className = "text-gray-800">Income last <span className = "underline text-gray-900 font-medium">30 days</span></p>
                <Link to = "/host/income" className = "text-gray-800 font-medium">Details</Link>
              </div>
              <h1 className = "mt-2 font-bold text-3xl font-[Poppins]">$2,260</h1>
            </div>
            <div className = "w-full h-1/3 bg-orange-50 flex justify-between items-center p-4 rounded-br-lg rounded-bl-lg shadow shadow-orange-200">
              <h1 className = "font-bold text-lg">Review score</h1>
               <AiFillStar className = "text-orange-500"/><h2 className = "font-bold mr-16">5.0<span className = "text-gray-600 font-bold">/5</span> </h2>
              <Link to = "/host/reviews" className = "text-gray-800 font-medium">Details</Link>
            </div>
          </div>

          <div className = "w-full h-80 flex flex-col">
            <div className = "flex items-center justify-between h-16 p-4">
              <h1 className = "font-bold text-lg">Your Rented Vans</h1>
              <Link to = "/host/vans" className = "text-gray-800 font-medium">Details</Link>
            </div>

            <div className = "h-full bg-orange-100 rounded-lg flex flex-col">
            {rentedVans.length === 0 ? 
            <div className = "p-4 flex justify-center flex-col items-center">
                <h1 className = "text-lg font-bold text-center">You haven't rented any vans yet!</h1>
                <Link to = "/vans" 
                className = "flex mt-3 justify-center items-center bg-orange-500 text-white w-full rounded-md shadow h-12 text-lg font-bold">Rent Vans</Link>
            </div> 
          
            : <div className = "w-full h-full gap-5"> {rentedVanElements} </div> }
            </div>
          </div>

          <button 
            className = "mt-8 w-full shadow shadow-orange-500 h-12 rounded-md bg-orange-500 font-bold text-white flex justify-center items-center"
            onClick = {handleClick}
          >Sign Out</button>
        </div>
      </div>
    )
  }
    
}

export default Dashboard