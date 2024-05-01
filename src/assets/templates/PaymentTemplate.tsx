import React from 'react'
import PaymentContainer from '../organism/PaymentContainer'
import Logo from '../../../public/common/CLOTHIFI-removebg-preview.png'
import FooterElement from '../molecules/Footer'

const PaymentTemplate = () => {
    return (
        <div className='bg-new-gray'>
            <div className='flex justify-center '>
                <div className='flex flex-col'>
                    <div className='flex justify-center'>
                        <img src={Logo} alt="" className='w-44 tablet-or-mobile:w-16' />
                    </div>
                    <div>
                        <PaymentContainer />
                    </div>
                </div>
            </div>
            <div className='mt-8'>
                <FooterElement />
            </div>
        </div>
    )
}

export default PaymentTemplate