import React from 'react'
import {Link} from 'react-router-dom'

const PageNotFound: React.FC = (): JSX.Element => {
  return (
    <div className = "flex w-full h-[46rem] justify-center items-center">
        <div className = "w-10/12 h-full flex flex-col gap-6 items-center justify-center">
            <h1 className = "text-center max-w-md font-bold text-3xl"> Sorry, the page you were looking for doesn't exist :( </h1>
            <Link to = "/" className = "w-52 h-14 bg-black text-white font-bold text-2xl rounded-md shadow-md flex justify-center items-center">Return Home</Link>
        </div>
    </div>
  )
}

export default PageNotFound