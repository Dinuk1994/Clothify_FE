import React from 'react'

interface registerBtnProps{
    name : string
    click? : ()=> void;
}

const registerBtn: React.FC<registerBtnProps> = ({name,click}) => {
  return (
    <div >
        <button onClick={click}  className='rounded-3xl shadow-2xl w-40  text-xl border-4 border-gray-300 font-serif text-white bg-btn-color p-1 hover:bg-emerald-600'>{name}</button>
    </div>
  )
}

export default registerBtn