import React from 'react'
import Image from './Image'
import {AiFillStar,AiFillHeart} from "react-icons/ai"
import Flex from './Flex'
import { useDispatch } from 'react-redux'
import { addtocart } from '../slices/cartSlice'

function Product({src,alt,name,price,sold,btn}) {
  let dispatch = useDispatch()


   let handleClick =()=>{
      dispatch(addtocart({
        url : src,
        alt :alt,
        name :name,
        price : price,
        sold : sold,
        quantity:1
      }))
   }
  return (
    <div className='w-w376 border border-gray p-8 rounded-xl'>
         <Image src={src} alt={alt}/>
        <Flex className=' flex-col items-center justify-center'>
                <h3 className='font-pop font-normal text-2xl text-secondary mt-8 mb-2'>{name}</h3>
                <h4 className='font-pop font-bold text-2xl text-primary '>${price}.00</h4>
                <Flex className="gap-x-6 my-6">

                  <div className='flex items-center gap-x-2 relative after:absolute after:h-5 after:w-[1px] after:bg-gray after:top-0 after:-right-4 '>
                    <AiFillStar className='text-[#FFD687]'/>
                    <p className='font-pop font-normal text-small text-gray'>5.0</p>
                  </div>

                  <div>
                    <p className='font-pop font-normal text-small text-gray'>Sold {sold}</p>
                  </div>

            </Flex>
            <Flex className="items-center gap-x-4">
              <button onClick={handleClick} className='bg-primary hover:bg-secondary hover:text-white hover:boder-secondary duration-300 font-pop font-nomal text-small px-7 py-2 text-white rounded-[8px] '>{btn}</button>
              <AiFillHeart size={20} className='text-gray'/>
            </Flex>
        </Flex>
    </div>
  )
}

export default Product