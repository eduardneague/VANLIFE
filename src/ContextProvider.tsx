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
        <Context.Provider value = {{vans, setVans, loading, setLoading, initialVans}} >
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}