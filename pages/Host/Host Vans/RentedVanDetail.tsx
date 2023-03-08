import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import {Context} from '../../../src/ContextProvider'
import {VanType} from '../../../types/VanType'
import {Link} from 'react-router-dom'
import {AiOutlineArrowLeft} from 'react-icons/ai'

const RentedVanDetail: React.FC = () => {

    const {rentedVans} = useContext(Context)
    const {van_id} = useParams()

    const {imageUrl, name, type, price} = rentedVans.find((van: VanType) => van.id === van_id)

    let style
    if(type === 'simple') {
        style = {backgroundColor: '#f97316'}
    } else if(type === 'luxury') {
        style = {backgroundColor: 'black'}
    } else if(type === 'rugged') {
        style = {backgroundColor: '#064e3b'}
    }

    return (
        <div className = "w-full h-auto flex justify-center">
            <div className = "w-full h-full bg-orange-100 flex flex-col">
                <Link to = ".." relative = "path" className = "text-md text-black-700 mt-3 mb-4">
                    <AiOutlineArrowLeft className = "inline text-md text-gray-600 mb-1 mr-2"/>
                    Back to all vans
                </Link>
                <div className = "bg-white w-full h-36 flex items-center rounded-md">
                    <div className = "w-32 h-32 shadow ml-2">
                        <img src= {imageUrl} alt={`image`} className = "w-full h-full object-cover rounded-md"/>
                    </div>
                <div className = "flex flex-col h-full w-48 gap-2 justify-center ml-3">
                    <div 
                    className = "uppercase w-20 h-8 rounded-sm flex justify-center items-center text-white font-bold" 
                    style = {style}> {type} </div>
                    <h1 className = "font-bold text-2xl"> {name} </h1>
                    <h2 className = "font-bold text-2xl">${price}<span className = "font-normal">/day</span></h2>
                </div>

                </div>
            </div>
        </div>
    )
}

export default RentedVanDetail