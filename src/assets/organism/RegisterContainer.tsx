/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import Logo from '../../../public/common/CLOTHIFI-removebg-preview.png'
import Regbtn from '../molecules/registerBtn'
import GoogleImage from '../../../public/Login/icons8-google-144.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";

const RegisterContainer = () => {

    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate("/home")
    }

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }

    } = useForm({
        defaultValues: {
            fullName: "",
            userName: "",
            email: "",
            password: "",
            repeatPassword: ""
        }
    });


    const submitForm = (data: any) => {
        console.log(data);

        axios.post('http://localhost:8080/register/add', data)
            .then(response => {
                console.log(response.data);

                alert("User registered successfully");
                navigateToHome();

            })
            .catch(err => {
                console.log(err);
                if (err.response && err.response.status === 400 && err.response.data === "Can't register user already exists") {
                    alert("User already exists. Please use a different email.");
                }
            });

    }

    const password = watch("password")


    return (
        <div>
            <form action="" noValidate>
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
                            <input type="text" id="full_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Cena"
                                {...register("fullName", {
                                    required: {
                                        value: true,
                                        message: "Full Name is requires*"

                                    },

                                })}
                            />
                            <p className='text-red-500 font-serif text-xs flex justify-end mt-1'>{errors.fullName?.message}</p>
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
                            <input type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required
                                {...register("userName", {
                                    required: {
                                        value: true,
                                        message: "Username is required*"
                                    }
                                })}
                            />
                            <p className='text-red-500 font-serif text-xs flex justify-end mt-1'>{errors.userName?.message}</p>
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
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required
                                {...register("email", {
                                    pattern: { value: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/, message: "Please enter valid email" },
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    }
                                })}
                            />
                            <p className='text-red-500 font-serif text-xs flex justify-end mt-1'>{errors.email?.message}</p>
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
                            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required
                                {...register('password', {
                                    pattern: {
                                        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
                                        message: "Password cannot be accepted "
                                    }
                                })}
                            />
                            <p className='text-red-500 font-serif text-xs flex justify-end mt-1'>{errors.password?.message}</p>
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
                            <input type="password" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required
                                {...register('repeatPassword', {
                                    validate: value =>
                                        value === password || "Passwords do not match"
                                })}
                            />
                            <p className='text-red-500 font-serif text-xs flex justify-end mt-1'>{errors.repeatPassword && errors.repeatPassword.message}</p>
                            <label
                                className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">

                            </label>
                        </div>
                    </div>
                    <div className='mt-4 flex justify-center'>
                        <Regbtn click={handleSubmit(submitForm)} name='Register' />
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