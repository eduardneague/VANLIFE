import React, {useContext} from 'react'
import {Context} from '../../../src/ContextProvider'
import {Outlet, useParams} from 'react-router-dom'
import HostVanDetailNavBar from '../../../components/HostVanDetailNavBar'
import RentedVanDetail from './RentedVanDetail'
import {VanType} from '../../../types/VanType'

const HostVanLayout: React.FC = (): JSX.Element => {

  const {vans} = useContext(Context)
  const {van_id} = useParams()
  const {name, type, description, price, imageUrl} = vans.find((van: VanType) => van.id === van_id)

  if(typeof vans === "undefined") {
    console.log("Failed to Fetch Vans. :( Try reloading the page.")
    return (
      <div className = "h-[46rem] w-full flex justify-center">
        <div className = "flex flex-col gap-5 justify-center w-10/12  items-center">
          <h1 className = "text-center text-3xl font-bold max-w-[15rem] ">Something went wrong...</h1>
          <button onClick = {() => {window.location.reload()}} className = "w-44  h-14 bg-black font-bold text-white text-2xl flex justify-center items-center rounded-md">Reload Page</button>
        </div> 
      </div>
    )
  }

  return (
    <>
    <div className = "flex justify-center w-full rounded-md">
      <div className = "bg-white h-auto w-10/12 rounded-md mb-5">
        <RentedVanDetail/>
        <HostVanDetailNavBar/>
        <Outlet context = {{name, type, description, price, imageUrl}}/>
      </div>
    </div>
    </>
  )
}

export default HostVanLayout