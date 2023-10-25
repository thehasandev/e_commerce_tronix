import React from 'react'
import Image from './Image'


function Team({src,alt,name,title}) {
  return (
    <div className='w-w376 text-center'>
         <Image src={src} alt={alt}/>
         <div className='px-20 bg-white py-8 rounded-xl'>
          <h3 className='font-pop font-medium text-2xl text-secondary'>{name}</h3>
          <p className='font-pop font-normal text-small text-secondary'>{title}</p>

         </div>
    </div>
  )
}

export default Team