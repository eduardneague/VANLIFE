import React from 'react'
import {NavLink} from 'react-router-dom'
import {BiUserCircle} from 'react-icons/bi'

const Navbar: React.FC = (): JSX.Element => {
  return (
      <div className = "w-11/12 h-20 bg-orange-100 flex items-center justify-between">
          <NavLink to = "." className = "font-extrabold text-2xl h-full w-1/2 flex justify-center items-center">#VANLIFE</NavLink>
          <div className = "h-full w-1/2 flex justify-center items-center gap-5">
              <NavLink to = "about" className = 
              {({isActive}) => isActive ? "text-orange-900 font-bold": "text-orange-900 "}>About</NavLink> 
              
              <NavLink to = "vans" className = 
              {({isActive}) => isActive ? "text-orange-900  font-bold": "text-orange-900 "}>Vans</NavLink>

              <NavLink to = "host" className = 
              {({isActive}) => isActive ? "text-orange-900  font-bold": "text-orange-900 "}>Host</NavLink>

              <NavLink to = "login" className = 
              {({isActive}) => isActive ? "text-orange-900  font-bold": "text-orange-900 "}>
                <BiUserCircle className = "text-2xl"/>
            </NavLink>

          </div>
      </div>
  )
}

export default Navbar