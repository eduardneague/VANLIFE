import React from 'react'
import {NavLink} from 'react-router-dom'
import { AiFillEdit } from 'react-icons/ai'

const HostVanDetailNavBar: React.FC = (): JSX.Element => {
  return (
    <div className="w-full h-10 flex justify-center items-center">
        <div className = "w-full h-full flex gap-2 items-center ml-2">
            <NavLink to = "." end className = 
            {({isActive}) => isActive ? "text-gray-800 text-xl font-bold": "text-gray-800 text-xl"}>Details</NavLink>

            <NavLink to = "pricing" className = 
            {({isActive}) => isActive ? "text-gray-800 font-bold text-xl": "text-gray-800 text-xl"}>Pricing</NavLink>

            <NavLink to = "photos" className = 
            {({isActive}) => isActive ? "text-gray-800 font-bold text-xl": "text-gray-800 text-xl"}>Photos</NavLink>
            <AiFillEdit className = "text-2xl ml-auto mr-5"/>
        </div>
    </div>

  )
}

export default HostVanDetailNavBar