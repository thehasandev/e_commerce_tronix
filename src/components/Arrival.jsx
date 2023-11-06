import React from 'react'
import Flex from './Flex'
import Image from './Image'
import { AiFillStar } from 'react-icons/ai'

function Arrival({src,alt,badge,name,price}) {
  return (
    <Flex className={`md:w-w512 border border-gray rounded-xl`}>
      <div className='w-1/2 relative'>
        <div className='bg-black/30 w-full h-full absolute top-0 left-0 rounded-l-xl'></div>
         <Image src={src} alt={alt} className="rounded-s-lg w-full h-full rounded-l-xl border-r border-black/20" />
         
            <Flex className='mt-6  ml-6 h-[45px] w-[45px] md:h-16 md:w-16 bg-[#2D9CDB] rounded-full absolute top-0 left-0 justify-center items-center'>
                <p className='font-pop font-normal first-letter:uppercase md:uppercase text-white'>{badge}</p>
            </Flex>
      </div>

      <Flex className='md:w-1/2  px-2 flex-col items-center justify-center'>
        <h3 className='font-pop font-normal text-2xl text-center text-secondary '>{name}</h3>
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