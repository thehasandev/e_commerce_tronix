import React from 'react'

import Section from '../components/Section'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import BannerSlide from "../assets/bannerSlide.png"
import BannerOne from "../assets/bannerOne.png"
import BannerTwo from "../assets/bannerTwo.png"
import "slick-carousel/slick/slick.css"; 
import Slider from "react-slick";
function Home() {
    const bannerSlide = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        appendDots: dots => (
            <div>
              <ul className='flex gap-x-4 absolute bottom-6 left-1/2 -translate-x-1/2'> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div className='text-[80px] text-white'>
              .
            </div>
          )
      };
  return (
    <>
       <Section>
        <Container>
            <Flex className="justify-between">
              <div className='w-2/3'>
              <Slider {...bannerSlide}>
                <Image src={BannerSlide}/>
                <Image src={BannerSlide}/>
                <Image src={BannerSlide}/>
                <Image src={BannerSlide}/>
                <Image src={BannerSlide}/>
                <Image src={BannerSlide}/>
              </Slider>
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