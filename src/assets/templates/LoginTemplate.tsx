import React from 'react'
import LoginImage from '../../../public/Login/Login.jpg'
import Logo from '../../../public/common/CLOTHIFI-removebg-preview.png'
import LoginContainer from '../organism/LoginPage/LoginContainer'


const LoginTemplate = () => {
    return (
        <div className='grid grid-cols-2 bg-new-gray '>
            <div className='flex desktop-or-laptop:w-full tablet-or-mobile:w-0'>
                <img src={Logo} alt="" className='absolute left-7 top-6 h-32  tablet-or-mobile:w-0' />
                <img src={LoginImage} alt="" className='w-full h-screen ' />
            </div>

            <div className="flex justify-center desktop-or-laptop:w-full tablet-or-mobile:w-full h-screen">
                <LoginContainer/>
            </div>
        </div>

    )
}

export default LoginTemplate