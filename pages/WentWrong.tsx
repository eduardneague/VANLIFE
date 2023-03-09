import React from 'react'

const WentWrong: React.FC = () => {
  return (
    <div className = "h-[46rem] w-full flex justify-center">
        <div className = "flex flex-col gap-5 justify-center w-10/12  items-center">
          <h1 className = "text-center text-3xl font-bold max-w-[15rem] ">Something went wrong...</h1>
          <button onClick = {() => {window.location.reload()}} className = "w-44  h-14 bg-black font-bold text-white text-2xl flex justify-center items-center rounded-md">Reload Page</button>
        </div> 
      </div>
  )
}

export default WentWrong