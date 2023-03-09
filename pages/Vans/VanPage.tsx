import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import {Context} from '../../src/ContextProvider'
import {VanType} from '../../types/VanType'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {Link, useLocation} from 'react-router-dom'

import PageNotFound from '../PageNotFound'

const VanPage: React.FC = (props): JSX.Element => {

    const {vans, removeRented, addRented, toggleRented, loading} = useContext(Context)
    const {van_id} = useParams()
    const location = useLocation()
    let show: boolean = false

    if(typeof vans === "undefined") {
        console.log("Failed to Fetch Vans. :( Try reloading the page.")
        return (
          <div className = "h-[46rem] w-full flex justify-center">
            <div className = "flex flex-col gap-5 justify-center w-10/12  items-center">
              <h1 className = "text-center text-3xl font-bold max-w-[15rem] ">Something went wrong...</h1>
              <button onClick = {() => {window.location.reload()}} className = "w-44  h-14 bg-black font-bold text-white text-2xl flex justify-center items-center rounded-md">Reload Page</button>
            </div> 
          </div>
        )
      }

    for(let i = 0; i < vans.length; i++) {
        if(vans[i].id === van_id) {
            show = true
            break
        } 
    }

    if(loading) {
        return <div className = "ml-10 font-bold">Loading...</div>
    }
    else {
        if(show) {
        const {id, name, price, description, imageUrl, type, isRented}: 
        VanType = vans.find((van: {id: string}) => van.id === van_id)

        let style
        if(type === 'simple') {
            style = {backgroundColor: '#f97316'}
        } else if(type === 'luxury') {
            style = {backgroundColor: 'black'}
        } else if(type === 'rugged') {
            style = {backgroundColor: '#064e3b'}
        }

        const filter = location.state?.filter || ""

        const filterString = filter.slice(6, 20)
        const backToString = filterString.slice(0, 1).toUpperCase() + filterString.slice(1, 20)

        return (
            <div className = "FLEX_CONTAINER w-full flex justify-center items-center">
                <div className="flex flex-col w-11/12">
                    <Link to = {`..${filter}`} className = "text-md text-black-700">
                        <AiOutlineArrowLeft className = "inline text-md text-gray-600 mb-1 mr-2"/>
                        Back to {backToString} vans
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
        } else {
            return (
                <PageNotFound/>
            )
        }
    }
}

export default VanPage