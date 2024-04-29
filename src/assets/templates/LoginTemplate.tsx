import React from 'react'
import LoginImage from '../../../public/Login/Login.jpg'
import Logo from '../../../public/common/CLOTHIFI-removebg-preview.png'
import LoginContainer from '../organism/LoginPage/LoginContainer'


const LoginTemplate = () => {
    return (
        <div className='grid grid-cols-2 bg-new-gray'>
            <div className='flex'>
                <img src={Logo} alt="" className='absolute left-7 top-6 h-60' />
                <img src={LoginImage} alt="" className='w-[1099px] h-screen ' />
            </div>

            <div className="flex justify-center">
                <LoginContainer/>
            </div>
        </div>

    )
}

export default LoginTemplate