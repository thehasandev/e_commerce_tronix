import React from 'react'
import Image from './Image'

import Flex from './Flex'
import { useDispatch } from 'react-redux'
import { addtocart } from '../slices/cartSlice'

function Feature({src,alt,name,price,badge,subdiscount,percent}) {
    let dispatch =useDispatch()
    let handleSubmit =()=>{
      dispatch(addtocart(
        {
          url : src,
          name: name,
          alt : alt,
          price:price,
          quantity:1
        }

      ))
    
    }
  return (
    <div className='w-w376 border border-gray rounded-[8px] relative'>
        <Image src={src} alt={alt}/>
        <div className='w-16 bg-[#2D9CDB] text-center py-2 uppercase rounded-[8px] absolute top-8 right-8'>
            <p className='font-pop font-medium text-small  text-white'>{badge}</p>
        </div>
        <div className='w-16 bg-[#BB6BD9] text-center py-2 uppercase rounded-[8px] absolute top-24 right-8'>
            <p className='font-pop font-medium text-small  text-white'>- {percent}% off</p>
        </div>
        <div>
          <h3 className='font-pop font-normal mt-8 mb-2  text-2xl text-secondary text-center'>{name}</h3>
          <p className='font-pop font-normal text-2xl mb-6 text-primary text-center '> <span className='text-secondary line-through'>${subdiscount}</span> - ${price}</p>
          <Flex className="justify-center mb-10">
            <button onClick={handleSubmit} className='bg-primary hover:bg-secondary hover:text-white hover:boder-secondary duration-300 font-pop font-nomal text-small px-7 py-2 text-white rounded-[8px] '>Add to cart</button>
          </Flex>

        </div>
    </div>
  )
}

export default Feature