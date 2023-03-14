import React, {useContext, Suspense} from 'react'
import Van from '../../components/Van'
import {nanoid} from 'nanoid'

import {VanType} from '../../types/VanType'
import {Context} from '../../src/ContextProvider'

import {useSearchParams, useLoaderData, defer, Await} from 'react-router-dom'

import {getVans} from '../../src/apiFetch'

const loader = () => {
    return defer({vans: getVans()})
}

const Vans: React.FC = (): JSX.Element => {

  const {vans, setVans} = useContext(Context)
  const [filterParams, setFilterParams] = useSearchParams()
  const vansPromise: any = useLoaderData()

  const typeFilter = filterParams.get("type")
  
  function handleFilterChange(key: string, value: (string | null)): void {
      setFilterParams((prevParams: URLSearchParams): URLSearchParams => {
        if(value === null) {
          prevParams.delete(key)
        } else {
          prevParams.set(key, value)
        }
        return prevParams
      })
  }

  function renderVans(vans: VanType[]): JSX.Element {
      const sortedVans = vans.sort((a: any, b: any) => {
        return a.name.localeCompare(b.name)
      }) 

      const filteredVans = typeFilter 
      ? sortedVans.filter((van: VanType) => van.type === typeFilter)
      : sortedVans

      const vanElements = filteredVans.map((van: VanType) => {
          return (
            <Van
              key = {nanoid()}
              id = {van.id}
              name = {van.name}
              type = {van.type}
              price = {van.price}
              imageUrl = {van.imageUrl}
              isRented = {van.isRented}
              filterParam = {{filter: `?${filterParams.toString()}`}}
            />
          )
      })

  return (
      <>
      <div className = "VAN_OPTIONS w-full h-auto bg-orange-100 flex justify-center items-center flex-col">
        <div className="FLEX_WRAPPER w-10/12 flex flex-col gap-3">
            <h1 className = "font-bold text-2xl ml-2">Explore our van options</h1>
            <div className="FILTER_FLEX_CONTAINER flex gap-2 ml-2">
              <div 
                className = {` ${typeFilter === "simple" ? "bg-orange-500 text-white" : "bg-orange-300"} font-bold flex justify-center text-md items-center rounded-lg text-black w-24 h-7 cursor-pointer`} 
                onClick = {() => handleFilterChange("type", "simple")}>
                Simple
              </div>

              <div 
                className = {` ${typeFilter === "luxury" ? "bg-black text-white" : "bg-orange-300"} flex justify-center text-md items-center rounded-lg text-black w-24 h-7 font-bold cursor-pointer`}
                onClick = {() => handleFilterChange("type", "luxury")}>
                Luxury
              </div>

              <div 
                className = {`${typeFilter === "rugged" ? "bg-green-900 text-white" : "bg-orange-300"}  flex justify-center text-md items-center rounded-lg text-black w-24 h-7 font-bold cursor-pointer`} 
                onClick = {() => handleFilterChange("type", "rugged")}>
                Rugged
              </div>

              <div 
                className = "flex justify-center text-md items-center rounded-lg text-black w-40 h-7 cursor-pointer underline" 
                onClick = {() => handleFilterChange("type", null)}>
                Clear filters
              </div>
          </div>
        </div>
          <div className="CENTER_WRAPPER w-full h-auto flex justify-center bg-orange-100 mt-3">
            <div className = "pt-2 pb-2 GRID_CONTAINER gap-3 w-10/12 h-full grid grid-cols-2 auto-rows-[15rem]">
              {vanElements}
            </div>
          </div>
        </div>
      </>
      )
  }
  
  return (
    <div>
      <Suspense fallback = {<h2 className = "font-bold ml-10 text-md">Loading vans...</h2>}>
        <Await resolve = {vansPromise.vans}>
            {renderVans}
          </Await>
        </Suspense>
      </div>
  )
}

export default Vans
export {loader}