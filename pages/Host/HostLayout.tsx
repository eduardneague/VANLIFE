import React from 'react'
import {Outlet} from 'react-router-dom'
import HostNavBar from '../../components/HostNavBar'

const HostLayout = () => {
  return (
    <>
        <HostNavBar/>
        <Outlet/>
    </>
  )
}

export default HostLayout