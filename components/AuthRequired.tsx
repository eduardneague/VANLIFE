import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'

const AuthRequired: React.FC = (): JSX.Element => {
    const auth = {token: null}

    if(!auth.token) {
        return (
            <Navigate 
                to = "/login" 
                state = {{message: "You must log in first!"}} 
            />
        )
    }
    return <Outlet/>
}

export default AuthRequired