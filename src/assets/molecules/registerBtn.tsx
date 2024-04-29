import React from 'react'

interface registerBtnProps{
    name : string
}

const registerBtn: React.FC<registerBtnProps> = ({name}) => {
  return (
    <div >
        <button className='rounded-3xl shadow-2xl w-52 text-3xl border-4 border-gray-300 font-serif text-white bg-btn-color p-4 hover:bg-emerald-700'>{name}</button>
    </div>
  )
}

export default registerBtn