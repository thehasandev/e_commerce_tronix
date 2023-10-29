import React, { useEffect, useState } from 'react'
import Section from '../components/Section'
import Container from '../components/Container'
import {AiOutlineCloseSquare} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,removeCart } from '../slices/cartSlice'
import Flex from '../components/Flex'

function Cart() {
    let [total,setTotal] =useState(0)
    let data = useSelector((state)=>state.cart.cartItem)
    let dispatch = useDispatch()
    let handleIncrement =(item)=>{
        dispatch(increment(item))
   }
   let handleDecrement =(item)=>{
        dispatch(decrement(item))
   }
   let handleRemove =(item)=>{
     dispatch(removeCart(item))
 
     }
     useEffect(()=>{
        let tottal = 0
        data.map((item)=>{
            tottal += item.price*item.quantity
        })
        setTotal(tottal)
     },[data])
  return (
    <>
     <Section>
        <Container>
            <ul className='bg-ash flex justify-between p-4 relative'>
                <li className='font-dm font-bold text-base text-primary'>Action</li>
                <li className='font-dm font-bold text-base text-primary'>Product</li>
                <li className='font-dm font-bold text-base text-primary'>Name</li>
                <li className='font-dm font-bold text-base pl-10 text-primary'>Price</li>
                <li className='font-dm font-bold text-base text-primary'>Quantity</li>
                <li className='font-dm font-bold  text-base text-primary'>Sub Total</li> 
            </ul>

          {
            data.map((item,index)=>{
        return <ul key={index} className='bg-ash flex items-center  p-4 border-b border-gray'>
                  <li className='w-[280px] font-dm font-bold text-base text-secondary cursor-pointer' onClick={()=>{handleRemove(item)}} >
                  <AiOutlineCloseSquare onClick={()=>{handleRemove(item)}} size={30} className='text-secondary'/>
                  </li>
                  <li className='  font-dm font-bold text-base text-secondary'><img src={item.url} alt="img1" className='w-16'/></li>
                  <li className='w-[550px] text-center  font-dm font-bold text-base text-secondary'>{item.name}</li>
                  <li className='w-[200px] pl-8  font-dm font-bold text-base  text-secondary'>1000</li>
                  <li className=' flex  items-center px-1 justify-center gap-5 font-dm border border-secondary border-solid ml-24 font-bold text-base text-secondary'>
                      <button onClick={()=>{handleDecrement(item)}}  className='text-lg text-secondary'>-</button>
                               {item.quantity}
                      <button  onClick={()=>{handleIncrement(item)}} className='text-lg  text-secondary'>+</button>
                  </li>
                  <li className='w-[300px] text-right   font-dm font-bold  text-base text-secondary'>{item.price*item.quantity}</li> 
               </ul>
                
            })
          }
           
        </Container>
     </Section>

     <section>
        <Container>
            <Flex className="justify-end mt-10">
              <table>
                      <thead>
                          <tr>
                              <th className='border border-gray/50  font-dm font-bold text-base text-primary py-4 px-32'>Subtotal</th>
                              <th className='border border-gray/50 font-dm font-normal text-base text-gray py-4 px-32'>{total}</th>  
                          </tr>
                      </thead>

                      <tbody>
                          <tr>
                              <td className='border border-gray/50 font-dm font-bold text-base text-primary py-4 px-32'>Total</td>
                              <td className='border border-gray/50 font-dm font-bold text-base text-secondary py-4 px-32'>{total}</td>  
                          </tr>
                      </tbody>
                      
              </table>
            </Flex> 

            <Flex className="justify-end mt-5">
                {/* <Link to="/checkout"> */}
                <button className='font-pop font-medium text-lg bg-secondary border border-solid border-secondary hover:bg-transparent px-8 py-3 rounded-[5px] text-white hover:text-secondary duration-200'>Check Out</button>
                {/* </Link> */}
            </Flex>

        </Container>
            {/* <PortionHeading text="Cart totals" className="text-right mt-5"/> */}
          </section> 
    </>
  )
}

export default Cart