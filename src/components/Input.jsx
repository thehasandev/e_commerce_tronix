import React from 'react'

function Input({name,text,placeholder,className}) {
  return (
    <div className={`${className}`}>
        <p className='font-pop font-normal text-small text-secondary mb-4'>{name}</p>
        <input className='w-full border border-solid border-[#A7A7A7] px-5 py-4 rounded-lg' type={text} placeholder={placeholder}/>
    </div>
  )
}

export default Input