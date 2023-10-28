import React, { useState } from 'react'
import cetagorData from "../Data/categori"
import arrivalData from "../Data/arrival"
import flashData from "../Data/flash"

import Section from '../components/Section'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import BannerSlide from "../assets/bannerSlide.png"
import BannerOne from "../assets/bannerOne.png"
import BannerTwo from "../assets/bannerTwo.png"
import "slick-carousel/slick/slick.css"; 
import Slider from "react-slick";
import SubHeading from "../components/SubHeading"
import Categori from "../components/Categori"
import Arrival from "../components/Arrival"
import Flashsale from "../components/Flashsale"

function Home() {
    let [arrivalView,setArrivalView] = useState(false)
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

       <Section className="my-20">
          <Container>
             <SubHeading text="Category" className="mb-12"/>
             <Flex className="justify-between">
                {
                    cetagorData.map((item,index)=>(
                        <Categori key={index} src={item.url} text={item.name}/>
                    ))
                }
             </Flex>
              
          </Container>
       </Section>
       
       <Section>
         <Container>
            <Flex className="justify-between items-center">
                <SubHeading text="New Arrival" className="mb-12"/>
                <p className='font-pop font-normal text-primary text-2xl cursor-pointer' onClick={()=>{setArrivalView(!arrivalView)}}>View All</p>
            </Flex>

           <Flex className="justify-between flex-wrap gap-y-8">
              {
                arrivalView ? 
                    arrivalData.map((item,index)=>(
                     <Arrival key={index} src={item.url} name={item.name} price={item.price} badge={item.badge}/>
                    ))
                    :
                    arrivalData.map((item,index)=>(
                    index<3 &&
                        <Arrival key={index} src={item.url} name={item.name} price={item.price} badge={item.badge}/>
                    ))
                
               }  
              
              
           </Flex>
         </Container>
       </Section>

       <Section className="my-20">
         <Container>
            <Flex className="justify-between items-center">
                    <SubHeading text="Flash Sale" className="mb-12"/>
                    <p className='font-pop font-normal text-primary text-2xl cursor-pointer' onClick={()=>{setArrivalView(!arrivalView)}}>View All</p>
                    <Flex>
                        {
                            flashData.map((item,index)=>(
                                console.log(item)
                            ))
                        }
                        <Flashsale/>
                    </Flex>
            </Flex>
         </Container>
       </Section>

    </>
  )
}

export default Home