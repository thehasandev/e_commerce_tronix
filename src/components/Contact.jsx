import React from 'react'
import Flex from './Flex'


function Contact({text,icon}) {
  return (
    <Flex className="md:gap-x-4 items-center">
        <div className='text-primary mr-4 xl:mr-0'> 
           {icon}
        </div>
        <div>
           <p className='font-pop font-normal text-small text-secondary'>{text}</p>
        </div>
    </Flex>
  )
}

export default Contact