import React from 'react'
import {Navigate, Outlet, useLocation} from 'react-router-dom'

const AuthRequired: React.FC = (): JSX.Element => {
    const loggedIn = localStorage.getItem("loggedIn")
    const location = useLocation()

    if(loggedIn == "null") {
        return (
            <Navigate 
                to = "/login" 
                replace = {true}
                state = {
                {
                    message: "You must log in first!", 
                    location: location
                }
            } 
            />
        )
    }
    return <Outlet/>
}

export default AuthRequired