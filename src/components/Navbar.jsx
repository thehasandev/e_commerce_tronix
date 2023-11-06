import React, { useEffect, useState } from 'react'
import Section from './Section'
import Flex from './Flex'
import {BsInstagram,BsFillTelephoneFill} from "react-icons/bs"
import {BiSolidCart} from "react-icons/bi"
import {MdEmail} from "react-icons/md"
import {AiFillLinkedin,AiOutlineTwitter,AiFillFacebook,AiOutlineUser,AiOutlineSearch,AiOutlineCloseSquare, AiOutlineClose} from "react-icons/ai"
import Contact from './Contact'
import Image from './Image'
import Logo from "../assets/logo.png"
import List from './List'
import Container from './Container'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { move } from '../slices/bradcumb'
import SubHeading from "../components/SubHeading"
import { increment,decrement,removeCart } from '../slices/cartSlice'

function Navbar() {
  let [tottalPrice,setTottalPrice] =useState(0)
  let dispatch = useDispatch()

  let handleSubmit =(data)=>{
    dispatch(move(data))
  }
  let [open,setOpen] =useState(false)
  let cartdata =useSelector((state)=>state.cart.cartItem)

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
    cartdata.map((item)=>{
      tottal+=item.price*item.quantity
    })
    setTottalPrice(tottal)
  },[cartdata])  
  return (
    <>
        <Section className="mb-8">
          <Container>
              <Flex className="justify-between py-4">
                  <Flex className='w-2/12 text-gray gap-x-8 '>
                      <BsInstagram size={25}/>
                      <AiFillFacebook size={25}/>
                      <AiOutlineTwitter size={25}/>
                      <AiFillLinkedin size={25}/>
                  </Flex>

                  <Flex className='w-6/12 justify-end gap-x-8'>
                      <Contact icon={<BsFillTelephoneFill size={20}/>} text="+12 345 6789 0"/>
                      <Contact icon={<MdEmail size={25}/>} text="support@tronix.com"/>
                      <Contact icon={<AiOutlineUser size={25}/>} text="Account"/>
                    
                  </Flex>
              </Flex>

              <nav className='flex items-center justify-between py-8'>
                  <div className='w-3/12'>
                    <Image src={Logo} alt="Logo"/>
                  </div>

                  <div className='w-5/12'>
                    <ul className='flex gap-x-12'>

                      <Link to="/">
                        <div onClick={()=>{handleSubmit("Home")}}>
                          <List  text="Home"/>
                        </div>
                      </Link>

                      <Link to="/about">
                        <div onClick={()=>{handleSubmit("About")}}>
                          <List text="About"/>
                        </div>
                      </Link>

                      <Link to="/product">
                        <div onClick={()=>{handleSubmit("Product")}}>
                          <List text="Product"/>
                        </div>
                      </Link>

                      <Link to="/blog">
                        <div onClick={()=>{handleSubmit("Blog")}}>
                          <List text="Blog"/>
                        </div>
                      </Link>

                      <Link to="/contact">
                        <div onClick={()=>{handleSubmit("Contact")}}>
                          <List text="Contact"/>
                        </div>
                      </Link>
                       
    
                    </ul>
                  </div>

                  <div className='w-3/12 relative'>
                      <input type="text" className='bg-[#D0D0D2]  w-full px-8 py-2 rounded-[8px]'/>
                      <div className='w-10 h-full bg-primary absolute top-0 right-0 rounded-r-[8px] text-white flex items-center justify-center'>
                        <AiOutlineSearch size={25}/>
                      </div>
                  </div>

                  <Flex className='w-1/12 gap-x-8  justify-end relative'>
                        <BiSolidCart size={25} className='text-secondary  cursor-pointer' onClick={()=>{setOpen(true)}}/>
                        <MdEmail size={25} className='text-secondary'/>
                  <p className='absolute font-pop text-xl font-medium text-[orange]  -top-3 left-1/2 translate-x-1/2'>{cartdata.length}</p>
                  </Flex>
                   
                   {/* add to cart sidebar  */}
                   {
                    open &&
                    <div className='w-2/6 h-screen  bg-[#e3e3e3] duration-500 absolute top-0 right-0 z-10'>
                      <Flex className="justify-end">
                        <AiOutlineClose size={25} className='text-secondary cursor-pointer m-5' onClick={()=>{setOpen(false)}}/>
                      </Flex>
                       
                      <SubHeading text="SHOPPING CART" className=" border-b border-solid px-2 border-primary pb-5"/>
                        
                        <ul className='flex justify-between mt-5 px-2 '>
                           <li className='font-dm font-bold text-base text-secondary'>Action</li>
                           <li className='font-dm font-bold text-base text-secondary'>Product</li>
                           <li className='font-dm font-bold text-base text-secondary'>Name</li>
                           <li className='font-dm font-bold text-base text-secondary'>Price</li>
                           <li className='font-dm font-bold text-base text-secondary'>Quantity</li>
                           <li className='font-dm font-bold text-base text-secondary'>Subtotal</li>
                        </ul>
                       
                       {
                         cartdata.length >0 ?
                        <>{
                              cartdata.map((item,index)=>{
                          return <ul key={index}  className=' flex items-center  mt-5 bg-[#454449] py-2'>   
                                    
                                    <li className='w-32 pl-5 cursor-pointer' onClick={()=>{handleRemove(item)}}  >
                                      <AiOutlineCloseSquare onClick={()=>{handleRemove(item)}} size={30} className='text-white '/>
                                    </li>
                                    
                                    <li className='w-16 mr-1 '>
                                      <img src={item.url} alt="" className='w-full'/>
                                    </li>
      
                                    <li className='w-[180px] px-4  font-dm font-medium text-xs text-center text-white'>
                                    {item.name}
                                    
                                    </li>
      
                                    <li className='w-[100px]  font-dm font-medium text-base  text-white'>
                                      {item.price}
                                    </li>
      
                                    <li className='  font-dm  font-bold text-base text-white border border-white flex justify-center gap-x-3 px-1 items-center '>
                                      <button onClick={()=>{handleDecrement(item)}}   className='text-xl text-white'>-</button>
                                        {item.quantity}
                                      <button onClick={()=>{handleIncrement(item)}}  className='text-xl text-white'>+</button>
                                    </li>
      
                                    <li className='w-32  text-right pr-5 font-dm font-medium text-base text-white'>
                                      {item.price*item.quantity}
                                    </li>
                                </ul>
                                
                              })

                            }
                            <div className='mt-8 flex justify-center gap-x-5'>
                              <Link to="/cart">
                                <button onClick={()=>{setOpen(false)}} className='font-pop font-medium text-base bg-secondary border border-solid border-secondary hover:bg-transparent px-8 py-4 rounded-[5px] text-white hover:text-secondary duration-200'>Veiw Cart</button>
                              </Link>
                              

                            </div>
                              <h3 className='font-pop font-bold text-right text-xl text-secondary mr-16 mt-5 '>Tottal: {tottalPrice}</h3>

        
                         </>
                      
                          
                        
                         :
                          <SubHeading text="Cart is Empty" className=" flex items-center justify-center h-full "/>
                       }












                    </div>
                   }
              </nav>
            
          </Container>
        
        </Section>
    </>
  )
}

export default Navbar