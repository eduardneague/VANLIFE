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