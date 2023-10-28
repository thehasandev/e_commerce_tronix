import React from 'react'
import Section from '../components/Section'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Image from '../components/Image'
import AboutImg from "../assets/about.png"
import Flex from '../components/Flex'
import Choosing from "../components/Choosing"
import ChooseOne from "../assets/choosing1.png"
import ChooseTwo from "../assets/choosing2.png"
import ChooseThree from "../assets/choosing3.png"
import ChooseFour from "../assets/choosing4.png"
import Team from "../components/Team"
import TeamOne from "../assets/team1.png"

function About() {
  return (
    <>
     <Section className=" mt-20">
        <Container>
            <SubHeading text="About Tronix" className="text-center text-5xl mb-8"/>
            <p className='font-pop font-normal text-small  text-secondary w-[1056px] mx-auto mb-40'>We are here to provide a place special for electronic devices. Although we only operated for 2 years but we always provide the best service for customers and all the sellers who use our website. With the hope that it can help improve a better life using various electronic goods with the latest technology, we are all ears to any suggestion from our dear customers</p>
            <Image src={AboutImg}/>
           
        </Container>
     </Section>

     <Section className="mt-40">
        <Container>
            <SubHeading text="Why Choosing Us" className="text-center text-5xl mb-20"/>
            <Flex className="justify-between flex-wrap">
                <Choosing src={ChooseOne} name="54 Brands" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. "/>
                <Choosing src={ChooseTwo} name="Fast Delivery" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. "/>
                <Choosing src={ChooseThree} name="COD Service" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. "/>
                <Choosing src={ChooseFour} name="100% Original Products" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. "/>
            </Flex>
        </Container>
     </Section>

     <Section className="mt-40">
        <Container>
            <SubHeading text="Our Team" className="text-center text-5xl mb-20"/>
            <Flex className="justify-between flex-wrap">
               <Team src={TeamOne} name="Sam Alabama" title="Team Member"/>
               <Team src={TeamOne} name="Ahmad Pucelle" title="Team Member"/>
               <Team src={TeamOne} name="Jack Lentera" title="Team Member"/>
               <Team src={TeamOne} name="Ahmad Pucelle" title="Team Member"/>
            </Flex>
        </Container>
     </Section>

    </>
  )
}

export default About