import React from 'react'
import {Link} from 'react-router-dom'

interface Props {
    key: string; 
    id: string;
    name: string;
    type: string;
    imageUrl: string;
    price: number;
}

const Van: React.FC<Props> = (props): JSX.Element => {

  let style
  if(props.type === 'simple') {
    style = {backgroundColor: '#f97316'}
  } else if(props.type === 'luxury') {
    style = {backgroundColor: 'black'}
  } else if(props.type === 'rugged') {
    style = {backgroundColor: '#064e3b'}
  }

  return (
    <Link to = {`/vans/${props.id}`} >
    <div className="VAN_WRAPPER cursor-pointer h-full w-full flex flex-col items-center">
      <img src= {props.imageUrl} alt="image" className = "shadow rounded h-10/12 w-11/12"  />
      <div className="FLEX_WRAPPER flex w-11/12 h-1/4 justify-between mt-2">
        <h1 className = "font-bold text-md max-w-[80%]"> {props.name} </h1>
        <h1 className = "font-bold text-md"> {props.price}$</h1>  
      </div>

        <div className="w-11/12 h-3/4 flex relative justify-between items-center">
          <div style = {style} className = "uppercase flex justify-center items-center w-24 font-bold text-white rounded-md h-8"> 
          {props.type} </div>
          <h1 className = "absolute top-0 right-0">/day</h1>
        </div>
    </div>
    </Link>
  )
}

export default Van