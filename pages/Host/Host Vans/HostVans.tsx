import React, {useContext} from 'react'
import {Context} from '../../../src/ContextProvider'
import RentedVan from '../../../components/RentedVan'
import {nanoid} from 'nanoid'
import {VanType} from '../../../types/VanType'
import {Link} from 'react-router-dom'

const HostVans: React.FC = (): JSX.Element => {

const {rentedVans} = useContext(Context)

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