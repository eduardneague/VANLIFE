import React from 'react'
import {Link} from 'react-router-dom'

const Home: React.FC = (): JSX.Element => {
  return (
    <div className = "HOME_WRAPPER">
        <div className="IMAGE_WRAPPER flex justify-center items-center w-full h-72 bg-home-hero bg-cover">
          <div className="FLEX_WRAPPER flex flex-col justify-center text-white gap-5 w-11/12 h-3/4">
              <h1 className = "font-bold text-2xl">You got the travel plans, we got the travel vans.</h1>
              <p className = "max-w-full text-sm">Add adventure to your life by joining the #vanlife movement.
                Rent the perfect van to make your perfect road trip.
              </p>
              <Link to = "/vans">
                <button className = "w-full bg-orange-500 rounded h-10 font-bold shadow">Find your van</button>
              </Link>
          </div>
        </div>
    </div>
  )
}

export default Home