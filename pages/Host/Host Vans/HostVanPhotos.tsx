import React, {useContext} from 'react'
import {Context} from '../../../src/ContextProvider'
import {useParams} from 'react-router-dom'
import {VanType} from '../../../types/VanType'

const HostVanPhotos: React.FC = () => {

    const {vans} = useContext(Context)
    const {van_id} = useParams()
    const {imageUrl} = vans.find((van: VanType) => van.id === van_id)

    return (
        <div className = "w-full h-auto bg-white rounded-md shadow-md flex justify-center">
            <div className = "w-[95%] h-auto mt-4 flex flex-col gap-4 mb-5">
              <img src= {imageUrl} alt="image" className = "rounded-md" />
            </div>
        </div>
    )
}

export default HostVanPhotos