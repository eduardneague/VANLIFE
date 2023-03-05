import React from 'react'
import {Link} from 'react-router-dom'

const Navbar: React.FC = (): JSX.Element => {
  return (
    <div className = "w-full h-20 bg-orange-100 flex items-center justify-between">
        <Link to = "/" className = "font-extrabold text-2xl h-full w-1/2 flex justify-center items-center">#VANLIFE</Link>
        <div className = "h-full w-1/2 flex justify-center items-center gap-5">
            <Link to = "/about" className = "font-bold text-orange-900">About</Link> 
            <Link to = "/vans" className = "font-bold text-orange-900">Vans</Link>
        </div>
    </div>
  )
}

export default Navbar