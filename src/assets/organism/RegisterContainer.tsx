/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import Logo from '../../../public/common/CLOTHIFI-removebg-preview.png'
import Regbtn from '../molecules/registerBtn'
import GoogleImage from '../../../public/Login/icons8-google-144.png'
import axios from 'axios'

const RegisterContainer = () => {

    interface RegData {
        fullName: string;
        userName: string;
        email: string;
        password: string;
        repeatPassword: string;
    }

    interface ValidationErrors {
        fullName?: string;
        userName?: string;
        email?: string;
        password?: string;
        repeatPassword?: string;
    }



    const [post, setPost] = useState<RegData>({
        fullName: '',
        userName: '',
        email: '',
        password: '',
        repeatPassword: ''
    });

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setPost(prevState => ({
            ...prevState,
            [name]: value
        }));
    }


    const [errors, setErrors] = useState<ValidationErrors>({
        fullName: '',
        userName: '',
        email: '',
        password: '',
        repeatPassword: ''
    });

    


    function handleSubmit(event: any) {
        event.preventDefault();

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,}$/;

        const validationErrors: ValidationErrors = {}
        if (!post.fullName.trim()) {
            validationErrors.fullName = "full name is required"
        }
        if (!post.userName.trim()) {
            validationErrors.userName = "username is required"
        }

        if (!post.email.trim()) {
            validationErrors.email = "email is reqired"
        } else if (!emailRegex.test(post.email)) {
            validationErrors.email = "email is not valid"
        }

        if (!post.password.trim()) {
            validationErrors.password = "password is reqired"
        } else if (post.password.length < 8) {
            validationErrors.password = "password should be at least 8 charactors"
        }

        if (post.repeatPassword !== post.password) {
            validationErrors.repeatPassword = "password not matched"
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            alert("User registered successfully");
    
            axios.post('http://localhost:8080/register/add', post)
                .then(response => {
                    console.log(response);
                    setPost({
                        fullName: '',
                        userName: '',
                        email: '',
                        password: '',
                        repeatPassword: ''
                    });
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <div className='mt-3 flex justify-center h-28 '>
                    <button><img src={Logo} alt="" className='w-48' /></button>
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
                            <input placeholder="" onChange={handleInput} name='fullName' value={post.fullName}
                                className="peer h-full w-full text-lg border-b border-blue-gray-200 text-white bg-transparent font-sans  font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                            {errors.fullName && <span className='text-red-500 text-xs'>{errors.fullName}</span>}
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
                            <input placeholder="" onChange={handleInput} name='userName' value={post.userName}
                                className="peer h-full w-full text-lg border-b border-blue-gray-200 text-white bg-transparent font-sans  font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                            {errors.userName && <span className='text-red-500 text-xs'>{errors.userName}</span>}
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
                            <input placeholder="" onChange={handleInput} name='email' value={post.email}
                                className="peer h-full w-full text-lg border-b border-blue-gray-200 text-white bg-transparent font-sans  font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                            {errors.email && <span className='text-red-500 text-xs'>{errors.email}</span>}

                            <label
                                className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">

                            </label>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <label htmlFor="" className='text-lg font-serif text-white font-semibold'>Password</label>
                    </div>
                    <div>
                        <div className="relative h-8 w-full max-w-[420px]">
                            <input type='password' placeholder="" onChange={handleInput} name='password' value={post.password}
                                className="peer h-full w-full text-lg border-b border-blue-gray-200 text-white bg-transparent font-sans  font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                            {errors.password && <span className='text-red-500 text-xs'>{errors.password}</span>}
                            <label
                                className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">

                            </label>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <label htmlFor="" className='text-lg font-serif text-white font-semibold'>Repeat password</label>
                    </div>
                    <div>
                        <div className="relative h-8 w-full max-w-[420px]">
                            <input type='password' placeholder="" onChange={handleInput} name='repeatPassword' value={post.repeatPassword}
                                className="peer h-full w-full text-lg border-b border-blue-gray-200 text-white bg-transparent font-sans  font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                            {errors.repeatPassword && <span className='text-red-500 text-xs'>{errors.repeatPassword}</span>}
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
            </form>
        </div>
    )
}

export default RegisterContainer