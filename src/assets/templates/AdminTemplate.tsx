import React from 'react'
import Logo from '../../../public/common/CLOTHIFI-removebg-preview.png'
import AdminContainer from '../organism/AdminContainer'

const AdminTemplate = () => {
    return (
        <div className='bg-new-gray'>
            <div className='flex grid-cols-2'>
                <div className='w-5/6 flex justify-start'>
                    <img src={Logo} alt="" className='w-44 tablet-or-mobile:size-24' />
                </div>
                <div className='mt-12 w-1/6 flex justify-end mr-14 mb-5'>
                    <div className='bg-white  flex justify-center p-2 rounded-xl shadow-lg shado'>
                        <label htmlFor="" className='font-serif text-xl font-bold text-gray-500 tablet-or-mobile:text-md'>Administration Only</label>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-10'>
                <AdminContainer/>
            </div>
        </div>
    )
}

export default AdminTemplate