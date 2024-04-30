import React from 'react'
import RegisterImage from '../../../public/Register/RegisterImage.jpg'
import Logo from '../../../public/common/CLOTHIFI-removebg-preview.png'
import RegisterContainer from '../organism/LoginPage/RegisterContainer'

const Registertemplate = () => {
  return (
    <div>
         <div className='grid lg:grid-cols-2 grid-cols-1 bg-new-gray '>
            <div className=' desktop-or-laptop:w-4/5 tablet-or-mobile:w-0 lg:block hidden'>
              <img src={Logo} alt="" className='absolute left-7 top-6 h-32  tablet-or-mobile:w-0' />
               <img src={RegisterImage} alt="" className='h-screen w-full' />
            </div>

            <div className="flex justify-center desktop-or-laptop:w-4/5 tablet-or-mobile:p-6 h-screen">
               <RegisterContainer/>
            </div>
        </div>
    </div>
  )
}

export default Registertemplate