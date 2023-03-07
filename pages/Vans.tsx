import React, {useContext} from 'react'
import Van from '../components/Van'
import {nanoid} from 'nanoid'

import {VanType} from '../types/VanType'
import {Context} from '../src/ContextProvider'

const Vans: React.FC = (): JSX.Element => {

  const {vans, loading} = useContext(Context)
  
  const vanElements = vans.map((van: VanType) => {
      return (
        <Van
          key = {nanoid()}
          id = {van.id}
          name = {van.name}
          type = {van.type}
          price = {van.price}
          imageUrl = {van.imageUrl}
        />
      )
  })

  return (
    <div>
      <div className = "VAN_OPTIONS w-full h-32 bg-orange-100 flex justify-center items-center">
        <div className="FLEX_WRAPPER w-10/12 flex flex-col gap-3">
          <h1 className = "font-bold text-2xl">Explore our van options</h1>
          <div className="FILTER_FLEX_CONTAINER flex gap-2">
              <div className = "flex justify-center text-md items-center rounded-lg text-black w-24 h-7 bg-orange-300 cursor-pointer">Simple</div>
              <div className = "flex justify-center text-md items-center rounded-lg text-black w-24 h-7 bg-orange-300 cursor-pointer">Luxury</div>
              <div className = "flex justify-center text-md items-center rounded-lg text-black w-24 h-7 bg-orange-300 cursor-pointer">Rugged</div>
              <div className = "flex justify-center text-md items-center rounded-lg text-black w-40 h-7 cursor-pointer underline">Clear filters</div>
          </div>
        </div>
      </div>

      <div className="CENTER_WRAPPER w-full h-auto flex justify-center bg-orange-100">
        <div className = "pt-2 pb-2 GRID_CONTAINER gap-3 w-11/12 h-full grid grid-cols-2 auto-rows-[15rem]">
           {loading ? <h1 className = "font-bold pl-6 text-md">Loading...</h1> : vanElements}
        </div>
      </div>
    </div>
  )
}

export default Vans