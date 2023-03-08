import React from 'react'
import {useOutletContext} from 'react-router-dom'
import { VanType } from '../../../types/VanType'

const HostVanPricing: React.FC = () => {

    const {price}: VanType = useOutletContext()

    return (
        <div className = "w-full h-auto bg-white rounded-md shadow-md flex justify-center">
            <div className = "w-[95%] h-auto mt-4 flex flex-col gap-4 mb-5">
                <h1 className = "font-bold text-3xl">${price}<span className = "font-normal">/day</span></h1>
            </div>
        </div>
    )
}

export default HostVanPricing