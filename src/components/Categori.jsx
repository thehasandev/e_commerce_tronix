import React from 'react'
import Image from './Image'


function Categori({src,alt,text,className}) {
  return (
    <div className={`w-[154px] text-center ${className}`}>
        <Image src={src} alt={alt} className="mx-auto"/>
        <p className='font-pop font-normal text-2xl text-secondary mt-4'>{text}</p>
    </div>
  )
}

export default Categori