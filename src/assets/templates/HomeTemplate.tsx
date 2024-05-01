import React from 'react'
import Header from '../molecules/Header'
import CartIcon from '../../../public/Home/icons8-cart-100.png'
import Carosoul from '../atoms/Carosoul'
import Logo from '../../../public/common/CLOTHIFI-removebg-preview.png'
import CardContainer from '../organism/CardContainer'
import SampleImage2 from '../../../public/Home/Sample2.jpg'
import SampleImage3 from '../../../public/Home/Sample3.jpg'
import FooterElement from '../molecules/Footer'


const HomeTemplate = () => {
    return (
        <div className='bg-new-gray'>
            <div className='bg-header-color'>
                <Header />
            </div>
            <div className='bg-second-header h-16 tablet-or-mobile:h-8 flex justify-items-center grid-cols-12 px-14 tablet-or-mobile:px-1'>
                <div className='w-1/12 ml-8 tablet-or-mobile:ml-1'>
                    <button className='font-serif text-xl  text-header-btn hover:text-orange-900 mt-4 tablet-or-mobile:mt-2 hover:font-semibold ml-5 tablet-or-mobile:text-xs '>Women</button>
                </div>
                <div className='w-1/12 ml-10 tablet-or-mobile:ml-6'>
                    <button className='font-serif text-xl  text-header-btn hover:text-orange-900 mt-4 tablet-or-mobile:mt-2 hover:font-semibold ml-6 tablet-or-mobile:ml-6 tablet-or-mobile:text-xs'>Men</button>
                </div>
                <div className='w-1/12 ml-10 tablet-or-mobile:ml-7'>
                    <button className='font-serif text-xl  text-header-btn hover:text-orange-900 mt-4 tablet-or-mobile:mt-2 hover:font-semibold ml-5 tablet-or-mobile:ml-1 tablet-or-mobile:text-xs'>Kids</button>
                </div>
                <div className='w-1/12 ml-10 tablet-or-mobile:ml-4'>
                    <button className='font-serif text-xl  text-header-btn hover:text-orange-900 mt-4 tablet-or-mobile:mt-2 hover:font-semibold ml-6 tablet-or-mobile:ml-0 tablet-or-mobile:text-xs'>About</button>
                </div>
                <div className='w-2/12 ml-10 tablet-or-mobile:ml-4'>
                    <button className='font-serif text-xl  text-header-btn hover:text-orange-900 mt-4 tablet-or-mobile:mt-2 tablet-or-mobile:text-nowrap tablet-or-mobile:ml-0 hover:font-semibold ml-5 tablet-or-mobile:text-xs'>Contact-us</button>
                </div>
                <div className='w-6/12 ml-10 flex justify-end tablet-or-mobile:ml-6'>
                    <img src={CartIcon} alt="" className='size-10 mt-3 ml-4 rounded-full tablet-or-mobile:size-5 tablet-or-mobile:mt-2 tablet-or-mobile:ml-2' />
                    <label htmlFor="" className='right-12 mt-8 text-purple-500 font-bold tablet-or-mobile:mt-3 tablet-or-mobile:text-xs'>0</label>
                </div>
            </div>
            <div className='mt-8 ml-8 mr-8 pb-6'>
                <img src={Logo} alt="" className='absolute z-10 w-40 left-8 tablet-or-mobile:w-20' />
                <Carosoul/>
            </div>
            <div className='mt-2 bg-topics'>
                <label htmlFor="" className='text-topic-name text-2xl ml-12 font-serif font-semibold tablet-or-mobile:text-lg'>Best Sellings</label>
            </div>
            <div>
                <CardContainer desc='Dress code 1001' amount={"2500.00"} photo={SampleImage2}/>
            </div>
            <div className='mt-2 bg-topics'>
                <label htmlFor="" className='text-topic-name text-2xl ml-12 font-serif font-semibold tablet-or-mobile:text-lg'>Most popular search</label>
            </div>
            <div>
                <CardContainer desc='Shirt code 1002' amount={"2000.00"} photo={SampleImage3}/>
            </div>
            <div className='mt-6'>
                <FooterElement/>
            </div>
            
        </div>
    )
}

export default HomeTemplate