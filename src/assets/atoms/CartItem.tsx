import React, { useState } from 'react'
import BinIcon from '../../../public/Cart/icons8-bin-100.png'

interface CartItemProps{
    itemName : string
    itemNumber : string
    qty : number
    price : string
    image : string
}

const CartItem:React.FC<CartItemProps> = ({itemName,itemNumber,qty,price,image}) => {

  const[quantity , setQuantity] = useState(qty);

  const incrementQty = () => {
    setQuantity(quantity+1)
  }

  const decrementQty = () =>{
    if(quantity>0){
      setQuantity(quantity-1)
    }
  }


  return (
    <div className='w-80 mt-4 tablet-or-mobile:w-72 rounded-lg bg-new-gray border-2 border-white mb-4'>
            <div className='flex grid-cols-2'>
                <div className='flex flex-col w-3/5 ml-3 text-white font-serif font-bold'>
                    <label htmlFor="" className='tablet-or-mobile:text-sm'>{itemName}</label>
                    <label htmlFor="" className='tablet-or-mobile:text-sm'>Item number : {itemNumber}</label>
                    <label htmlFor="" className='tablet-or-mobile:text-sm'>{`Qty : ${quantity}`}  <button className='font-bold ml-2 bg-red-300 rounded-full size-6 hover:bg-red-600 hover:animate-pulse' onClick={decrementQty}>-</button><button className='font-bold ml-2 bg-blue-300 rounded-full size-6 hover:bg-blue-600 hover:animate-pulse' onClick={incrementQty}>+</button></label>
                    <label htmlFor="" className='tablet-or-mobile:text-sm'>Price : {price}</label>
                </div>
                <div className='flex w-2/5'>
                    <img src={image} alt="" className='rounded-lg size-24 ml-4 border-2 border-white tablet-or-mobile:size-24 tablet-or-mobile:ml-3 ' />
                    <button><img src={BinIcon} alt="" className='w-6 ml-2 mr-4 tablet-or-mobile:w-4 hover:animate-bounce' /></button>
                </div>

            </div>
    </div>
  )
}

export default CartItem