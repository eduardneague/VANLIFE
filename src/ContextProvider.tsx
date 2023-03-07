import React, {useEffect, useState} from 'react'
import {VanType} from '../types/VanType'

const Context = React.createContext<any>({})

interface Props {
    children: React.ReactNode;
}

const ContextProvider: React.FC<Props> = ({children}): JSX.Element => {

    const [vans, setVans] = useState<VanType[]>([])
    const [initialVans, setInitialVans] = useState<VanType[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [rentedVans, setRentedVans] = useState<VanType[]>([])

    function toggleRented(id: string): void {
        setVans((prevVans: any) => {
            return prevVans.map((van: VanType) => {
                if(van.id === id) {
                    return {...van, isRented: !van.isRented}
                } else return van
            })
        })
        setInitialVans((prevVans: any) => {
            return prevVans.map((van: VanType) => {
                if(van.id === id) {
                    return {...van, isRented: !van.isRented}
                } else return van
            })
        })
    }

    function addRented(id: string): void {
        vans.map((van: VanType) => {
            if(van.id === id) {
                rentedVans.push(van)
            }
        })
    }

    function removeRented(id: string): void {
        setRentedVans((prevVans) => prevVans.filter(van => van.id !== id))
        setVans((prevVans: any) => {
            return prevVans.map((van: VanType) => {
                if(van.id === id) {
                    return {...van, isRented: false}
                } else return van
            })
        })
    }

    useEffect(() => {
        const fetchRequest = async () => {
          const response = await fetch("/api/vans")
          const data = await response.json()
          setVans(data.vans) 
          setInitialVans(data.vans)
          setLoading(false)
        }
        fetchRequest()
      }, [])

    return (
        <Context.Provider value = 
            {{
                vans, 
                setVans, 
                loading, 
                setLoading, 
                initialVans, 
                rentedVans, 
                setRentedVans, 
                toggleRented, 
                removeRented,
                addRented
            }} 
        >
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}