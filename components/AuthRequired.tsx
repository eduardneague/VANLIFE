import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'

const AuthRequired: React.FC = (): JSX.Element => {
    const loggedIn = localStorage.getItem("loggedIn")

    if(loggedIn == "null") {
        return (
            <Navigate 
                to = "/login" 
                replace = {true}
                state = {{message: "You must log in first!"}} 
            />
        )
    }
    return <Outlet/>
}

export default AuthRequired