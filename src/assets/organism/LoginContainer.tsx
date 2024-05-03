import React from 'react'
import '../../index.css'
import Logo from '../../../public/common/CLOTHIFI-removebg-preview.png'
import Regbtn from '../molecules/registerBtn'
import GoogleImage from '../../../public/Login/icons8-google-144.png'
import { useNavigate } from 'react-router-dom'

const LoginContainer = () => {
    const navigate = useNavigate();

    const navigateRegister=()=>{
        navigate("/register")
    }

    return (
        <div className='p-4'>
            <div className='mt-3 flex justify-center h-28 '>
                <button><img src={Logo} alt="" className='w-48' /></button>
            </div>
            <div className='mt-3 flex justify-center'>
                <label htmlFor="" className='text-5xl font-heading text-white tablet-or-mobile:3xl tablet-or-mobile:text-4xl' >Welcome to clothify!</label>
            </div>
            <div>
                <div className='mt-16'>
                    <label htmlFor="" className='text-xl font-serif text-white font-semibold'>Email address</label>
                </div>
                <div>
                    <div className="relative h-10 w-full min-w-[150px]">
                    <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""/>
                   
                    </div>
                </div>
                <div className='mt-8'>
                    <label htmlFor="" className='text-xl font-serif text-white font-semibold'>Password</label>
                </div>
                <div>
                    <div className="relative h-10 w-full min-w-[150px]">
                    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""/>
                     
                    </div>
                </div>

            </div>
            <div className='flex mt-1 justify-end'>
                <button className='text-md font-serif text-white font-semibold'>Forgot password ?</button>
            </div>
            <div className='flex justify-center mt-8'>
                <Regbtn name='Login' />
            </div>
            <div className='mt-8 text-white justify-items-center text-md flex justify-center'>
                <hr className="w-44" /> OR <hr className="w-44" />
            </div>
            <div className='flex justify-center mt-2 font-serif text-white'>
                <button> <img src={GoogleImage} alt="" className='size-6 mt-1' /></button>
                <label htmlFor="" className='flex justify-items-center mt-1 ml-3 text-xl'>Sign up with google</label>
            </div>
            <div className='flex justify-center mt-5'>
                <label htmlFor="" className='text-white text-xl font-serif'>New User ? </label>
                <button className=' text-xl ml-3 font-serif text-gray-500' onClick={navigateRegister}>Create an Account</button>
            </div>
        </div>
    )
}

export default LoginContainer
