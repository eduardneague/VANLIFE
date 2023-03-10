import {VanType} from '../types/VanType'
import {LoginType} from '../types/LoginType'

export async function getVans(): Promise<VanType[]> {
    const response = await fetch("/api/vans")
    if(!response.ok) {
        throw {
            message: "Something went wrong...",
            statusText: response.statusText,
            status: response.status
        }
    }
    const data = await response.json()
    return data.vans 
}

export async function loginUser(credentials: LoginType): Promise<LoginType> {
    const response = await fetch("api/login", {method: "post", body: JSON.stringify(credentials)})
    const data = await response.json()
    
    if(!response.ok) {
        throw {
            message: data.message,
            statusText: response.statusText,
            status: response.status
        }
    }
    
    return data
}