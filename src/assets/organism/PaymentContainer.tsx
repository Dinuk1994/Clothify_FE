import React from 'react'
import PaymentElement from '../molecules/PaymentElement'
import PaymentImage from '../../../public/payment/Top up credit-bro.png'

const PaymentContainer = () => {
    return (
        <div className='bg-header-color w-[1000px] rounded-xl border-2 border-white tablet-or-mobile:w-[350px]'>
            <div className='flex justify-center'>
                <label htmlFor="" className='font-serif text-3xl text-white mt-3 tablet-or-mobile:text-xl'>Payment Portal</label>
            </div>
            <div className='flex grid-cols-2'>
                <div className=''>
                    <PaymentElement />
                </div>
                <div>
                    <img src={PaymentImage} alt="" className='hover:animate-pulse tablet-or-mobile:hidden' />
                </div>
            </div>

        </div>
    )
}

export default PaymentContainer 