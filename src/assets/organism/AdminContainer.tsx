/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import FooterElement from '../molecules/Footer'
import { useForm } from "react-hook-form";
import RegBtn from '../molecules/registerBtn'
import axios from 'axios';
import Swal from 'sweetalert2';

const AdminContainer = () => {

    const [selectedFile, setSelectedFile] = React.useState<File | null>(null);


    const handleFileChange = (event: any) => {
        if (event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
        } else {
            setSelectedFile(null);
        }
    };

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm({
        defaultValues: {
            category: 'men',
            name: "",
            code: "",
            description: "",
            price: "",
            image: "",
            qtyInStock: ""
        }
    })

    const submitForm = (data: any) => {
        const formData = new FormData();
        Object.keys(data).forEach((key) => {
            formData.append(key, data[key]);
        });
        if (selectedFile) {
            formData.append('image', selectedFile);
        }
        axios.post("http://localhost:8081/product/post", formData)
            .then(response => {
                console.log("Response data : ", response.data);
                if (response.data === "product added") {
                    alert("Product addded successfully")
                    Swal.fire({
                        position : "center",
                        icon : "success",
                        title : "Product added",
                        timer : 1500

                    })
                } else {
                    Swal.fire({
                        position : "center",
                        icon : "error",
                        title : "Product added failed",
                        timer : 1500

                    })
                }
            })
            .catch(err => {
                console.log(err);

            });


    }


    return (
        <div>
            <form action="">
                <div className='flex justify-center'>
                    <div className='flex flex-col mb-8 bg-admin-page-bg w-[1000px] text-white rounded-xl border-2 border-white'>
                        <div className='flex mt-10'>
                            <label htmlFor="" className='ml-10 text-xl font-serif font-bold '>Category</label>
                            <div className='flex flex-col'>
                                <label htmlFor="men" className='text-xl font-serif font-bold ml-40'>Men</label>
                                <input type="radio" id='men' value="men" className='ml-44 mt-1'
                                    {...register("category", {
                                        required: {
                                            value: true,
                                            message: ""
                                        }
                                    })}
                                />

                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="women" className='text-xl font-serif font-bold ml-40'>Women</label>
                                <input type="radio" id='women' value="women" className='ml-48 mt-1'
                                    {...register("category", {
                                        required: {
                                            value: true,
                                            message: ""
                                        }
                                    })} />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="kids" className='text-xl font-serif font-bold ml-40'>Kids</label>
                                <input type="radio" id='kids' value="kids" className='ml-44 mt-1'
                                    {...register("category", {
                                        required: {
                                            value: true,
                                            message: ""
                                        }
                                    })}
                                />
                            </div>
                        </div>
                        <div className='flex mt-8'>
                            <label htmlFor="" className='ml-10 mt-1 text-xl font-serif font-bold '>Name</label>
                            <input type="text" className='rounded-lg bg-gray-200 ml-[116px] text-black'
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name required! "
                                    }
                                })}
                            />
                            <p className='text-red-900 font-serif text-xs flex justify-end mt-1'>{errors.name?.message}</p>
                            <label htmlFor="" className='ml-24 mt-1 text-xl font-serif font-bold '>Code</label>
                            <input type="text" className='rounded-lg bg-gray-200 ml-14 text-black'
                                {...register("code", {
                                    required: {
                                        value: true,
                                        message: "Code required!"
                                    }
                                })}
                            />
                             <p className='text-red-900 font-serif text-xs flex justify-end mt-1'>{errors.code?.message}</p>
                        </div>
                        <div className='flex mt-8'>
                            <div className='mt-4'><label htmlFor="" className='ml-10 text-xl font-serif font-bold '>Description</label></div>
                            <textarea className="rounded-lg bg-gray-200 ml-14 w-96 text-black"
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: ""
                                    }
                                })}
                            />
                        </div>
                        <div className='flex mt-8'>
                            <label htmlFor="" className='ml-10 mt-1 text-xl font-serif font-bold '>Price</label>
                            <input type="number" className='rounded-lg bg-gray-200 ml-[124px] text-black'
                                {...register("price", {
                                    required: {
                                        value: true,
                                        message: ""
                                    }
                                })}
                            />
                        </div>
                        <div className='flex mt-8'>
                            <label htmlFor="" className='ml-10 mt-1 text-xl font-serif font-bold '>Image</label>
                            <input type="file" accept="image/*" className='rounded-lg bg-gray-200 ml-[115px] text-black'
                                {...register("image")} onChange={handleFileChange}
                            />
                        </div>
                        <div className='flex mt-8 mb-8'>
                            <label htmlFor="" className='ml-10 mt-1 text-xl font-serif font-bold '>Qty in stock</label>
                            <input type="number" className='rounded-lg bg-gray-200 ml-[60px] text-black w-32'
                                {...register("qtyInStock", {
                                    required: {
                                        value: true,
                                        message: ""
                                    }
                                })}
                            />
                        </div>
                        <div className='flex justify-center mb-10 '>
                            <RegBtn name='Add Item' click={handleSubmit(submitForm)} />
                        </div>

                    </div>
                </div>
                <div>
                    <FooterElement />
                </div>
            </form>
        </div>
    )
}

export default AdminContainer
