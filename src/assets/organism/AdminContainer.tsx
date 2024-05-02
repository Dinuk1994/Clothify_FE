import React from 'react'

const AdminContainer = () => {
    return (
        <div>
            <div className='flex flex-col bg-admin-page-bg w-[1000px] text-white rounded-xl border-2 border-white'>
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
                    <label htmlFor="" className='ml-10 text-xl font-serif font-bold '>Name</label>
                    <input type="text" className='rounded-lg bg-gray-200 ml-14 text-black' />
                    <label htmlFor="" className='ml-24 text-xl font-serif font-bold '>Code</label>
                    <input type="text" className='rounded-lg bg-gray-200 ml-14 text-black' />
                </div>
            </div>

        </div>
    )
}

export default AdminContainer
