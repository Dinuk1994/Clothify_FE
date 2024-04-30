import React from 'react'
import Logo from '../../../../public/common/CLOTHIFI-removebg-preview.png'
import Regbtn from '../../molecules/registerBtn'
import GoogleImage from '../../../../public/Login/icons8-google-144.png'

const RegisterContainer = () => {
    return (
        <div>
            <div className='mt-3 flex justify-center h-28 '>
                <img src={Logo} alt="" />
            </div>
            <div className='mt-3 flex justify-center'>
                <label htmlFor="" className='text-5xl font-heading text-white tablet-or-mobile:3xl tablet-or-mobile:text-4xl' >Welcome to clothify!</label>
            </div>
            <div className=''>
                <div className='mt-6'>
                    <label htmlFor="" className='text-lg font-serif text-white font-semibold'>Full name</label>
                </div>
                <div>
                    <div className="relative h-8 w-full min-w-[200px]">
                        <input placeholder=""
                            className="peer h-full w-full text-lg border-b border-blue-gray-200 text-white bg-transparent font-sans  font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                        <label
                            className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">

                        </label>
                    </div>
                </div>
                <div className='mt-5'>
                    <label htmlFor="" className='text-lg font-serif text-white font-semibold'>Username</label>
                </div>
                <div>
                    <div className="relative h-8 w-full min-w-[200px]">
                        <input placeholder=""
                            className="peer h-full w-full text-lg border-b border-blue-gray-200 text-white bg-transparent font-sans  font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                        <label
                            className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">

                        </label>
                    </div>
                </div>
                <div className='mt-5'>
                    <label htmlFor="" className='text-lg font-serif text-white font-semibold'>Email address</label>
                </div>
                <div>
                    <div className="relative h-8 w-full min-w-[200px]">
                        <input placeholder=""
                            className="peer h-full w-full text-lg border-b border-blue-gray-200 text-white bg-transparent font-sans  font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                        <label
                            className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">

                        </label>
                    </div>
                </div>
                <div className='mt-5'>
                    <label htmlFor="" className='text-lg font-serif text-white font-semibold'>Password</label>
                </div>
                <div>
                    <div className="relative h-8 w-full min-w-[200px]">
                        <input type='password' placeholder=""
                            className="peer h-full w-full text-lg border-b border-blue-gray-200 text-white bg-transparent font-sans  font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                        <label
                            className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">

                        </label>
                    </div>
                </div>
                <div className='mt-5'>
                    <label htmlFor="" className='text-lg font-serif text-white font-semibold'>Repeat password</label>
                </div>
                <div>
                    <div className="relative h-8 w-full min-w-[200px]">
                        <input type='password' placeholder=""
                            className="peer h-full w-full text-lg border-b border-blue-gray-200 text-white bg-transparent font-sans  font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                        <label
                            className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">

                        </label>
                    </div>
                </div>
                <div className='mt-4 flex justify-center'>
                    <Regbtn name='Register' />
                </div>
                <div className='mt-3 text-white justify-items-center text-md flex justify-center'>
                    <hr className="w-44" /> OR <hr className="w-44" />
                </div>
                <div className='flex justify-center mt-1 font-serif text-white'>
                    <button> <img src={GoogleImage} alt="" className='size-6 mt-1' /></button>
                    <label htmlFor="" className='flex justify-items-center ml-3 text-xl'>Sign up with google</label>
                </div>
            </div>
        </div>
    )
}

export default RegisterContainer