import React, {useState} from 'react'
import {useLocation, Navigate} from 'react-router-dom'

const Dashboard: React.FC = (): JSX.Element => {
  const [render, setRender] = useState(false)
  const location = useLocation()
  const loggedIn = localStorage.getItem("loggedIn")

  function handleClick(): void {
    localStorage.setItem("loggedIn", "null")
    setRender(prevRender => !prevRender)
  }
  
  if(loggedIn == "null") {
    return (
      <Navigate to = "/login"/>
    )
  } else {
    return (
      <div>
        {location.state?.message}
        <div className = "text-black">hello</div>
        <button 
          className = "w-20 h-8 rounded-md bg-orange-500 font-bold text-white flex justify-center items-center"
          onClick = {handleClick}
        >Sign Out</button>
      </div>
    )
  }
    
}

export default Dashboard