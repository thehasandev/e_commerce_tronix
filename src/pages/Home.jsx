import React, { useState } from 'react'
import cetagorData from "../Data/categori"
import arrivalData from "../Data/arrival"
import flashData from "../Data/flash"
import featureData from "../Data/feature"
import productData from "../Data/Product"

import Section from '../components/Section'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import "slick-carousel/slick/slick.css"; 
import Slider from "react-slick";
import SubHeading from "../components/SubHeading"
import Categori from "../components/Categori"
import Arrival from "../components/Arrival"
import Flashsale from "../components/Flashsale"
import Feature from "../components/Feature"
import Product from "../components/Product"

import BannerSlide from "../assets/bannerSlide.png"
import BannerOne from "../assets/bannerOne.png"
import BannerTwo from "../assets/bannerTwo.png"
import S1 from "../assets/s1.png"
import S2 from "../assets/s2.png"
import S3 from "../assets/s3.png"
import S4 from "../assets/s4.png"
import S5 from "../assets/s5.png"
import S6 from "../assets/s6.png"
import Add from "../assets/add.png"
import PreviousArrow from "../components/PreviousArrow"
import NextArrow from '../components/NextArrow'
import { Link } from 'react-router-dom'


function Home() {
    let [arrivalView,setArrivalView] = useState(false)
    let [flashView,setFlashView] = useState(false)
    let [featureView,setFeatureView] = useState(false)
    let [productView,setProductView] = useState(false)
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

      const flashSlide = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow class="absolute top-1/2 -translate-y-1/2 right-0"/>,
        prevArrow: <PreviousArrow class="absolute top-1/2 -translate-y-1/2 left-0 z-10 hidden"/>
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

    <Section className="my-40">
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
                arrivalData.map((item,index)=>{
                    let {url,name,price,discount,badge} = item
                    return<Link to={name} state={{url,name,price,discount}}>
                             <Arrival key={index} src={url} name={name} price={price} badge={badge}/>
                           </Link>
                }
                )
                :
                arrivalData.map((item,index)=>{
                    let {url,name,price,discount,badge} = item
                    if(index<3){    
                        return<Link to={name} state={{url,name,price,discount}}>
                          <Arrival key={index} src={url} name={name} price={price} badge={badge}/>
                        </Link>
                    }

                }
                )
            }  
        </Flex>
        </Container>
    </Section>

    <Section className="my-40">
        <Container>
        <Flex className="justify-between items-center">
                <SubHeading text="Flash Sale" className="mb-12"/>
                <p className='font-pop font-normal text-primary text-2xl cursor-pointer' onClick={()=>{setFlashView(!flashView)}}>View All</p>
        </Flex>
        
        
        <Slider {...flashSlide}>
            {
                flashData.map((item,index)=>{
            let {url,name,price,discount,avilabelVale,soldValue,badge} = item
             return<Link key={index} to={name} state={{url,name,price,discount}} >
                <div key={index}>
                        <Flashsale key={index} src={url} name={name} price={price} badge={badge} discount={discount} avilabelValue={avilabelVale} soldValue={soldValue}/>
                </div>
             </Link>

                }
                )
            }
        </Slider>
      
        </Container>
    </Section>

    <Section>
        <Container>
            <Flex className="justify-between">
                <Image src={S1}/>
                <Image src={S2}/>
                <Image src={S3}/>
                <Image src={S4}/>
                <Image src={S5}/>
                <Image src={S6}/>
            </Flex>
            <Image src={Add} className="mt-40"/>
        </Container>
    </Section>   

   <Section className="my-40">
     <Container>
            
         <Flex >
            <div className='w-w376'>
                <div className='w-full bg-primary text-white pt-12 pb-[360px] px-12 rounded-lg'>
                    <h3 className='font-mon font-bold text-4xl'>Best Collection</h3>
                    <p className='font-pop font-nomal text-small mt-6 mb-12'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <button className='font-pop font-nomal text-small hover:bg-secondary hover:text-white duration-500 hover:border-secondary px-4 py-2 rounded-lg border border-solid border-white'>Shop Now</button>
                </div>
            </div>
            
           <div className='w-full'>
                <Flex className="justify-between items-center">
                    <SubHeading text="Featured Products" className="mb-8 px-10"/>
                    <p className='font-pop font-normal text-primary text-2xl cursor-pointer' onClick={()=>{setFeatureView(!featureView)}}>View All</p>
                </Flex>
            <div className='w-full flex flex-wrap gap-10 justify-center'>
                {
                featureView ? 
                featureData.map((item,index)=>{
                    let {url,name,price,discount,subdiscount,percent,badge} = item
            return <Link key={index} to={name} state={{url,name,price,discount}} >
                      <Feature key={index} src={url} name={name} price={price} subdiscount={subdiscount} percent={percent} badge={badge}/>
                    </Link>
                }
                
                
                )
                :
                featureData.map((item,index)=>{
                 let {url,name,price,discount,subdiscount,percent,badge} = item
                   if(index < 3 ){
            return  <Link key={index} to={name} state={{url,name,price,discount}} >
                      <Feature key={index} src={url} name={name} price={price} subdiscount={subdiscount} percent={percent} badge={badge}/>
                    </Link>
                   }
                }
                )
                }
                
            </div>
           </div>

            
         </Flex>
     </Container>
   </Section>

   <Section>
    <Container>
        <Flex className="justify-between items-center">
            <SubHeading text="Top Rated Product" className="mb-12"/>
            <p className='font-pop font-normal text-primary text-2xl cursor-pointer' onClick={()=>{setProductView(!productView)}}>View All</p>
        </Flex>
        <Flex className="flex-wrap gap-6">
            {
                productView ? 
                    productData.map((item,index)=>{
                        let {url,name,price,sold,discount} = item
                return<Link key={index} to={name} state={{url,name,price,sold,discount}} >
                        <Product key={index} src={item.url} name={item.name} price={item.price} sold={item.sold}/>  
                      </Link>  

                    }

                    )
                :
             
                productData.map((item,index)=>{
                    let {url,name,price,sold,discount} = item
                     if(index < 4 ){        
            return  <Link key={index} to={name} state={{url,name,price,sold,discount}}>
                      <Product key={index} src={url} name={name} price={price} sold={sold} />  
                    </Link>
                     }

                }
                )


            }
         
        </Flex>
    </Container>
   </Section>

    </>
  )
}

export default Home