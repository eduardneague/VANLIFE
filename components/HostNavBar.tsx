import React from 'react'
import {NavLink} from 'react-router-dom'

const HostNavBar: React.FC = (): JSX.Element => {
  return (
    <div className="w-full h-10 flex justify-center items-center">
        <div className = "w-10/12 h-full flex gap-2 items-center">
            <NavLink to = "/host" end className = 
            {({isActive}) => isActive ? "text-orange-900 text-xl font-bold": "text-orange-900 text-xl"}>Dashboard</NavLink>

            <NavLink to = "/host/income" className = 
            {({isActive}) => isActive ? "text-orange-900 font-bold text-xl": "text-orange-900 text-xl"}>Income</NavLink>

            <NavLink to = "/host/vans" className = 
            {({isActive}) => isActive ? "text-orange-900 font-bold text-xl": "text-orange-900 text-xl"}>Vans</NavLink>

            <NavLink to = "/host/reviews" className = 
            {({isActive}) => isActive ? "text-orange-900 font-bold text-xl": "text-orange-900 text-xl"}>Reviews</NavLink>
        </div>
    </div>

  )
}

export default HostNavBar