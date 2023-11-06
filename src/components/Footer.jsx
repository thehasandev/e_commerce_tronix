import React from 'react'
import Section from "./Section"
import Container from './Container'
import Flex from './Flex'
import Image from './Image'
import FooterTop from "../assets/footerTop.png"
import Logo from "../assets/logo.png"
import Contact from './Contact'
import {BsFacebook, BsFillTelephoneFill, BsInstagram, BsTwitter} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
import List from "./List"
import FooterOne from "../assets/f1.png"
import FooterTwo from "../assets/f2.png"
import FooterThree from "../assets/f3.png"

function Footer() {
  return (
    <>
       <Section className="bg-primary py-8 xl:py-[69px] mt-16 xl:mt-40">
           <Container>
              <Flex className="items-center justify-center gap-x-8 flex-wrap">
                 <div className='lg:w-1/12'>
                    <Image src={FooterTop}/>
                 </div>
                 <div className='lg:w-5/12'>
                    <h2 className='font-mon mb-4 font-bold text-white text-2xl xl:text-5xl text-center xl:text-left'>Join our newsletter now!</h2>
                    <p className='font-pop font-normal text-white text-small text-center xl:text-left mb-5'>Register now and get our latest updates and promos.</p>
                 </div>
                 
                 <div className='lg:w-4/12 relative'>
                      <input type="text" className='bg-white w-full px-8 py-4  xl:py-8 rounded-[8px]'/>
                      <button className='px-8 py-2  xl:py-4 bg-secondary  absolute top-1/2 -translate-y-1/2 right-6 rounded-[8px] text-white  '>
                        Join
                      </button>
                  </div>
              </Flex>
           </Container>
       </Section>

       <footer className='px-2 xl:px-0'>
        <Container>
            <Flex className="pt-14 pb-6 justify-between border-b border-gray flex-col md:flex-row">
                <div className='md:w-1/2'>
                    <div className='md:w-1/2'>
                    <Image src={Logo}/> 
                    <p className='font-pop font-normal text-small text-secondary mt-4 mb-8'>Lorem ipsum dolositamet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
                        <Contact icon={<BsFillTelephoneFill size={20} className='mb-4'/>} text="+1234567890"/>
                        <Contact icon={<MdEmail size={25}/>} text="lovia@support.com"/>

                    </div>
                </div>


                <Flex className='md:w-1/2 justify-between mt-5 xl:mt-0'>

                        <div className='md:w-1/3'>
                            <h3 className="font-mon font-bold xl:text-2xl text-secondary mb-8">Company</h3>
                            <ul>
                              <List text="About" className="mb-2  xl:mb-4"/>
                              <List text="Products" className=" mb-2 xl:mb-4"/>
                              <List text="Contact" className=" mb-2 xl:mb-4"/>
                              <List text="Blog" className=" mb-2 xl:mb-4"/>
                              <List text="Careers" className=" mb-2 xl:mb-4"/>
                            </ul>
                        </div>

                         <div className='md:w-1/3'>
                            <h3 className="font-mon font-bold xl:text-2xl text-secondary mb-8">Information</h3>
                            <ul>
                              <List text="Help Center "  className="mb-2  xl:mb-4"/>
                              <List text="Payment Methods" className="mb-2  xl:mb-4"/>
                              <List text="Return & Refund" className=" mb-2 xl:mb-4"/>
                              <List text="Privacy Policy" className=" mb-2 xl:mb-4"/>
                            </ul>
                        </div>

                         <div className='md:w-1/3'>
                            <h3 className="font-mon font-bold xl:text-2xl text-secondary mb-8">Follow Us</h3>
                              <Flex className="md:gap-x-8 flex-col gap-y-2 md:flex-row">
                                  <div className='bg-primary w-14 h-14 text-white relative rounded-[8px]'>
                                    <BsInstagram size={30} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30'/>
                                  </div>
                                  <div className='bg-primary w-14 h-14 text-white relative rounded-[8px]'>
                                    <BsTwitter size={30} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30'/>
                                  </div>
                                  <div className='bg-primary w-14 h-14 text-white relative rounded-[8px]'>
                                    <BsFacebook size={30} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30'/>
                                  </div>
                              </Flex>
                        </div>
              

                </Flex>

            </Flex>

        </Container>
       </footer>

       <div>
         <Container>
          <Flex className="justify-between pt-6 ">
            <div>
              <p className='font-pop font-normal text-small px-2 md:px-0 text-secondary'>Copyright © 2021 Tronix. All Right Reseved</p>
            </div>

            <div className='hidden md:block'>
              <div className='flex  gap-x-4 md:gap-x-8'>
                <Image src={FooterOne}/>
                <Image src={FooterTwo}/>
                <Image src={FooterThree}/>
              </div>

            </div>

          </Flex>
         </Container>
       </div>
    </>
  )
}

export default Footer