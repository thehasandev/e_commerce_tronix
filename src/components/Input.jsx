import React from 'react'

function Input() {
  return (
    <div>
        <p className='font-pop font-normal text-small text-secondary mb-4'>Name</p>
        <input className='w-full border border-solid border-[#A7A7A7] px-5 py-4 rounded-lg' type="text" placeholder="Name"/>
    </div>
  )
}

export default Input