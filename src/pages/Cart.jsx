import React, { useEffect, useState } from 'react'
import Section from '../components/Section'
import Container from '../components/Container'
import {AiOutlineClose,AiOutlineRight} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,removeCart } from '../slices/cartSlice'
import Flex from '../components/Flex'
import Image from "../components/Image"
import Voucer from "../assets/voucer.png"

function Cart() {
    let datas = useSelector((state)=>state.brade.previousPage)
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
       <Section className="mb-8">
            <Container>
                <Flex className="items-center">
                    <p className='capitalize font-pop font-normal text-small text-gray mr-2'>{datas}</p>
                    <AiOutlineRight className='text-gray'/>
                    <p className='capitalize font-pop font-normal text-small text-primary ml-2'>{(window.location.pathname.replace("/",""))}</p>
                </Flex>
            </Container>
        </Section>

     <Section>
        <Container>
          
            <Flex className="mb-20 justify-between">
                      
                         <div className='w-7/12'>
                            {
                                data.map((item,index)=>(
                                    <div className='w-full mb-8'>
                                            <Flex className='w-full gap-x-14 border-b border-solid border-primary pb-8 items-center'>  
                                             
                                            <div className='w-96'>
                                                <Image src={item.url}/>
                                            </div>
                                                
                                            <div className='w-full'>
                                                <h3 className='font-dm font-bold text-2xl text-secondary'>USB Speaker Portable</h3>
                                                <Flex className="flex justify-between items-center mb-4 mt-12">
                                                <p className='font-dm font-bold text-2xl text-primary  '>{`$ ${item.price*item.quantity} : 00`} </p>
                                                <AiOutlineClose onClick={()=>{handleRemove(item)}}  className='cursor-pointer' size={25}/>
                                                </Flex>
                                            
                                            <Flex className="gap-x-8 items-center">
                                                    <button onClick={()=>{handleDecrement(item)}} className='px-5 py-3 rounded-lg bg-gray text-secondary text-3xl font-semibold hover:bg-primary hover:text-white duration-200'>-</button>

                                                    <p className='font-dm font-bold text-2xl text-primary'>{item.quantity}</p>
                                                    <button onClick={()=>{handleIncrement(item)}}  className='px-5 py-3 rounded-lg bg-gray text-secondary text-3xl font-semibold hover:bg-primary hover:text-white duration-200'>+</button>
                                            </Flex>
                                            </div>

                                            </Flex>

                                    </div>

                                ))
                            }                 
                         </div>

            
                   
                <div className='w-4/12'>
                    <div className='border border-primary rounded-lg border-solid px-16 py-8 flex items-center justify-between'>
                        <Image src={Voucer}/>
                        <p className='font-pop font-medium text-2xl text-secondary'>Have a coupon code?</p>
                        <AiOutlineRight/>
                    </div>
                    <div className='border rounded-lg border-primary border-solid px-16 py-8 mt-8 '>
                        <p className='font-pop font-medium text-2xl text-secondary'>Summary</p>
                            <Flex className="justify-between mb-12 mt-8">
                                <p className='font-pop font-medium text-small text-gray'>Total</p>
                                <p className='font-pop font-medium text-small text-primary'>${total}.00</p>
                            </Flex>
                        <button className='w-full block rounded-lg  py-4 bg-primary font-pop text-lg text-white font-medium'>Checkout</button>
                        <p className='font-pop font-medium text-small text-primary mt-8 text-center'>Continue Shopping</p>
                    </div>
                </div>

            </Flex>  
        </Container>
     </Section>

    </>
  )
}

export default Cart