import React, { useState } from 'react';
import loginIcon from '../assest/signin.gif'
import { BsFillEyeFill } from "react-icons/bs";
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import imageTobase64 from '../helpers/imageTobase64';

const SignUp = () => {

  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    ConfirmPassword: "",
    profilePic: ""

  })

  const handleOnChange = (e) => {
    const { name, value } = e.target

    setData((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })
  }

  const handleUploadPic = async (e) => {
    const file = e.target.files[0]

    const imagePic = await imageTobase64(file)
    
    setData((preve) => {
      return{
        ...preve,
      profilePic: imagePic
    }
})
  }

const handleSubmit = (e) => {
  e.preventDefault()
}

return (
  <section id="signUp">
    <div className='mx-auto container p-4'>

      <div className='bg-white p-5 w-full max-w-sm mx-auto'>
        <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
          <div>
            <img src={data.profilePic || loginIcon} alt='login icons' />
          </div>
          <form>
            <label>
              <div className='text-xs bg-slate-200 bg-opacity-80 pb-4 pt-0 cursor-pointer text-center absolute bottom-0 w-full'>
                Upload Photo
              </div>
              <input type='file' className='hidden' onChange={handleUploadPic} />
            </label>

          </form>
        </div>

        <form className='pt-6 flex flex-col gap-0' onSubmit={handleSubmit}>
          <div className='grid'>
            <label>Name :</label>
            <div className='bg-slate-100 p-2'>
              <input type='text'
                placeholder='Enter Your Name'
                name='name'
                value={data.name}
                onChange={handleOnChange}
                required
                className='w-full h-full outline-none bg-transparent'></input>
            </div>
          </div>

          <div className='grid'>
            <label>Email :</label>
            <div className='bg-slate-100 p-2'>
              <input type='email'
                placeholder='Enter Your Email'
                name='email'
                value={data.email}
                onChange={handleOnChange}
                required
                className='w-full h-full outline-none bg-transparent'></input>
            </div>
          </div>

          <div>
            <label>Password :</label>
            <div className='bg-slate-100 p-2 flex'>
              <input type={showPassword ? "text" : "password"}
                placeholder='Enter Your Password'
                value={data.password}
                name='password'
                onChange={handleOnChange}
                required
                className='w-full h-full outline-none bg-transparent'></input>
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

          </div>

          <div>
            <label>Confirm Password :</label>
            <div className='bg-slate-100 p-2 flex'>
              <input type={showConfirmPassword ? "text" : "password"}
                placeholder='Enter Your Confirm Password'
                value={data.ConfirmPassword}
                name='ConfirmPassword'
                onChange={handleOnChange}
                required
                className='w-full h-full outline-none bg-transparent'></input>
              <div className='cursor-pointer text-xl' onClick={() => setShowConfirmPassword((preve) => !preve)}>
                <span>
                  {
                    showConfirmPassword ? (

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

          </div>

          <button className='bg-red-600 text-white px-6 py-2 w-full rounded-3xl mt-6 hover:bg-red-800 transition-all'>Sign up</button>
        </form>
        <p className='my-5'>Already have a account? <Link to={"/Login"} className='text-red-600 hover:text-red-700 hover:underline'>Login</Link></p>
      </div>
    </div>
  </section>
)
}

export default SignUp