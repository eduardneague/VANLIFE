import React, {useContext} from 'react'
import {Context} from '../../../src/ContextProvider'
import RentedVan from '../../../components/RentedVan'
import {nanoid} from 'nanoid'
import {VanType} from '../../../types/VanType'
import {Link} from 'react-router-dom'

const HostVans: React.FC = (): JSX.Element => {

const {rentedVans} = useContext(Context)

if(typeof rentedVans === "undefined") {
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

const rentedVanElements = rentedVans.map((van: VanType) => {
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
})

  return (
    <div className = "w-full h-[40rem] flex justify-center">
        <div className="div FLEX_CONTAINER flex flex-col h-full w-10/12">
        <h1 className = "font-bold text-3xl mb-5">Your rented vans</h1>
            {rentedVans.length === 0 ? 
            <div>
                <h1 className = "text-xl font-normal">You haven't rented any vans yet!</h1>
                <Link to = "/vans" 
                className = "flex mt-3 justify-center items-center bg-orange-500 text-white w-32 rounded-md shadow h-10 text-lg font-bold">Rent Vans</Link>
            </div> 
            : rentedVanElements}
        </div>
    </div>
  )
}

export default HostVans