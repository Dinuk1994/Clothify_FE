import React from 'react'
import '../../../index.css'
import Logo from '../../../../public/common/CLOTHIFI-removebg-preview.png'
import Regbtn from '../../molecules/registerBtn'

const LoginContainer = () => {
    return (
        <div >
            <div className='mt-8 flex justify-center h-44'>
                <img src={Logo} alt="" />
            </div>
            <div className='mt-10'>
                <label htmlFor="" className='text-8xl font-heading text-white' >Welcome to clothify!</label>
            </div>
            <div className='mt-28'>
                <label htmlFor="" className='text-3xl font-serif text-white font-semibold'>Username or email</label>
            </div>
            <div>
                <div className="relative h-16 w-full min-w-[200px] mt-3">
                    <input placeholder=""
                        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-2xl font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                    <label
                        className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">

                    </label>
                </div>
            </div>
            <div className='mt-28'>
                <label htmlFor="" className='text-3xl font-serif text-white font-semibold'>Password</label>
            </div>
            <div>
                <div className="relative h-16 w-full min-w-[200px] mt-3">
                    <input type='password' placeholder=""
                        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-2xl font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                    <label
                        className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">

                    </label>
                </div>
            </div>
            <div className='flex mt-3 justify-end'>
                <button className='text-2xl font-serif text-white font-semibold'>Forgot password ?</button>
            </div>
            <div className='flex justify-center mt-5'>
              <Regbtn name='Login'/>
            </div>
        </div>
    )
}

export default LoginContainer
