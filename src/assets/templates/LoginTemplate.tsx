import React from 'react'
import LoginImage from '../../../public/Login/Login.jpg'
import Logo from '../../../public/common/CLOTHIFI-removebg-preview.png'
import LoginContainer from '../organism/LoginContainer'


const LoginTemplate = () => {
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 bg-new-gray '>
            <div className=' desktop-or-laptop:w-4/5 tablet-or-mobile:w-0 lg:block hidden'>
                <img src={Logo} alt="" className='absolute left-7 top-6 h-32 tablet-or-mobile:w-0' />
                <img src={LoginImage} alt="" className='w-full h-screen ' />
            </div>

            <div className="flex justify-center desktop-or-laptop:w-4/5 h-screen">
                <LoginContainer/>
            </div>
        </div>

    )
}

export default LoginTemplate