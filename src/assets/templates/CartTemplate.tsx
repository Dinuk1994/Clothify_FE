import React from 'react'
import Logo from '../../../public/common/CLOTHIFI-removebg-preview.png'
import CartContainer from '../organism/CartContainer'

const CartTemplate = () => {
    return (
        <div className='bg-new-gray'>
            <div className='flex ml-3 grid-cols-2'>
                <div className='w-1/2 justify-start'>
                    <img src={Logo} alt="" className='w-36 tablet-or-mobile:w-24 ' />
                </div>
                <div className='w-1/2 flex justify-end mt-4 mr-28'>
                    <div className='flex flex-col '>
                        <label htmlFor="" className='font-bold text-white font-serif text-xl tablet-or-mobile:text-lg'>Total</label>
                        <label htmlFor="" className='font-bold text-white font-serif text-xl tablet-or-mobile:text-lg'>LKR 0.00</label>
                    </div>
                </div>
            </div>
            <div className='flex grid-cols-2'>
                <div>
                    <CartContainer/>
                </div>
            </div>

        </div>
    )
}

export default CartTemplate