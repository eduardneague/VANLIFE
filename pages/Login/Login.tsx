import React, {useState} from 'react'
import {LoginType} from '../../types/LoginType'
import { AiFillEye, AiOutlineEye } from 'react-icons/ai'
import {
    useLocation, 
    useNavigate, 
    Navigate, 
    Form, 
    useActionData, 
    useNavigation
} from 'react-router-dom'
import {loginUser} from '../../src/apiFetch'

export async function action( {request}: any ): Promise<LoginType | unknown> {
    const loginData = await request.formData()

    const email = loginData.get("email")
    const password = loginData.get("password")

    try {
        const data = await loginUser({email, password})
        localStorage.setItem("loggedIn", "true")
        return data
    }
    catch(err: any) {
        return {
            error: err.message
        }
    }
}

const Login: React.FC = (): JSX.Element => {

    const [showPass, setShowPass] = useState<boolean>(false)
    const navigate = useNavigate()
    const navigation = useNavigation()
    const location = useLocation()
    const redirectValue: string = location.state?.location.pathname || "/host"
    const data: any = useActionData()

    if(data?.token) {
        navigate(`${redirectValue}`, {replace: true})
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
                    {data?.error && <h1 className = "text-red-500 font-bold text-lg text-center"> {data.error} </h1>}
                </div>
                
                <Form action = "/login" method = "post" className = "flex flex-col gap-4 w-full">
                    <input 
                        type="email"
                        name = "email" 
                        placeholder = "Email address" 
                        className = "w-full h-12 rounded-lg pl-3 outline-orange-500 shadow-sm shadow-orange-200"
                    />
                    <div className = "relative">
                        <input 
                            type= {showPass ? "text" : "password"}
                            name = "password"
                            placeholder = "Password" 
                            className = "w-full h-12 rounded-lg pl-3 outline-orange-500 shadow-sm shadow-orange-200" 
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
                        disabled = {navigation.state === "submitting"}
                        className ={` ${navigation.state === "submitting" ? "bg-gray-500" : "bg-orange-500"} cursor-pointer w-full h-12 rounded-lg  text-white font-bold text-xl`}>
                            {navigation.state === "submitting" ? "Logging in..." : "Log In"}
                        </button>
                </Form>
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