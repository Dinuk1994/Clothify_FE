import React from 'react'

interface CartItemProps{
    itemName : string
    itemNumber : string
    qty : string
    price : string
    image : string
}

const CartItem:React.FC<CartItemProps> = ({itemName,itemNumber,qty,price,image}) => {
  return (
    <div className='w-72 mt-4 rounded-lg bg-new-gray border-2 border-white'>
            <div className='flex grid-cols-2'>
                <div className='flex flex-col w-3/5 ml-3 text-white font-serif font-bold'>
                    <label htmlFor="" className=''>{itemName}</label>
                    <label htmlFor="" className=''>Item number : {itemNumber}</label>
                    <label htmlFor="">Qty :{qty} <button className='font-bold ml-2 bg-red-300 rounded-full size-6 hover:bg-red-600'>-</button><button className='font-bold ml-2 bg-blue-300 rounded-full size-6 hover:bg-blue-600'>+</button></label>
                    <label htmlFor="">Price : {price}</label>
                </div>
                <div className='flex w-2/5'>
                    <img src={image} alt="" className='rounded-lg size-24 ml-4 border-2 border-white' />
                    <button>Delete</button>
                </div>

            </div>
    </div>
  )
}

export default CartItem