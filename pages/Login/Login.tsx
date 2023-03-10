import React, {useState} from 'react'
import {LoginType} from '../../types/LoginType'
import { AiFillEye, AiOutlineEye } from 'react-icons/ai'

const Login: React.FC = (): JSX.Element => {

    const [loginData, setLoginData] = useState<LoginType>({email: "", password: ""})
    const [showPass, setShowPass] = useState<boolean>(false)
    
    function handleSubmit(event: React.SyntheticEvent<EventTarget>):void {
       
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>):void {
        const {name, value} = event.target
        setLoginData(prevData => {
            return (
                {
                    ...prevData,
                    [name]: value
                }
            )
        })
    }

    function togglePassword():void {
        setShowPass((prevPass) => !prevPass)
    }

    return (
        <div className = "flex w-full h-[46rem] justify-center">
            <div className = "flex flex-col gap-5 w-10/12 h-full justify-center items-center">
                <h1 className = "text-3xl font-bold">Sign in to your account</h1>
                <form action="" onSubmit = {handleSubmit} className = "flex flex-col gap-4 w-full">
                    <input 
                        type="email"
                        name = "email" 
                        placeholder = "Email address" 
                        className = "w-full h-12 rounded-lg pl-3 outline-orange-500 shadow-sm shadow-orange-200"
                        onChange = {handleChange}
                        value = {loginData.email}
                    />
                    <div className = "relative">
                    <input 
                        type= {showPass ? "text" : "password"}
                        name = "password"
                        placeholder = "Password" 
                        className = "w-full h-12 rounded-lg pl-3 outline-orange-500 shadow-sm shadow-orange-200" 
                        onChange = {handleChange}
                        value = {loginData.password}
                        id = "passwordInput"
                    />
                    <div 
                        className = "flex justify-center items-center h-8 w-8 absolute border border-orange-500 border-solid top-2 right-2 rounded-md"
                        onClick = {togglePassword}
                    >
                        {showPass ? <AiFillEye className = "text-orange-500 text-xl"/> : <AiOutlineEye className = "text-orange-500 text-xl"/>}
                    </div>

                    </div>
                    <button className = "cursor-pointer w-full h-12 rounded-lg bg-orange-500 text-white font-bold text-xl">Sign In</button>
                </form>
                <h2 className = "text-md font-normal">Don't have an account? 
                    <span className = "text-md text-orange-500 font-bold cursor-pointer"> Create one now</span>
                </h2> 
            </div>
        </div>
    )
}

export default Login