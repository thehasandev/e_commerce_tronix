import React, { useEffect, useState } from 'react'
import Section from '../components/Section'
import Container from '../components/Container'
import {AiOutlineRight} from "react-icons/ai"
import Flex from '../components/Flex'
import SubHeading from "../components/SubHeading"
import { useDispatch, useSelector } from 'react-redux'
import Input  from '../components/Input'
import { Link } from 'react-router-dom'
import { move } from '../slices/bradcumb'
function Checkout() {
    let data =useSelector((state)=>state.cart.cartItem)
    let datas = useSelector((state)=>state.brade.currentPage)
    let dispatch =useDispatch()
    let hadnedleSubmit =(data)=>{
       dispatch(move(data))
    }
let [tottal,setTottal] =useState(0)
    useEffect(()=>{
      let total = 0
      data.map((item)=>{
         total += item.price*item.quantity
      },[data])
      setTottal(total);
    })
  return (
    <>
    <Section className="mb-8 pt-32 xl:pt-44">
    <Container>
        <Flex className="items-center">
            <p className='capitalize font-pop font-normal text-small text-gray mr-2 px-4 xl:px-0'>{datas}</p>
            <AiOutlineRight className='text-gray'/>
            <p className='capitalize font-pop font-normal text-small text-primary ml-2'>{(window.location.pathname.replace("/",""))}</p>
        </Flex>

        <div className='hidden xl:block'>
            <SubHeading text="My Cart" className="text-center"/>
            <Flex className="justify-center gap-x-96 mb-12 mt-8">
                    <Flex className="gap-x-4 relative after:absolute after:h-1 after:w-[280px] after:top-1/2 after:-translate-y-1/2 after:right-[-340px] after:rounded-lg after:bg-secondary">
                        <p className='w-8 h-8 border border-solid border-primary rounded-full text-small font-pop font-normal text-primary flex items-center justify-center'>
                            1
                        </p>
                        <p className='font-pop font-normal text-small text-primary '>My Cart</p>
                    </Flex>

                    <Flex className="gap-x-4">
                        <p className='w-8 h-8 border border-solid border-primary rounded-full text-small font-pop font-normal text-primary flex items-center justify-center'>
                            1
                        </p>
                        <p className='font-pop font-normal text-small text-primary '>Checkout</p>
                    </Flex>

            </Flex>

        </div>
    </Container>
    </Section>
    
    <Section className="px-2 xl:px-0">
      <Container>
        <Flex className="justify-center gap-y-10 md:justify-between flex-wrap">
            <div className='md:w-7/12'>
             <h3 className='font-pop font-medium text-small text-secondary border-b border-secondary border-solid pb-5'>Buyer Info</h3>
              <Flex className="justify-between mt-8">
                <div className='w-49'>
                  <Input name="First Name" text="text"/>
                </div>
                <div className='w-49'>
                  <Input name="Last Name " text="text"/>
                </div>
              </Flex>
              
              <Flex className="justify-between mt-8">
                <div className='w-49'>
                  <Input name="Address" text="text"/>
                </div>
                <div className='w-49'>
                  <Input name="Contact " text="text"/>
                </div>
              </Flex>
              
              <Flex className="justify-between mt-8">
                <div className='w-49'>
                  <Input name="Country" text="text"/>
                </div>
                <div className='w-49'>
                  <Input name="City " text="text"/>
                </div>
              </Flex>

              <Flex className="justify-between mt-8">
                <div className='w-49'>
                  <Input name="State" text="text"/>
                </div>
                <div className='w-49'>
                  <Input name="Zip Code " text="text"/>
                </div>
              </Flex>

              <p className='font-pop mt-8 font-normal text-small text-secondary mb-4'>Note</p>
              <textarea className='w-full  border border-solid border-[#A7A7A7] px-5 py-4 rounded-lg' ></textarea>
            </div>

            <div className='md:w-4/12'>
                     <div className='border border-solid border-secondary rounded-lg p-8'>
                        <h3 className='font-pop font-semibold text-center mb-8  text-2xl text-secondary'>Your Order Summary</h3>
                         <div className='border-b border-gray pb-5 mb-5'>
                          {
                            data.map((item,index)=>{
                          return<ul key={index} className='flex  justify-between  mb-5 '>
                                  <li className='font-pop font-medium w-2 mr-4 xl:mr-0  text-xl text-secondary'>1x</li>
                                  <li className='font-pop font-medium w-[280px]  text-xl text-left text-secondary '>{item.name}</li>
                                  <li className='font-pop font-medium w-4 md:text-xl text-secondary pr-12'>{`$${item.price*item.quantity}`}</li>
                                </ul> 

                            })
                          }
                        
                        
                         </div>
                         <ul className='flex justify-between mb-6  border-gray '>
                            <li className='font-pop font-medium  text-xl text-secondary'>Subtotal</li>
                            <li className='font-pop font-medium  text-xl text-secondary'>{`$${tottal} :00`}</li>
                        </ul> 
                         <ul className='flex justify-between mb-6   '>
                            <li className='font-pop font-medium  text-xl text-secondary'>Shipping</li>
                            <li className='font-pop font-medium  text-xl text-secondary'>$15:00</li>
                        </ul> 
                         <ul className='flex justify-between mb-6   border-b border-gray pb-5'>
                            <li className='font-pop font-medium  text-xl text-secondary'>Tax</li>
                            <li className='font-pop font-medium  text-xl text-secondary'>$10:00</li>
                        </ul> 
                         <ul className='flex justify-between mb-6   border-b border-gray pb-5'>
                            <li className='font-pop font-medium  text-xl text-secondary'>Tottal</li>
                            <li className='font-pop font-medium  text-xl text-secondary'>{`$${tottal+10+15}`}</li>
                        </ul> 
                        <h3 className='font-pop font-semibold text-center mb-8  text-2xl text-secondary'>Payment</h3>
                        <Flex className="justify-center gap-x-4">
                          <button className='font-pop font-normal text-samall text-white bg-secondary px-4 py-2 rounded-lg border border-solid border-secondary hover:bg-transparent hover:text-secondary duration-300'>Credit Card</button>
                          <button className='font-pop font-normal text-samall text-white bg-secondary px-4 py-2 rounded-lg border border-solid border-secondary hover:bg-transparent hover:text-secondary duration-300'>Bank Transfer</button>
                          <button className='font-pop font-normal text-samall text-white bg-secondary px-4 py-2 rounded-lg border border-solid border-secondary hover:bg-transparent hover:text-secondary duration-300'>Paypal</button>
                        </Flex>
                        <button className='font-pop font-normal text-samall text-white bg-primary px-4 py-4 rounded-lg border border-solid border-primary hover:bg-transparent hover:text-secondary duration-300 w-full mt-8'>Checkout</button>
                          <Link to="/cart" onClick={()=>{hadnedleSubmit("Checkout")}}>
                             <p className='font-pop font-normal text-samall text-secondary text-center mt-5'>Back to Cart</p> 
                          </Link>
                     </div>
            </div>
           
        </Flex>
      </Container>
    </Section>


    </>
  )
}

export default Checkout