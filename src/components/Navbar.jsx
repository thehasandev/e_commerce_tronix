import React from 'react'
import Section from './Section'
import Flex from './Flex'
import {BsInstagram,BsFillTelephoneFill} from "react-icons/bs"
import {BiSolidCart} from "react-icons/bi"
import {MdEmail} from "react-icons/md"
import {AiFillLinkedin,AiOutlineTwitter,AiFillFacebook,AiOutlineUser,AiOutlineSearch} from "react-icons/ai"
import Contact from './Contact'
import Image from './Image'
import Logo from "../assets/logo.png"
import List from './List'
import Container from './Container'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { move } from '../slices/bradcumb'


function Navbar() {
  let dispatch = useDispatch()

  let handleSubmit =(data)=>{
    dispatch(move(data))
  }
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

                  <Flex className='w-1/12 gap-x-8  justify-end'>
                        <BiSolidCart size={25} className='text-secondary'/>
                        <MdEmail size={25} className='text-secondary'/>
                  </Flex>
              </nav>
            
          </Container>
        
        </Section>
    </>
  )
}

export default Navbar