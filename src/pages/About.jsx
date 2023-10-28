import React from 'react'
import Section from '../components/Section'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Image from '../components/Image'
import AboutImg from "../assets/about.png"

function About() {
  return (
    <>
     <Section className=" mt-20">
        <Container>
            <SubHeading text="About Tronix" className="text-center text-5xl mb-8"/>
            <p className='font-pop font-normal text-small  text-secondary w-[1056px] mx-auto mb-40'>We are here to provide a place special for electronic devices. Although we only operated for 2 years but we always provide the best service for customers and all the sellers who use our website. With the hope that it can help improve a better life using various electronic goods with the latest technology, we are all ears to any suggestion from our dear customers</p>
            <Image src={AboutImg}/>
            <SubHeading text="Why Choosing Us" className="text-center text-5xl mb-8"/>
        </Container>
     </Section>

    </>
  )
}

export default About