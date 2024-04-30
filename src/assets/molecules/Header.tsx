import React from 'react'
import '../../index.css'
import Logo from '../../../public/common/CLOTHIFI-removebg-preview.png'
import UserIcon from '../../../public/Home/icons8-user-100 (1).png'

const Header = () => {
    return (
        <div className='flex grid-cols-3'>
            <div className='w-1/3 tablet-or-mobile:w-20'>
                <button><img src={Logo} alt="" className='w-28 ml-4'/></button>
            </div>
            <div className='w-2/3 tablet-or-mobile:text-base tablet-or-mobile:text-nowrap tablet-or-mobile:ml-6 text-white font-heading text-4xl  font-bold flex justify-center justify-items-center mt-4'>
                FEEL THE DIFFERENCE
            </div>

            <div className='flex justify-end w-1/3'>
                <div className='flex flex-col items-center'>
                    <div className='flex justify-center mt-4 w-1/2'>
                        <img src={UserIcon} alt="" className='rounded-full ml-3 size-10 tablet-or-mobile:size-5 tablet-or-mobile:ml-1' />
                        <label htmlFor="" className='px-2 mt-2 mr-2 tablet-or-mobile:text-xs font-bold text-purple-500 tablet-or-mobile:mt-1'>Username</label>
                    </div>
                    <div className='flex justify-center  w-1/2'>
                        <button className='px-2 text-white tablet-or-mobile:text-xs font-bold mb-1 hover:text-orange-300'>Login</button>
                        <button className='px-2 text-white tablet-or-mobile:text-xs font-bold mb-1 mr-5 hover:text-orange-300'>Register</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header