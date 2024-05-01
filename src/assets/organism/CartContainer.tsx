import React from 'react'
import CartImage from '../../../public/Cart/Cart.png'
import CartItem from '../atoms/CartItem'
import SampleImage from '../../../public/Home/Sample3.jpg'

const CartContainer = () => {
    return (
        <div className='ml-28 mt-4 w-96 bg-header-color border-2 border-white rounded-xl tablet-or-mobile:w-80 tablet-or-mobile:ml-3'>
            <div className='flex justify-between'>
                <img src={CartImage} alt="" className='size-14 ml-6 mt-4 tablet-or-mobile:size-10 tablet-or-mobile:ml-3' />
                <label htmlFor="" className='mt-8 font-serif font-bold text-xl text-white tablet-or-mobile:text-lg tablet-or-mobile:mt-5'>Your Cart</label>
                <img src={CartImage} alt="" className='size-14  mr-6 mt-4 tablet-or-mobile:size-10 tablet-or-mobile:mr-3' />
            </div>
            <div>
                <hr />
            </div>
            <div className='flex justify-center'>
                <div className='flex flex-col'>
                    <div>
                        <CartItem itemName='Men T shirt ' itemNumber='1001' qty={0} price='2500.00' image={SampleImage} />
                        <CartItem itemName='Men T shirt ' itemNumber='1001' qty={0} price='2500.00' image={SampleImage} />
                        <CartItem itemName='Men T shirt ' itemNumber='1001' qty={0}  price='2500.00' image={SampleImage} />
                        <CartItem itemName='Men T shirt ' itemNumber='1001' qty={0}  price='2500.00' image={SampleImage} />
                    </div>
                    <div className='flex justify-center'>
                        <button className='bg-confirm-btn w-32 rounded-lg mt-2 font-serif text-white p-1 text-xl mb-4 hover:bg-blue-900'>Confirm</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default CartContainer