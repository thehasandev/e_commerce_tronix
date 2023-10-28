import React from 'react'

import Section from '../components/Section'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import BannerSlide from "../assets/bannerSlide.png"
import BannerOne from "../assets/bannerOne.png"
import BannerTwo from "../assets/bannerTwo.png"

function Home() {
  return (
    <>
       <Section>
        <Container>
            <Flex className="justify-between">
              <div className='w-2/3'>
                <Image src={BannerSlide}/>
              </div>
              <div className='1/3'>
                <Image src={BannerOne} className="mb-8"/>
                <Image src={BannerTwo}/>
              </div>
            </Flex>
        </Container>
       </Section>


    </>
  )
}

export default Home