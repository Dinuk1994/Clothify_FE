import React from 'react'
import VisaImage from '../../../public/common/icons8-visa-card-100.png'
import MasterCard from '../../../public/common/mastercard (1).png'

const PaymentElement = () => {
    const [selectedOption, setSelectedOption] = React.useState('visa');

    const handleOptionChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedOption(event.target.value);
    }

    return (
        <div className='ml-12 mt-8 tablet-or-mobile:ml-3'>
            <div>
                <div className='flex'>
                    <label htmlFor="" className='font-serif text-white text-xl tablet-or-mobile:text-sm text-nowrap'>Choose your payment method</label>
                    <div className='flex flex-col'>
                        <img src={VisaImage} alt="" className='-mt-2 size-14 ml-10 tablet-or-mobile:size-8' />
                        <div className='-mt-1 ml-14 tablet-or-mobile:ml-12'>
                            <label>
                                <input type="radio" value="visa" checked={selectedOption === 'visa'} onChange={handleOptionChange} />
                            </label>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <img src={MasterCard} alt="" className='-mt-7 size-24 ml-8 tablet-or-mobile:size-14 tablet-or-mobile:-mt-5 tablet-or-mobile:ml-4' />
                        <div className='-mt-6 ml-16 tablet-or-mobile:-mt-4 tablet-or-mobile:ml-9'>
                            <label>
                                <input type="radio" value="mastercard" checked={selectedOption === 'mastercard'} onChange={handleOptionChange} />
                            </label>
                        </div>
                    </div>
                </div>
                <div className='mt-10'>
                    <label htmlFor="" className='font-serif text-white text-xl tablet-or-mobile:text-sm'>Your information</label>
                </div>

                {/* -------------------------------------------------------- */}
                <div className="mb-6">
                    <input type="email" id="email" className="bg-gray-50  mt-4  w-[450px] tablet-or-mobile:w-[320px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email address" required />
                    <input type="tel" id="bank number" className="bg-gray-50  mt-4  w-[450px] tablet-or-mobile:w-[320px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bank card number(xxxx-xxxx-xxxx-xxxx)" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                    <input type="text" id="company" className="bg-gray-50  mt-4  w-[450px] tablet-or-mobile:w-[200px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bank name" required />
                    <div className='flex'>
                        <input type="date" id="date" className="bg-gray-50  mt-4  w-[200px] tablet-or-mobile:w-[150px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bank name" required />
                        <input
                            type="number"
                            id="cvv"
                            className="bg-gray-50 ml-8 mt-4 w-[150px] tablet-or-mobile:w-[120px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="CVV"
                            required
                            onInput={(e) => {
                                const input = e.target as HTMLInputElement;
                                input.value = Math.max(0, parseInt(input.value)).toString().slice(0, 3);
                            }}
                        />

                    </div>
                    <div className='flex mt-4'>
                        <button className='bg-confirm-btn w-32 rounded-lg mt-4 font-serif text-white p-1 text-xl mb-4 hover:bg-blue-900'>Proceed</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PaymentElement
