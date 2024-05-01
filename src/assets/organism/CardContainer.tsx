import React from 'react'
import CardElement from '../atoms/Card'


interface CardContainerProps{
    photo : string
    desc : string
    amount : string
}

const CardContainer:React.FC<CardContainerProps> = ({photo,desc,amount}) => {
  return (
    <div>
        <div className='flex flex-wrap mt-5 mr-5 ml-8 grid-cols-5 tablet-or-mobile:grid-cols-2'>
                <div className='w-1/5 tablet-or-mobile:w-1/2 '>
                    <CardElement description={desc} price={amount} image={photo}/>
                </div>
                <div className='w-1/5 tablet-or-mobile:w-1/2'>
                    <CardElement description={desc} price={amount} image={photo}/>
                </div>
                <div className='w-1/5 tablet-or-mobile:w-1/2'>
                    <CardElement description={desc} price={amount} image={photo}/>
                </div>
                <div className='w-1/5 tablet-or-mobile:w-1/2'>
                    <CardElement description={desc} price={amount} image={photo}/>
                </div>
                <div className='w-1/5 tablet-or-mobile:w-1/2'>
                    <CardElement description={desc} price={amount}image={photo}/>
                </div>
            </div>
    </div>
  )
}

export default CardContainer