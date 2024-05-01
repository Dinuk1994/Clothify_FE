import React from 'react'
import ShippingElement from '../molecules/ShippingElement'

const ShippingContainer = () => {
    return (
        <div className='ml-24 mt-4 w-[650px] bg-header-color border-2 border-white rounded-xl tablet-or-mobile:w-80 tablet-or-mobile:ml-3'>
            <div className='flex justify-center'>
                <label htmlFor="" className='mt-4 font-serif font-bold text-2xl text-white tablet-or-mobile:text-lg tablet-or-mobile:mt-5'>Shipping Details</label>
            </div>
    
            <div className='flex flex-col'>
                <ShippingElement/>
            </div>
        </div>
    )
}

export default ShippingContainer