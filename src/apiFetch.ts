import {VanType} from '../types/VanType'

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