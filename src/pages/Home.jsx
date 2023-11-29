import React, { useState } from 'react'
import cetagorData from "../Data/categori"
import arrivalData from "../Data/arrival"
import flashData from "../Data/flash"
import featureData from "../Data/feature"
import productData from "../Data/Product"

import {AiFillStar,AiFillHeart} from "react-icons/ai"

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


import BannerSlide from "../assets/bannerSlide.png"
import Banner2 from "../assets/banner2.png"
import Banner3 from "../assets/banner3.png"
import Banner4 from "../assets/banner4.png"
import Banner5 from "../assets/banner5.png"
import BannerOne from "../assets/bannerSIde1.png"
import BannerTwo from "../assets/bannerSide2.png"
import S1 from "../assets/s1.png"
import S2 from "../assets/s2.png"
import S3 from "../assets/s3.png"
import S4 from "../assets/s4.png"
import S5 from "../assets/s5.png"
import S6 from "../assets/s6.png"
import Add from "../assets/year.png"
import PreviousArrow from "../components/PreviousArrow"
import NextArrow from '../components/NextArrow'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { move } from '../slices/bradcumb'
import { addtocart } from '../slices/cartSlice'

function Home() {
    let [arrivalView,setArrivalView] = useState(false)
    let [flashView,setFlashView] = useState(false)
    let [featureView,setFeatureView] = useState(false)
    let [productView,setProductView] = useState(false)
    let dispatch =useDispatch()

    const bannerSlide = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1500,
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
        autoplay: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow class="absolute top-1/2 -translate-y-1/2 right-0"/>,
        prevArrow: <PreviousArrow class="absolute top-1/2 -translate-y-1/2 left-0 z-10 hidden"/>,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      }; 

      const handleSubmit =(data)=>{
        dispatch(move(data))
      }

      const handleClick =(id)=>{
        productData.map((item,index)=>{
           if(index==id){
            dispatch(addtocart(
              {
                url : item.url,
                name :item.name,
                price : item.price,
                sold : item.sold,
                quantity:1
              }
            ))
           }
        })
      }

    let   handleFeatureClick  =(id)=>{
      featureData.map((item,index)=>{
        if(index==id){
         dispatch(addtocart(
           {
             url : item.url,
             name :item.name,
             price : item.price,
             sold : item.sold,
             quantity:1
           }
         ))
        }
     })
    }
      
  return (
    <>
    <Section className="md:pt-44 pt-32">
        <Container>
            <Flex className="lg:justify-between justify-center gap-x-2 2xl:gap-x-0">
                <div className='md:w-2/3 w-full'>
                 <Slider {...bannerSlide}>
                    <Image src={Banner3}/>
                    <Image src={Banner2}/>
                    <Image src={Banner4}/>
                    <Image src={Banner5}/>
                    <Image src={BannerSlide}/>
                    <Image src={BannerSlide}/>
                 </Slider>
                </div>

                <div className='md:1/3 hidden lg:block'>
                    <Image src={BannerOne} className="mb-8"/>
                    <Image src={BannerTwo}/>
                </div>
            </Flex>
        </Container>
    </Section>

    <Section className="my-16 xl:my-40 px-2 xl:px-0">
        <Container>
            <SubHeading text="Category" className="mb-12"/>
            <Flex className="justify-between flex-wrap gap-y-5">
            {
                cetagorData.map((item,index)=>(
                 <>
                    <div className='hidden md:block'>
                        <Categori key={index} src={item.url} text={item.name}/>
                    </div>
                   {
                    index < 4 &&
                    <div className='block md:hidden'>
                     
                        <Categori key={index} src={item.url} text={item.name}/>
                    </div>
                   }
                 </>
                ))
            }
            </Flex>
            
        </Container>
    </Section>
    
    <Section className="px-2 xl:px-0">
        <Container>
        <Flex className="justify-between items-center mb-12">
            <SubHeading text="New Arrival" />
            <p className='font-pop font-normal text-primary lg:text-2xl cursor-pointer' onClick={()=>{setArrivalView(!arrivalView)}}>View All</p>
        </Flex>

        <Flex className="justify-between flex-wrap gap-y-8">
            {
            arrivalView ? 
                arrivalData.map((item,index)=>{
                    let {url,name,price,discount,badge} = item
                    return<Link key={index} onClick={()=>{handleSubmit("New Arrival")}} to={name} state={{url,name,price,discount}}>
                             <Arrival  src={url} name={name} price={price} badge={badge}/>
                           </Link>
                }
                )
                :
                arrivalData.map((item,index)=>{
                    let {url,name,price,discount,badge} = item
                    if(index<3){    
                        return<Link key={index} onClick={()=>{handleSubmit("New Arrival")}} to={name} state={{url,name,price,discount}}>
                          <Arrival  src={url} name={name} price={price} badge={badge}/>
                        </Link>
                    }

                }
                )
            }  
        </Flex>
        </Container>
    </Section>

    <Section className="my-16 xl:my-40">
        <Container>
        <Flex className="justify-between items-center mb-12 px-2 xl:px-0">
                <SubHeading text="Flash Sale" />
                <p className='font-pop font-normal text-primary lg:text-2xl cursor-pointer' onClick={()=>{setFlashView(!flashView)}}>View All</p>
        </Flex>
        
        <Slider {...flashSlide}>
            {
                flashData.map((item,index)=>{
            let {url,name,price,discount,avilabelVale,soldValue,badge} = item
             return<Link onClick={()=>{handleSubmit("Flash Sale")}} key={index} to={name} state={{url,name,price,discount}} >
                <div key={index}>
                    <div className='sm:mr-4'>
                      <Flashsale key={index} src={url} name={name} price={price} badge={badge} discount={discount} avilabelValue={avilabelVale} soldValue={soldValue}/>

                    </div>
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
            <Flex className="lg:justify-between gap-5 lg:gap-0 justify-center flex-wrap">
                <div className='w-32 lg:w-2/12'>
                  <Image src={S1}/>
                </div>
                <div className='w-32 lg:w-2/12'>
                  <Image src={S2}/>
                </div>
                <div className='w-32 lg:w-2/12'>
                  <Image src={S3}/>
                </div>
                <div className='w-32 lg:w-2/12'>
                  <Image src={S4}/>
                </div>
                <div className='w-32 lg:w-2/12'>
                  <Image src={S5}/>
                </div>
                <div className='w-32 lg:w-2/12'>
                  <Image src={S6}/>
                </div>
            </Flex>
            <Image src={Add} className="mt-16 xl:mt-40"/>
        </Container>
    </Section>   

   <Section className="my-16 xl:my-40">
     <Container>
            
         <Flex className="flex-col xl xl:flex-row">
            <div className='w-w376 hidden 2xl:block'>
                <div className='w-full bg-primary text-white pt-12 h-full px-12 rounded-lg'>
                    <h3 className='font-mon font-bold text-4xl'>Best Collection</h3>
                    <p className='font-pop font-nomal text-small mt-6 mb-12'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum velit commodi sunt debitis porro nulla voluptas doloribus ducimus qui nesciunt, illum consequatur. Repudiandae quam maiores dicta nisi sint est obcaecati vel deserunt consectetur ratione officiis, magni dolor eveniet libero ducimus? </p>
                    <button className='font-pop font-nomal text-small hover:bg-secondary hover:text-white duration-500 hover:border-secondary px-4 py-2 rounded-lg border border-solid border-white'>Shop Now</button>
                </div>
            </div>
            
           <div className='w-full'>
                <Flex className="justify-between  items-center mt-8 xl:mt-0 mb-8 px-4 xl:px-0">
                    <SubHeading text="Featured Products" className=" xl:px-10"/>
                    <p className='font-pop font-normal text-primary xl:text-2xl cursor-pointer' onClick={()=>{setFeatureView(!featureView)}}>View All</p>
                </Flex>
            <div className='w-full flex flex-wrap gap-10 justify-center'>
                {
                featureView ? 
                featureData.map((item,index)=>{
                    let {url,name,price,discount,subdiscount,percent,badge} = item

                
     return <div className='w-w376  border border-gray rounded-[8px] relative'>
                   <Link onClick={()=>{handleSubmit("Featured")}} key={index} to={name} state={{url,name,price,discount}} >
                      <Image src={url}  className="w-full p-8 h-[400px] "/>
                    <div className='h-[400px] w-full bg-black/20 absolute top-0 left-0 rounded-t-[5px]'></div>
                   </Link>
            
                    <div className='w-16 bg-[#2D9CDB] text-center py-2 uppercase rounded-[8px] absolute top-8 right-8'>
                        <p className='font-pop font-medium text-small  text-white'>{badge}</p>
                    </div>

                    <div className='w-16 bg-[#BB6BD9] text-center py-2 uppercase rounded-[8px] absolute top-24 right-8'>
                        <p className='font-pop font-medium text-small  text-white'>- {percent}% off</p>
                    </div>

                    <div>
                    <Link onClick={()=>{handleSubmit("Featured")}} key={index} to={name} state={{url,name,price,discount}} >
                      <h3 className='font-pop font-normal mt-8 mb-2  text-2xl text-secondary text-center'>{name}</h3>
                    </Link>
                      <p className='font-pop font-normal text-2xl mb-6 text-primary text-center '> <span className='text-secondary line-through'>${subdiscount}</span> - ${price}</p>
                     
                      <Flex className="justify-center mb-10">
                        <button onClick={()=>{handleFeatureClick(index)}}  className='bg-primary hover:bg-secondary hover:text-white hover:boder-secondary duration-300 font-pop font-nomal text-small px-7 py-2 text-white rounded-[8px] '>Add to cart</button>
                      </Flex>
                    </div>

                </div>

                }
                
                )
                :
                featureData.map((item,index)=>{
                 let {url,name,price,discount,subdiscount,percent,badge} = item
                   if(index < 3 ){

                    return <div className='w-w376 border border-gray rounded-[8px] relative'>
                   <Link onClick={()=>{handleSubmit("Featured")}} key={index} to={name} state={{url,name,price,discount}} >
                    <Image src={url}  className="w-full p-8 h-[400px]"/>
                    <div className='h-[400px] w-full bg-black/20 absolute top-0 left-0 rounded-t-[5px]'></div>
                   </Link>
            
                    <div className='w-16 bg-[#2D9CDB] text-center py-2 uppercase rounded-[8px] absolute top-8 right-8'>
                        <p className='font-pop font-medium text-small  text-white'>{badge}</p>
                    </div>

                    <div className='w-16 bg-[#BB6BD9] text-center py-2 uppercase rounded-[8px] absolute top-24 right-8'>
                        <p className='font-pop font-medium text-small  text-white'>- {percent}% off</p>
                    </div>

                    <div>
                    <Link onClick={()=>{handleSubmit("Featured")}} key={index} to={name} state={{url,name,price,discount}} >
                      <h3 className='font-pop font-normal mt-8 mb-2  text-2xl text-secondary text-center'>{name}</h3>
                    </Link>
                      <p className='font-pop font-normal text-2xl mb-6 text-primary text-center '> <span className='text-secondary line-through'>${subdiscount}</span> - ${price}</p>
                     
                      <Flex className="justify-center mb-10">
                        <button  onClick={()=>{handleFeatureClick(index)}}   className='bg-primary hover:bg-secondary hover:text-white hover:boder-secondary duration-300 font-pop font-nomal text-small px-7 py-2 text-white rounded-[8px] '>Add to cart</button>
                      </Flex>
                    </div>

                </div>

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
        <Flex className="justify-between  items-center mb-12 px-4 xl:px-0">
            <SubHeading text="Top Rated Product"/>
            <p className='font-pop font-normal text-primary xl:text-2xl cursor-pointer' onClick={()=>{setProductView(!productView)}}>View All</p>
        </Flex>
        <Flex className="flex-wrap xl:justify-between justify-center gap-6">
            {
                productView ? 

                    productData.map((item,index)=>{
                        let {url,name,price,sold,discount} = item
            
            return <div className='w-w376 border border-gray p-8 rounded-xl'>
                      <Link onClick={()=>{handleSubmit("Top Product")}} key={index} to={name} state={{url,name,price,sold,discount}} >
                            <Image src={url} />
                      </Link>
                      <Flex className=' flex-col items-center justify-center'>
                        <Link onClick={()=>{handleSubmit("Top Product")}} key={index} to={name} state={{url,name,price,sold,discount}} >
                          <h3 className='font-pop font-normal text-2xl text-secondary mt-8 mb-2'>{name}</h3>
                        </Link>
                                <h4 className='font-pop font-bold text-2xl text-primary '>${price}.00</h4>
                                <Flex className="gap-x-6 my-6">

                                  <div className='flex items-center gap-x-2 relative after:absolute after:h-5 after:w-[1px] after:bg-gray after:top-0 after:-right-4 '>
                                    <AiFillStar className='text-[#FFD687]'/>
                                    <p className='font-pop font-normal text-small text-gray'>5.0</p>
                                  </div>

                                  <div>
                                    <p className='font-pop font-normal text-small text-gray'>Sold {sold}</p>
                                  </div>

                            </Flex>
                            <Flex className="items-center gap-x-4">
                              <button onClick={()=>{handleClick(index)}}  className='bg-primary hover:bg-secondary hover:text-white hover:boder-secondary duration-300 font-pop font-nomal text-small px-7 py-2 text-white rounded-[8px] '>Add to cart</button>
                              <AiFillHeart size={20} className='text-gray'/>
                            </Flex>
                      </Flex>
                   </div> 
                    }

                    )
                :

             
                productData.map((item,index)=>{
                    let {url,name,price,sold,discount} = item
                     if(index < 4 ){    

                      return <div className='w-w376 border border-gray p-8 rounded-xl'>
                            <Link onClick={()=>{handleSubmit("Top Product")}} key={index} to={name} state={{url,name,price,sold,discount}} >
                                <Image src={url} />
                            </Link>
                            <Flex className=' flex-col items-center justify-center'>
                             <Link onClick={()=>{handleSubmit("Top Product")}} key={index} to={name} state={{url,name,price,sold,discount}} >
                               <h3 className='font-pop font-normal text-2xl text-secondary mt-8 mb-2'>{name}</h3>
                             </Link>
                                     <h4 className='font-pop font-bold text-2xl text-primary '>${price}.00</h4>
                                     <Flex className="gap-x-6 my-6">
     
                                       <div className='flex items-center gap-x-2 relative after:absolute after:h-5 after:w-[1px] after:bg-gray after:top-0 after:-right-4 '>
                                         <AiFillStar className='text-[#FFD687]'/>
                                         <p className='font-pop font-normal text-small text-gray'>5.0</p>
                                       </div>
     
                                       <div>
                                         <p className='font-pop font-normal text-small text-gray'>Sold {sold}</p>
                                       </div>
     
                                 </Flex>
                                 <Flex className="items-center gap-x-4">
                                   <button onClick={()=>{handleClick(index)}}  className='bg-primary hover:bg-secondary hover:text-white hover:boder-secondary duration-300 font-pop font-nomal text-small px-7 py-2 text-white rounded-[8px] '>Add to cart</button>
                                   <AiFillHeart size={20} className='text-gray'/>
                                 </Flex>
                           </Flex>
                        </div> 
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