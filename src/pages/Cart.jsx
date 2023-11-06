import React, { useEffect, useState } from 'react'
import Section from '../components/Section'
import Container from '../components/Container'
import {AiOutlineClose,AiOutlineRight} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,removeCart } from '../slices/cartSlice'
import { move } from '../slices/bradcumb'
import Flex from '../components/Flex'
import Image from "../components/Image"
import Voucer from "../assets/voucer.png"
import SubHeading from "../components/SubHeading"
import { Link } from 'react-router-dom'

function Cart() {
    let datas = useSelector((state)=>state.brade.currentPage)
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

let handleSubmit =(data)=>{
  dispatch(move(data))
}

  return (
    <>
       <Section className="mb-8 pt-32 xl:pt-44">
            <Container>
                <Flex className="items-center pb-5 px-2 xl:px-0">
                    <p className='capitalize font-pop font-normal text-small text-gray mr-2'>{datas}</p>
                    <AiOutlineRight className='text-gray'/>
                    <p className='capitalize font-pop font-normal text-small text-primary ml-2'>{(window.location.pathname.replace("/",""))}</p>
                </Flex>
                <div className='hidden md:block'>
                <SubHeading text="My Cart" className="text-center"/>
                    <Flex className="justify-center md:gap-x-96 mb-12 mt-8">
                            <Flex className="gap-x-4 relative after:absolute after:h-1 after:w-[280px] after:top-1/2 after:-translate-y-1/2 after:right-[-340px] after:rounded-lg after:bg-secondary">
                                <p className='w-8 h-8 border border-solid border-primary rounded-full text-small font-pop font-normal text-primary flex items-center justify-center'>
                                    1
                                </p>
                                <p className='font-pop font-normal text-small text-primary '>My Cart</p>
                            </Flex>

                            <Flex className="gap-x-4">
                                <p className='w-8 h-8 border border-solid border-gray rounded-full text-small font-pop font-normal text-gray flex items-center justify-center'>
                                    1
                                </p>
                                <p className='font-pop font-normal text-small text-gray '>Checkout</p>
                            </Flex>

                    </Flex>

                </div>
            </Container>
        </Section>

     <Section className="px-2 xl:px-0">
        <Container>
          
            <Flex className="mb-20 md:justify-between justify-center flex-wrap">
                      
                <div className='md:w-7/12'>
                {
                    data.map((item,index)=>(
                        <div key={index} className='w-full mb-8'>
                                <Flex className='w-full gap-x-14 border-b border-solid border-primary pb-8 items-center'>  
                                    
                                <div className='md:w-96'>
                                    <Image src={item.url}/>
                                </div>
                                    
                                <div className='w-full'>
                                    <h3 className='font-dm font-bold md:text-2xl text-secondary'>USB Speaker Portable</h3>
                                    <Flex className="flex justify-between items-center mb-4 mt-4 md:mt-12">
                                    <p className='font-dm font-bold text-2xl text-primary  '>{`$ ${item.price*item.quantity} : 00`} </p>
                                    <AiOutlineClose onClick={()=>{handleRemove(item)}}  className='cursor-pointer' size={25}/>
                                    </Flex>
                                
                                <Flex className="gap-x-4 md:gap-x-8 items-center">
                                    <div>
                                      <button onClick={()=>{handleDecrement(item)}} className='md:px-5 px-2  md:py-3 md:rounded-lg bg-gray text-secondary text-3xl font-semibold hover:bg-primary hover:text-white duration-200'>-</button>
                                    </div>

                                        <p className='font-dm font-bold text-2xl text-primary'>{item.quantity}</p>
                                        <div>
                                          <button onClick={()=>{handleIncrement(item)}}  className='md:px-5 px-2  md:py-3 md:rounded-lg bg-gray text-secondary text-3xl font-semibold hover:bg-primary hover:text-white duration-200'>+</button>
                                        </div>
                                </Flex>
                                </div>

                                </Flex>

                        </div>

                    ))
                }                 
                </div>
  
                <div className='md:w-4/12'>
                    <div className='border border-primary rounded-lg border-solid px-4 py-2 md:px-16 md:py-8 flex items-center justify-between'>
                        <Image src={Voucer}/>
                        <p className='font-pop font-medium text-xl mx-2 md:text-2xl text-secondary'>Have a coupon code?</p>
                        <AiOutlineRight/>
                    </div>
                    <div className='border rounded-lg border-primary border-solid px-16 py-8 mt-8 '>
                        <p className='font-pop font-medium text-2xl text-secondary'>Summary</p>
                            <Flex className="justify-between mb-12 mt-8">
                                <p className='font-pop font-medium text-small text-gray'>Total</p>
                                <p className='font-pop font-medium text-small text-primary'>${total}.00</p>
                            </Flex>
                      
                            <Link to="/check-out">
                            <button onClick={()=>{handleSubmit("Cart")}} className='w-full block rounded-lg  py-4 bg-primary font-pop text-lg text-white font-medium'>
                                Checkout
                            </button>
                            </Link>
                            <Link onClick={()=>{handleSubmit("Home")}} to="/">
                              <p className='font-pop font-medium text-small text-primary mt-8 text-center'>Continue Shopping</p>
                            </Link>
                    </div>
                </div>

            </Flex>  
        </Container>
     </Section>

    </>
  )
}

export default Cart