import React from 'react'
import Flex from './Flex'


function Contact({text,icon}) {
  return (
    <Flex className="gap-x-4 items-center">
        <div className='text-primary'> 
           {icon}
        </div>
        <div>
           <p className='font-pop font-normal text-small text-secondary'>{text}</p>
        </div>
    </Flex>
  )
}

export default Contact