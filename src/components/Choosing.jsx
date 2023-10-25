import React from 'react'
import Image from './Image'


function Choosing({src,alt,name, des}) {
  return (
    <div className='w-w376 px-5'>
       <Image src={src} alt={alt} className="mx-auto"/>
       <h3 className='font-pop font-medium text-2xl mt-8 mb-2 text-secondary text-center'>{name}</h3>
       <p className='font-pop font-medium text-small text-center text-secondary'>{des}</p>
    </div>
  )
}

export default Choosing