import React, { useEffect, useState } from 'react'
import Section from './Section'
import Flex from './Flex'
import {BsInstagram,BsFillTelephoneFill} from "react-icons/bs"
import {BiSolidCart} from "react-icons/bi"
import {MdEmail} from "react-icons/md"
import {CgMenuRightAlt} from "react-icons/cg"
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
import { useRef } from 'react'

function Navbar() {
  let [drop,setDrop] = useState (false)
  let [tottalPrice,setTottalPrice] =useState(0)
  let dispatch = useDispatch()
  let dropRef =useRef(null)

  let handleSubmit =(data)=>{
    dispatch(move(data))
    setDrop(false)
  }
  useEffect(()=>{
    let handler =(e)=>{
     if(!dropRef.current.contains(e.target)){
       setDrop(false)
     } 
    }
    document.addEventListener("mousedown",handler)
    return ()=>{
      document.removeEventListener("mousedown",handler)
    }
  })

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
        <Section className="mb-8 px-2 xl:x-0 fixed w-full  z-10 bg-white ">
          <Container>
              <Flex className="md:justify-between justify-center gap-4 lg:gap-y-0 flex-wrap py-2 md:py-4">
                  <Flex className='lg:w-2/12 text-gray gap-x-8 '>
                      <BsInstagram size={25}/>
                      <AiFillFacebook size={25}/>
                      <AiOutlineTwitter size={25}/>
                      <AiFillLinkedin size={25}/>
                  </Flex>
                  <div className='hidden sm:block lg:w-6/12'>
                    <Flex className='justify-end gap-x-4 lg:gap-x-8 '>
                        <Contact icon={<BsFillTelephoneFill size={20}/>} text="+12 345 6789 0"/>
                        <Contact icon={<MdEmail size={25}/>} text="support@tronix.com"/>
                        <Contact icon={<AiOutlineUser size={25}/>} text="Account"/>
                      
                    </Flex>

                  </div>
              </Flex>

              <nav ref={dropRef} className='flex items-center justify-between gap-x-4 py-2 xl:py-8'>
                  <div className='md:w-3/12'>
                    <Image src={Logo} alt="Logo"/>
                  </div>

                  <div className='md:w-5/12 md:block hidden'>
                    <ul className='flex gap-x-3 lg:gap-x-12'>

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

                  <div className='md:w-3/12 w-full relative'>
                      <input type="text" className='bg-white border border-primary border-solid  w-full md:px-8 px-2 py-1 xl:py-2 rounded-[5px]'/>
                      <div className='w-10 h-full bg-primary absolute top-0 right-0 rounded-r-[8px] text-white flex items-center justify-center'>
                        <AiOutlineSearch size={25}/>
                      </div>
                  </div>

                  <Flex className='md:w-1/12 gap-x-2 md:gap-x-8  justify-end relative'>
                        <BiSolidCart size={20} className='text-secondary  cursor-pointer' onClick={()=>{setOpen(true)}}/>
                        <MdEmail size={20} className='text-secondary'/>
                        <CgMenuRightAlt onClick={()=>{setDrop(!drop)}} size={20} className='text-secondary md:hidden block cursor-pointer'/>
                  
                  
                  <p className='absolute font-pop md:text-xl font-medium text-[orange] top-[-10px] left-[20px] xl:top-[-16px] xl:left-[56%]'>{cartdata.length}</p>
                  </Flex>
                       {/* Drop Down Menu  */}
                       {
                        drop &&
                        <ul  className='bg-white absolute top-[90px] text-center right-0 block md:hidden w-full'>
                            <Link to="/">
                              <div onClick={()=>{handleSubmit("Home")}}>
                                <List   text="Home" className="pb-2 pt-10 border-b border-solid border-black/20"/>
                              </div>
                            </Link>

                            <Link to="/about">
                              <div onClick={()=>{handleSubmit("About")}}>
                                <List  text="About" className="pb-2 border-b border-solid border-black/20"/>
                              </div>
                            </Link>

                            <Link to="/product">
                              <div onClick={()=>{handleSubmit("Product")}}>
                                <List  text="Product" className="pb-2 border-b border-solid border-black/20"/>
                              </div>
                            </Link>

                            <Link to="/blog">
                              <div onClick={()=>{handleSubmit("Blog")}}>
                                <List  text="Blog" className="pb-2 border-b border-solid border-black/20"/>
                              </div>
                            </Link>

                            <Link to="/contact">
                              <div onClick={()=>{handleSubmit("Contact")}}>
                                <List className="pb-2" text="Contact"/>
                              </div>
                            </Link>
                        </ul>
                       }
                   
                   {/* add to cart sidebar  */}

                   {
                    open &&
                    <div className='md:w-2/6 h-screen  bg-[#e3e3e3] duration-500 absolute top-0 right-0 z-10'>
                      <Flex className="justify-end">
                        <AiOutlineClose size={25} className='text-secondary cursor-pointer m-5' onClick={()=>{setOpen(false)}}/>
                      </Flex>
                       
                      <SubHeading text="SHOPPING CART" className=" border-b border-solid px-2 border-primary pb-5"/>
                        
                        <ul className='flex gap-x-1.5 md:gap-x-0 justify-between mt-5 px-2 '>
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
                          return <ul key={index}  className=' flex justify-between px-1 lg:px-0 lg:gap-x-0 items-center  mt-5 bg-[#454449] py-2'>   
                                    
                                    <li className='lg:w-32 lg:pl-5 cursor-pointer' onClick={()=>{handleRemove(item)}}  >
                                      <AiOutlineCloseSquare onClick={()=>{handleRemove(item)}} size={30} className='text-white '/>
                                    </li>
                                    
                                    <li className='w-8 lg:w-16 lg:mr-1 '>
                                      <img src={item.url} alt="" className='w-full'/>
                                    </li>
      
                                    <li className='lg:w-[180px] lg:px-4  font-dm font-medium text-xs text-center text-white'>
                                    {item.name}
                                    
                                    </li>
      
                                    <li className='lg:w-[100px]  font-dm font-medium text-base  text-white'>
                                      {item.price}
                                    </li>
      
                                    <li className='font-dm  font-bold text-base text-white border border-white flex justify-center gap-x-3 px-1 items-center '>
                                      <button onClick={()=>{handleDecrement(item)}}   className='text-xl text-white'>-</button>
                                        {item.quantity}
                                      <button onClick={()=>{handleIncrement(item)}}  className='text-xl text-white'>+</button>
                                    </li>
      
                                    <li className='lg:w-32  text-right lg:pr-5 font-dm font-medium text-base text-white'>
                                      {item.price*item.quantity}
                                    </li>
                                </ul>
                                
                              })

                            }
                            <div className='mt-8 flex justify-center gap-x-5'>
                              <Link to="/cart">
                                <button onClick={()=>{setOpen(false)}} className='font-pop font-medium text-base bg-secondary border border-solid border-secondary hover:bg-transparent px-4 lg:px-8 py-2 lgpy-4 rounded-[5px] text-white hover:text-secondary duration-200'>Veiw Cart</button>
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