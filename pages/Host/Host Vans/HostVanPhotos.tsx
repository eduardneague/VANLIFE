import React from 'react'
import {useOutletContext} from 'react-router-dom'
import { VanType } from '../../../types/VanType'

const HostVanPhotos: React.FC = () => {

    const {imageUrl}: VanType = useOutletContext()

    return (
        <div className = "w-full h-auto bg-white rounded-md shadow-md flex justify-center">
            <div className = "w-[95%] h-auto mt-4 flex flex-col gap-4 mb-5">
              <img src= {imageUrl} alt="image" className = "rounded-md" />
            </div>
        </div>
    )
}

export default HostVanPhotos