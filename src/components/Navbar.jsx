import React from 'react'
import Section from './Section'
import Flex from './Flex'

import {BsInstagram,BsFillTelephoneFill} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
import {AiFillLinkedin,AiOutlineTwitter,AiFillFacebook,AiOutlineUser} from "react-icons/ai"
import Contact from './Contact'

function Navbar() {
  return (
    <>
        <Section>
            <Flex className="justify-between py-4">
                <Flex className='w-2/12 text-gray gap-x-8 '>
                    <BsInstagram/>
                    <AiFillFacebook/>
                    <AiOutlineTwitter/>
                    <AiFillLinkedin/>
                </Flex>

                <Flex className='w-6/12 justify-end gap-x-8'>
                    <Contact icon={<BsFillTelephoneFill/>} text="+12 345 6789 0"/>
                    <Contact icon={<MdEmail/>} text="support@tronix.com"/>
                    <Contact icon={<AiOutlineUser/>} text="Account"/>
                   
                </Flex>
            </Flex>
           
        </Section>
    </>
  )
}

export default Navbar