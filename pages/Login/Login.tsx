import React, {useState} from 'react'
import {LoginType} from '../../types/LoginType'
import { AiFillEye, AiOutlineEye } from 'react-icons/ai'
import {useLocation, useNavigate, Navigate} from 'react-router-dom'
import {loginUser} from '../../src/apiFetch'

const Login: React.FC = (): JSX.Element => {

    const [loginData, setLoginData] = useState<LoginType>({email: "", password: ""})
    const [showPass, setShowPass] = useState<boolean>(false)
    const [status, setStatus] = useState<string>("idle")
    const [buttonDisable, setButtonDisable] = useState<boolean>(false)
    const [error, setError] = useState<Error | null>(null)

    const navigate = useNavigate()
    const location = useLocation()

    function handleSubmit(event: React.SyntheticEvent<EventTarget>):void {
        event.preventDefault()

        async function login(): Promise<LoginType> {
            setStatus("submitting")
            setButtonDisable(true)

            try {
                const response = await loginUser(loginData)

                setStatus("idle")
                setButtonDisable(false)
                setError(null)

                localStorage.setItem("loggedIn", "true")
                navigate("/host", {replace: true})

                return response
            }
            catch(error: any) {
                setError(error)
                throw new Error(error.message)
            }
            finally {
                setStatus("idle")
                setButtonDisable(false)
            }
        }
        login()
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

    if(localStorage.getItem("loggedIn") == "null") {
        return (
            <div className = "flex w-full h-[46rem] justify-center">
            <div className = "flex flex-col gap-5 w-10/12 h-full justify-center items-center">
                <h2 className = "text-orange-500 font-bold text-xl"> 
                    {location.state?.message} 
                </h2>
                <h1 className = "text-2xl font-bold text-center">Sign in to your account</h1>
                <div>
                    {error && <h1 className = "text-red-500 font-bold text-lg text-center"> {error.message} </h1>}
                </div>
                
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
                    <button 
                        disabled = {buttonDisable}
                        className ={` ${buttonDisable ? "bg-gray-500" : "bg-orange-500"} cursor-pointer w-full h-12 rounded-lg  text-white font-bold text-xl`}>
                            {status === "submitting" ? "Logging in..." : "Log In"}
                        </button>
                </form>
                <h2 className = "text-md font-normal">Don't have an account? 
                    <span className = "text-md text-orange-500 font-bold cursor-pointer"> Create one now</span>
                </h2> 
            </div>
        </div>
        )
    } else {
        return (
            <Navigate 
                to = "/host"
                state = {{message: "You are already Logged In!"}} 
            />
        )
    }
}

export default Login