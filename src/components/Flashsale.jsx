import React from 'react'
import Image from './Image'
import Flex from './Flex'

function Flashsale({src,alt,name,price,avilabelValue,soldValue,badge,discount}) {
  return (
    <div className='2xl:w-w512 rounded-xl   border border-gray relative'>
        <Image src={src} alt={alt} className="rounded-t-xl w-full h-96" />
        <div className='xl:h-96 w-full bg-black/20 top-0 left-0 absolute'></div>
        <div className='xl:w-32 bg-[#BB6BD9] rounded-[8px] absolute top-8 right-8'>
            <p className='font-pop font-medium text-small text-white px-6 py-2.5 '>{badge}% OFF</p>
        </div>
        <div className='px-24 mt-8 mb-10'>
          <h3 className='font-pop font-normal text-2xl text-secondary text-center'>{name}</h3>
          <p className='font-pop font-normal text-2xl text-primary text-center mt-2 mb-8 '> <span className='text-secondary line-through'>${discount}</span> - ${price}</p>
          <Flex className="justify-between items-center ">
            <p className='font-pop font-normal text-small text-secondary '>Available: {avilabelValue} </p>
            <p className='font-pop font-normal text-small text-secondary '>Sold: {soldValue} </p>
          </Flex>
          <div className='w-16 xl:w-80 h-2 bg-gray rounded-full'>
            <div className='w-32 xl:w-40 h-2 bg-red-500 rounded-full mt-2'></div>
          </div>
        </div>

    </div>
  )
}

export default Flashsale