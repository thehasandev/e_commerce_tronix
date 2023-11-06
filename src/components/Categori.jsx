import React from 'react'
import Image from './Image'


function Categori({src,alt,text,className}) {
  return (
    <div className={`w-w154 text-center ${className}`}>
        <Image src={src} alt={alt} className="mx-auto  h-[100px]"/>
        <p className='font-pop font-normal text-sm lg:text-2xl text-secondary lg:mt-4'>{text}</p>
    </div>
  )
}

export default Categori