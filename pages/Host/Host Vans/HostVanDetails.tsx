import React, {useContext} from 'react'
import {Context} from '../../../src/ContextProvider'
import {useParams} from 'react-router-dom'
import {VanType} from '../../../types/VanType'

const HostVanDetails: React.FC = () => {

    const {vans} = useContext(Context)
    const {van_id} = useParams()
    const {name, type, description} = vans.find((van: VanType) => van.id === van_id)

    return (
        <div className = "w-full bg-white rounded-md shadow-md flex justify-center">
            <div className = "w-[95%] mt-4 flex flex-col gap-4 mb-5">
                <h1 className = "font-bold text-md">Name: <span className = "font-normal">{name}</span></h1>
                <h1 className = "font-bold text-md">Category: <span className = "font-normal">{type[0].toUpperCase() + type.slice(1, 10)}</span></h1>
                <h1 className = "font-bold text-md">Description: <span className = "font-normal">{description}</span></h1>
                <h1 className = "font-bold text-md">Visibility: <span className = "font-normal">Public</span></h1>
            </div>
        </div>
    )
}

export default HostVanDetails