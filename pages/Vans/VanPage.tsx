import React, {useContext, useState} from 'react'
import {useParams} from 'react-router-dom'
import {Context} from '../../src/ContextProvider'
import {VanType} from '../../types/VanType'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {Link} from 'react-router-dom'

const VanPage: React.FC = (props): JSX.Element => {

    const {vans, removeRented, addRented, toggleRented} = useContext(Context)
    const {van_id} = useParams()

    const {id, name, price, description, imageUrl, type, isRented}: 
    VanType = vans.find((van: { id: string | undefined }) => van.id === van_id)

    let style
    if(type === 'simple') {
        style = {backgroundColor: '#f97316'}
    } else if(type === 'luxury') {
        style = {backgroundColor: 'black'}
    } else if(type === 'rugged') {
        style = {backgroundColor: '#064e3b'}
    }

    return (
        <div className = "FLEX_CONTAINER w-full flex justify-center items-center">
            <div className="flex flex-col w-11/12">
                <Link to = "/vans" className = "text-md underline text-black-700">
                    <AiOutlineArrowLeft className = "inline text-md text-gray-600 mb-1 mr-2"/>
                    Back to all vans
                </Link>
                <img src={`${imageUrl}`}  alt= {`${name} Image`} 
                className = "rounded-lg w-full object-cover mt-5"/>


                <div className="flex w-full h-8 mb-5 justify-between">
                    <div className = 
                    "mt-4 mb-2 h-full w-20 rounded-md uppercase flex justify-center items-center text-white font-bold" style = {style}>
                        {type}
                    </div>
                    {
                        isRented ? 
                        <div className = 
                        "bg-green-500 mt-4 mb-2 h-full w-20 rounded-md uppercase flex justify-center items-center text-white font-bold">
                            RENTED
                        </div> : ""
                    }
                    
                </div>
                
                <h1 className = "text-3xl font-bold">{name}</h1>

                <h2 className="mt-2 font-bold text-2xl">${price}
                    <span className="text-2xl font-normal">/day</span>
                </h2>

                <p className = "mt-5 text-lg max-w-md">{description}</p>

                {isRented ? 
                <button 
                    onClick = {() => {
                        toggleRented(id)
                        removeRented(id)
                        
                    }}
                    className = "w-full bg-gray-500 rounded h-10 font-bold shadow mt-5 mb-5 text-white">
                        Unrent this van
                </button> 
                :
                <button 
                    onClick = {() => {
                        toggleRented(id)
                        addRented(id)
                    }}
                    className = "w-full bg-orange-500 rounded h-10 font-bold shadow mt-5 mb-5 text-white">
                        Rent this van
                </button>
                }
                
            </div>
        </div>
    )
}

export default VanPage