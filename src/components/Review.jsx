import React from 'react'
import Flex from './Flex'
import Image from './Image'

import {AiFillStar} from "react-icons/ai"

function Review({name,url,time}) {
  return (
    <div className='mb-8'>
    <Flex className="gap-x-2">
        <div>
          <Image src={url}/>
        </div>
        <div>
            <h3 className='font-pop font-medium text-base text-secondary'>{name}</h3>
            <Flex className="items-center gap-x-2">
                <p className='font-pop font-medium text-small text-primary'>5.0</p>
                <Flex className="gap-x-1">
                    <AiFillStar size={25} className='text-[#FFD687]'/>
                    <AiFillStar size={25} className='text-[#FFD687]'/>
                    <AiFillStar size={25} className='text-[#FFD687]'/>
                    <AiFillStar size={25} className='text-[#FFD687]'/>
                    <AiFillStar size={25} className='text-[#FFD687]'/>
                </Flex>
                <p className='font-pop font-medium text-base text-gray'>{time}</p>
            </Flex>
        </div>
        
    </Flex>
    <p className='font-pop mt-6 font-normal text-small text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    </div>
  )
}

export default Review