import React from 'react'
import Flex from './Flex'
import Image from './Image'
import { AiFillStar } from 'react-icons/ai'

function Arrival({src,alt,badge,name,price}) {
  return (
    <Flex className={`md:w-w512 border border-gray rounded-xl`}>
      <div className='w-1/2 relative'>
        
         <Image src={src} alt={alt} className="rounded-s-lg w-full" />
         <div className='bg-black/30 w-full h-full absolute top-0 left-0'></div>
            <Flex className='mt-6 ml-6 h-16 w-16 bg-[#2D9CDB] rounded-full absolute top-0 left-0 justify-center items-center'>
                <p className='font-pop font-normal uppercase text-white'>{badge}</p>
            </Flex>
      </div>

      <Flex className='w-1/2 flex-col items-center justify-center'>
        <h3 className='font-pop font-normal text-2xl text-secondary '>{name}</h3>
        <h4 className='font-pop font-bold text-2xl text-secondary mt-2 mb-4'>{`$${price}:00`}</h4>
        <Flex className="gap-x-6">

           <div className='flex items-center gap-x-2 relative after:absolute after:h-5 after:w-[1px] after:bg-gray after:top-0 after:-right-4 '>
             <AiFillStar className='text-[#FFD687]'/>
             <p className='font-pop font-normal text-small text-gray'>5.0</p>
           </div>

           <div>
             <p className='font-pop font-normal text-small text-gray'>Sold 99</p>
           </div>

        </Flex>
      </Flex>
    </Flex>
  )
}

export default Arrival