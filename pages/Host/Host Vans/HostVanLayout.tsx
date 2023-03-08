import React from 'react'
import {Outlet} from 'react-router-dom'
import HostVanDetailNavBar from '../../../components/HostVanDetailNavBar'
import RentedVanDetail from './RentedVanDetail'

const HostVanLayout = () => {
  return (
    <>
    <div className = "flex justify-center w-full rounded-md">
      <div className = "bg-white h-auto w-10/12 rounded-md">
        <RentedVanDetail/>
        <HostVanDetailNavBar/>
        <Outlet/>
      </div>
    </div>
    </>
  )
}

export default HostVanLayout