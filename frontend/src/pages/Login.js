import React, { useState } from 'react';
import loginIcon from '../assest/signin.gif'
import { BsFillEyeFill } from "react-icons/bs";
import { FaEyeSlash } from "react-icons/fa6";
import {Link} from "react-router-dom";

export const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <section id="login">
            <div className='mx-auto container p-4'>

                <div className='bg-white p-2 py-5 w-full max-w-sm mx-auto'>
                    <div className='w-20 h-20 mx-auto'>
                        <img src={loginIcon} alt='login icons' />
                    </div>

                    <form className='pt-6'>
                        <div className='grid'>
                            <label>Email :</label>
                            <div className='bg-slate-100 p-2'>
                                <input type='email' placeholder='Enter Your Email' className='w-full h-full outline-none bg-transparent'></input>
                            </div>
                        </div>
                        <div>
                            <label>Password :</label>
                            <div className='bg-slate-100 p-2 flex'>
                                <input type={showPassword ? "text" : "password"} placeholder='Enter Your Password' className='w-full h-full outline-none bg-transparent'></input>
                                <div className='cursor-pointer text-xl' onClick={() => setShowPassword((preve) => !preve)}>
                                    <span>
                                        {
                                            showPassword ? (

                                                <BsFillEyeFill />
                                            )
                                                :
                                                (
                                                    <FaEyeSlash />
                                                )
                                        }


                                    </span>
                                </div>
                            </div>
                            <Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline hover:text-red-600' >
                                Forgot Password
                            </Link>
                        </div>

                        <button className='bg-red-600 text-white px-6 py-2 w-full rounded-3xl mt-6 hover:bg-red-800 transition-all'>Login</button>
                    </form>
                    <p className='my-4'>Don't have account? <Link to={"/sign-up"}>Sign up</Link></p>
                </div>
            </div>
        </section>
    )
}
export default Login;