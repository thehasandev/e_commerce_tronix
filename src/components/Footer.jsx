import React from 'react'
import Section from "./Section"
import Container from './Container'
import Flex from './Flex'
import Image from './Image'
import FooterTop from "../assets/footerTop.png"
import Logo from "../assets/logo.png"
import Contact from './Contact'
import {BsFillTelephoneFill} from "react-icons/bs"
import {MdEmail} from "react-icons/md"

function Footer() {
  return (
    <>
       <Section className="bg-primary py-[69px]">
           <Container>
              <Flex className="items-center gap-x-8">
                 <div className='w-1/12'>
                    <Image src={FooterTop}/>
                 </div>
                 <div className='w-5/12'>
                    <h2 className='font-mon mb-4 font-bold text-white text-5xl'>Join our newsletter now!</h2>
                    <p className='font-pop font-normal text-white text-small'>Register now and get our latest updates and promos.</p>
                 </div>
                 
                 <div className='w-4/12 relative'>
                      <input type="text" className='bg-white w-full px-8 py-8 rounded-[8px]'/>
                      <button className='px-8  py-4 bg-secondary  absolute top-1/2 -translate-y-1/2 right-6 rounded-[8px] text-white  '>
                        Join
                      </button>
                  </div>
              </Flex>
           </Container>
       </Section>

       <footer>
        <Container>
            <Flex>

                <div className='w-1/2'>
                    <div className='w-1/2'>
                    <Image src={Logo}/> 
                    <p className='font-pop font-normal text-small text-secondary mt-4 mb-8'>Lorem ipsum dolositamet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
                        <Contact icon={<BsFillTelephoneFill size={20} className='mb-4'/>} text="+1234567890"/>
                        <Contact icon={<MdEmail size={25}/>} text="lovia@support.com"/>

                    </div>
                </div>

                <div className='w-1/2'>
                    <div className='w-4/12'>
                        
                    </div>
                    <div className='w-4/12'></div>
                    <div></div>
                 </div>
            </Flex>

        </Container>
       </footer>
    </>
  )
}

export default Footer