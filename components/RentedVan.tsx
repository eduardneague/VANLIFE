import React, {useContext} from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import {Context} from '../src/ContextProvider'
import {Link} from 'react-router-dom'

interface Props {
    key: string; 
    id: string;
    name: string;
    type: string;
    imageUrl: string;
    price: number;
}

const RentedVan: React.FC<Props> = (props): JSX.Element => {

  const {removeRented} = useContext(Context)

  return (
    
    <div className="flex w-full h-20 bg-white shadow rounded-md items-center mb-5 cursor-pointer relative">
      <Link to = {`/host/vans/${props.id}`} className = "flex w-full">
          <div className="imageWrapper h-16 w-16 ml-2 rounded-md shadow">
              <img src= {props.imageUrl} alt="image" className = "h-full w-full object-cover"/>
          </div>
          <div className="flex flex-col h-full w-3/4 justify-center ml-3">
              <h1 className = "font-bold text-xl">{props.name}</h1>
              <p className = "font-normal text-lg">${props.price}/day</p>
          </div>
      </Link>  
          <div onClick = {() => removeRented(props.id)} >
            <AiFillCloseCircle className = "cursor-pointer w-8 h-8 absolute top-6 right-4 z-10 text-red-500"/>
          </div>
      </div>

  )
}

export default RentedVan