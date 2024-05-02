import React from 'react'
import FooterElement from '../molecules/Footer'

const AdminContainer = () => {
    return (
        <div>
            <div className='flex justify-center'>
                <div className='flex flex-col mb-8 bg-admin-page-bg w-[1000px] text-white rounded-xl border-2 border-white'>
                    <div className='flex mt-10'>
                        <label htmlFor="" className='ml-10 text-xl font-serif font-bold '>Category</label>
                        <div className='flex flex-col'>
                            <label htmlFor="men" className='text-xl font-serif font-bold ml-40'>Men</label>
                            <input type="radio" id='men' name='category' className='ml-44 mt-1' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="women" className='text-xl font-serif font-bold ml-40'>Women</label>
                            <input type="radio" id='women' name='category' className='ml-48 mt-1' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="kids" className='text-xl font-serif font-bold ml-40'>Kids</label>
                            <input type="radio" id='kids' name='category' className='ml-44 mt-1' />
                        </div>
                    </div>
                    <div className='flex mt-8'>
                        <label htmlFor="" className='ml-10 mt-1 text-xl font-serif font-bold '>Name</label>
                        <input type="text" className='rounded-lg bg-gray-200 ml-[116px] text-black' />
                        <label htmlFor="" className='ml-24 mt-1 text-xl font-serif font-bold '>Code</label>
                        <input type="text" className='rounded-lg bg-gray-200 ml-14 text-black' />
                    </div>
                    <div className='flex mt-8'>
                        <div className='mt-4'><label htmlFor="" className='ml-10 text-xl font-serif font-bold '>Description</label></div>
                        <textarea className="rounded-lg bg-gray-200 ml-14 w-96 text-black"></textarea>
                    </div>
                    <div className='flex mt-8'>
                        <label htmlFor="" className='ml-10 mt-1 text-xl font-serif font-bold '>Price</label>
                        <input type="number" className='rounded-lg bg-gray-200 ml-[124px] text-black' />
                    </div>
                    <div className='flex mt-8'>
                        <label htmlFor="" className='ml-10 mt-1 text-xl font-serif font-bold '>Image</label>
                        <input type="file" accept="image/*" className='rounded-lg bg-gray-200 ml-[115px] text-black' />
                    </div>
                    <div className='flex mt-8 mb-8'>
                        <label htmlFor="" className='ml-10 mt-1 text-xl font-serif font-bold '>Qty in stock</label>
                        <input type="number" className='rounded-lg bg-gray-200 ml-[60px] text-black w-32' />
                    </div>
                </div>
            </div>
            <div>
                <FooterElement />
            </div>
        </div>
    )
}

export default AdminContainer
