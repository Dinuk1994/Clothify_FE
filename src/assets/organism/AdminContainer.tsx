/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
import FooterElement from '../molecules/Footer'
import { useForm } from "react-hook-form";
import RegBtn from '../molecules/registerBtn'
import axios from 'axios';
import Swal from 'sweetalert2';


const AdminContainer = () => {

    const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
    const [isChecked, setIsCkecked] = useState(false);
    const [itemDetails, setItemDeails] = useState<any>({});
    const [id, setId] = useState<number>();

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
        setValue,
        watch,
        formState: { errors }
    } = useForm({
        defaultValues: {
            id: '',
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
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Product added",
                        timer: 1500
                    })
                } else {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "Product added failed",
                        timer: 1500
                    })
                }
            })
            .catch(err => {
                console.log(err);

            });
    }
    const updateItem = (data: any) => {
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
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Product updated",
                        timer: 1500
                    })
                } else {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "Product updated failed",
                        timer: 1500
                    })
                }
            })
            .catch(err => {
                console.log(err);

            });
    }

    const deleteItem = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await axios.delete(`http://localhost:8081/product/deleteById/${id}`);
                    if (response.data) {
                        console.log(response.data);
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        );
                    }
                } catch (error) {
                    console.error('Error deleting item:', error);
                }
            }
        });
    };
    
    const getItem = async () => {
        try {
            const response = await fetch(`http://localhost:8081/product/getById/${id}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            if (data) {
                setItemDeails(data);
                console.log(data)
    
                setValue('category', data.category);
                setValue('name', data.name);
                setValue('code', data.code);
                setValue('description', data.description);
                setValue('price', data.price);
                setValue('image', data.image);
                setValue('qtyInStock', data.qtyInStock);
            } else {
                setItemDeails({});
                setValue('category', 'men');
                setValue('name', '');
                setValue('code', '');
                setValue('description', '');
                setValue('price', '');
                setValue('image', '');
                setValue('qtyInStock', '');
            }
        } catch (error) {
            console.error('Error fetching item details:', error);
        }
    };
    
   

    useEffect(() => {
        if (isChecked && id) {
            getItem();
        }
    }, [isChecked, id]);


  


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
                            <input type="text" id='code' className='rounded-lg bg-gray-200 ml-14 text-black'
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
                                        message: "Description is required!"
                                    }
                                })}
                            />
                            <p className='text-red-900 font-serif text-xs flex justify-end mt-1'>{errors.description?.message}</p>
                        </div>
                        <img id='image' src={selectedFile ? URL.createObjectURL(selectedFile) : itemDetails.image} alt="" className='w-44 absolute ml-[690px] mt-[210px] rounded-lg border-2 border-white shadow-lg shadow-black' />
                        <div className='flex mt-8'>
                            <label htmlFor="" className='ml-10 mt-1 text-xl font-serif font-bold '>Price</label>
                            <input type="number" className='rounded-lg bg-gray-200 ml-[124px] text-black'
                                {...register("price", {
                                    required: {
                                        value: true,
                                        message: "Price required!"
                                    }
                                })}
                            />
                            <p className='text-red-900 font-serif text-xs flex justify-end mt-1'>{errors.price?.message}</p>
                        </div>
                        <div className='flex mt-8'>
                            <label htmlFor="" className='ml-10 mt-1 text-xl font-serif font-bold '>Image</label>
                            <input type="file" accept="image/*" className='rounded-lg bg-gray-200 ml-[115px] text-black'
                                // {...register("image", {
                                //     required: {
                                //         value: true,
                                //         message: "Image is required!"
                                //     }
                                // })} 
                                onChange={handleFileChange}
                            />
                            <p className='text-red-900 font-serif text-xs flex justify-end mt-1'>{errors.image?.message}</p>
                        </div>
                        <div className='flex mt-8'>
                            <label htmlFor="" className='ml-10 mt-1 text-xl font-serif font-bold '>Qty in stock</label>
                            <input type="number" className='rounded-lg bg-gray-200 ml-[60px] text-black w-32'
                                {...register("qtyInStock", {
                                    required: {
                                        value: true,
                                        message: "Qty is required!"
                                    }
                                })}
                            />
                            <p className='text-red-900 font-serif text-xs flex justify-end mt-1'>{errors.qtyInStock?.message}</p>
                        </div>
                        <div>
                            <div className='flex mt-8 mb-8'>
                                <label htmlFor="" className='ml-10 mt-1 text-xl font-serif font-bold '>Item ID</label>
                                <input
                                    type="number"
                                    value={id || ''}
                                    className='rounded-lg bg-gray-200 ml-[100px] text-black w-40'
                                    disabled={!isChecked}
                                    {...register("id")}
                                    onChange={(e) => {
                                        setId(Number(e.target.value));
                                        getItem();
                                    }}
                                />
                                <input
                                    type="checkbox"
                                    className='ml-4 mt-3'
                                    checked={isChecked}
                                    onChange={() => setIsCkecked(!isChecked)}
                                />
                                <label className='mt-2 ml-2 text-red-700' htmlFor="">If you want to UPDATE/DELETE the item please enter the item ID number*</label>
                            </div>
                        </div>
                        <div className='flex grid-cols-2 justify-center mb-10 '>
                            <div className='grid-cols-1'>

                            </div>
                            <div className='flex justify-between '>
                                <div className='ml-10' ><RegBtn name='Delete item' makeDissable={!isChecked} className='rounded-3xl shadow-2xl w-40  text-xl border-4 border-gray-300 font-serif text-white bg-red-600 p-1 hover:bg-red-800' click={handleSubmit(deleteItem)}  /></div>

                                <div className='ml-10'> <RegBtn name='Update item' makeDissable={!isChecked} className='rounded-3xl shadow-2xl w-40  text-xl border-4 border-gray-300 font-serif text-white bg-blue-600 p-1 hover:bg-blue-800' click={handleSubmit(updateItem)} /></div>

                                <div className='ml-10' ><RegBtn name='Add Item' makeDissable={isChecked} className='rounded-3xl shadow-2xl w-40  text-xl border-4 border-gray-300 font-serif text-white bg-btn-color p-1 hover:bg-emerald-600' click={handleSubmit(submitForm)} /></div>
                            </div>
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
