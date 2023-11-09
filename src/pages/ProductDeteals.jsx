import React, { useEffect } from 'react'
import Section from '../components/Section'
import Container from '../components/Container'
import Flex from "../components/Flex"
import Image from "../components/Image"
import {AiFillStar,AiFillHeart} from "react-icons/ai"
import Delivary from "../assets/delivery.png"
import Voucher from "../assets/voucher.png"
import Stock from "../assets/Package.png"
import Review from '../components/Review'
import ReviewImg from "../assets/review.png"
import Gift from "../assets/gift.jpg"
import { useState } from 'react'
import Input from '../components/Input'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addtocart } from '../slices/cartSlice'
import Slider from 'react-slick'
import NextArrow from '../components/NextArrow'
import PreviousArrow from '../components/PreviousArrow'
import {AiOutlineRight} from "react-icons/ai"
function ProductDeteals() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);
  let location  = useLocation()
  let {url,name,price,discount} = location.state
  let cartData =useSelector((state)=>state.cart.cartItem)
  let dispatch = useDispatch()

   let pageData =useSelector((state)=>state.brade.currentPage)
  let [review,setReview] = useState(true)
  let [discription,setDiscriptin] = useState(false)
  let [dissicun,setDissicun] = useState(false)
  let [gift,setGift] = useState(false)
  

     let handleReviews =()=>{
       setReview(true)
       setDissicun(false)
       setDiscriptin(false)
       setGift(false)
     }
     let handleDisciption =()=>{
        setDiscriptin(true)
        setReview(false)
        setDissicun(false)
        setGift(false)
     }
     let handleDissicun=()=>{
        setDissicun(true)
        setReview(false)
        setDiscriptin(false)
        setGift(false)
     }
     let handleGift =()=>{
      setGift(true)
      setDissicun(false)
      setDiscriptin(false)
      setReview(false)
     }
     let handleSubmit = ()=>{
      dispatch(addtocart(
        {
          name : name,
          url :url,
          price:price,
          quantity:1
         }
      ))
       
     }

     const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <NextArrow class="absolute top-1/2 -translate-y-1/2 -right-4"/>,
      prevArrow: <PreviousArrow class="absolute top-1/2 -translate-y-1/2 -left-4 z-10 "/>
    }; 

  return (
    <>
      <Section className="pt-44 px-2 xl:px-0">
        <Container>
            <Flex className="justify-between flex-wrap">
               <div className='md:w-5/12 '>
                  <Image  className="w-96 mx-auto" src={url}/> 
               
                  <div className='w-[230px] mx-auto mt-8'>
                    <Slider {...settings}>
                        <Image src={url} className="w-16"/>
                        <Image src={url} className="w-16"/>
                        <Image src={url} className="w-16"/>
                        <Image src={url} className="w-16"/>
                      
            
                    </Slider>

                  </div>
                  
               
               </div>

               <div className='md:w-6/12'>
                  <Section className="mb-5">
                    <Container>
                        <Flex className="items-center mt-5 md:mt-0">
                            <p className='capitalize font-pop font-normal text-small text-gray mr-2'>{pageData}</p>
                            <AiOutlineRight className='text-gray'/>
                            <p className='capitalize font-pop font-normal text-small text-primary ml-2'>{name}</p>
                        </Flex>
                    </Container>
                  </Section>


                   <Flex className="flex-wrap">
                     <Flex className='md:w-8/12 w-full items-center gap-x-2 md:gap-x-4'>
                      <p className='font-pop font-normal text-secondary text-small'>5.5</p>
                      <Flex className="text-[#FFD687] gap-x-1 items-center">
                        <AiFillStar size={25}/>
                        <AiFillStar size={25}/>
                        <AiFillStar size={25}/>
                        <AiFillStar size={25}/>
                        <AiFillStar size={25}/>
                      </Flex>
                      <p className='font-pop font-normal text-gray text-sm md:text-small'>Review (12)   |   Sold 99</p>
                     </Flex>

                     <Flex className='md:w-4/12 w-full items-center gap-x-4'>
                       <AiFillHeart size={30} className='text-primary hidden md:block'/>
                       <p className='font-pop font-normal text-secondary text-small hidden md:block'>Add to Wishlist</p>
                     </Flex>
                   </Flex>

                   <h3 className='font-pop font-normal text-secondary text-xl md:text-4xl mt-5 md:mt-2 mb-4'>{`${name}`}</h3>
                   
                   <Flex className="items-center gap-x-4 md:gap-x-8">
                    <h3 className='font-pop font-bold text-secondary text-base md:text-4xl'>{`${price}$`}</h3>
                    <p className='font-pop font-normal text-gray text-small line-through'>{`${discount}$`}</p>
                    <button className='font-pop font-normal hover:bg-primary hover:text-white duration-300 text-primary border border-solid border-primary px-4 py-2 rounded-lg'>Save 50%</button>
                   </Flex>
                   
                   <div className='hidden xl:block'>
                      <Flex className="mt-12 flex-wrap mb-8 gap-x-8 border-gray border-b pb-10">
                          <Flex className="gap-x-4 items-center ">
                            <Image src={Delivary}/>
                            <p className='font-pop font-normal text-secondary text-small'>Free Delivery</p>
                          </Flex>
                          <Flex className="gap-x-4 items-center ">
                            <Image src={Voucher}/>
                            <p className='font-pop font-normal text-secondary text-small'>Available Voucher</p>
                          </Flex>
                          <Flex className="gap-x-4 items-center ">
                            <Image src={Stock}/>
                            <p className='font-pop font-normal text-secondary text-small'>In Stock</p>
                          </Flex>
                      </Flex>
                   </div>

                  <h5 className='font-pop font-normal text-small text-secondary mt-8 mb-4 hidden md:block'>Description</h5> 
                  <p className='font-pop font-normal text-small text-gray md:w-[680px] hidden md:block'>Wireless Microphone with the new style, shockproof, clear voice reception that suitable for recording, online meeting, vlogging, and calling. Free casing with high-quality zipper.</p> 
                 
                  <Flex className="gap-x-16 mt-8 md:mt-20">
                 
                        {/* <Flex className="gap-x-8 items-center ">
                         <p className='font-pop font-medium text-small text-gray'>Quantity</p>
                          <button  className='px-7 py-4 rounded-lg bg-gray text-secondary text-3xl font-semibold hover:bg-primary hover:text-white duration-200'>-</button>
                            <p>1</p>
                          <button  className='px-7 py-4 rounded-lg bg-gray text-secondary text-3xl font-semibold hover:bg-primary hover:text-white duration-300'>+</button>
     
                        </Flex> */}
                    

                    
                      <div>
                        <Link to="/cart">
                          <button className='md:px-8 px-4 py-2 md:py-5 mr-5 rounded-lg bg-primary text-white text-small font-semibold hover:bg-transparent border-solid border-primary  border hover:text-primary duration-300'>Chat</button>
                        </Link>
                       <button onClick={()=>{handleSubmit()}} className='md:px-8 px-4 py-2 md:py-5 mr-5 rounded-lg bg-primary text-white text-small font-semibold hover:bg-transparent border-solid border-primary  border hover:text-primary duration-300'>Add to Cart</button>
                      </div>
                  </Flex>
               </div>
            </Flex>
        </Container>
      </Section>

      <Section className="mt-8 px-2 xl:px-0">
        <Container>
           <Flex className="justify-between gap-y-10 flex-wrap">
             <div className='md:w-6/12'>
              <ul className='mb-20 mt-10 flex justify-between md:gap-x-8'>
                <li onClick={handleReviews} className='font-pop inline font-medium text-sm md:text-2xl text-secondary hover:text-primary relative after:absolute after:-bottom-2 after:rounded-lg after:left-0 after:w-full after:h-0 after:hover:h-1 after:duration-200 duration-200 cursor-pointer after:bg-primary after:contents-[""]'>Reviews (200)</li>
                <li onClick={handleDisciption} className='font-pop inline font-medium text-sm md:text-2xl text-secondary hover:text-primary relative after:absolute after:-bottom-2 after:rounded-lg after:left-0 after:w-full after:h-0 after:hover:h-1 after:duration-200 duration-200 cursor-pointer after:bg-primary after:contents-[""]'>Description</li>
                <li onClick={handleDissicun} className='font-pop inline font-medium text-sm md:text-2xl text-secondary hover:text-primary relative after:absolute after:-bottom-2 after:rounded-lg after:left-0 after:w-full after:h-0 after:hover:h-1 after:duration-200 duration-200 cursor-pointer after:bg-primary after:contents-[""]'>Discussion</li>
                <li onClick={handleGift} className='font-pop inline font-medium text-sm md:text-2xl text-secondary hover:text-primary relative after:absolute after:-bottom-2 after:rounded-lg after:left-0 after:w-full after:h-0 after:hover:h-1 after:duration-200 duration-200 cursor-pointer after:bg-primary after:contents-[""]'>Gift Cards</li>
              </ul>
            
            {
              review &&
              <div>
               <Review url={ReviewImg} name="Vanille" time="1 Month Ago"/>
               <Review url={ReviewImg} name="Samantha" time="2 Month Ago"/>
               <Review url={ReviewImg} name="Maduin" time="3 Month Ago"/>
               <Review url={ReviewImg} name="Samantha" time="2 Month Ago"/>
              </div>
            }

            {
              discription &&
              <div>
                <p className='font-pop mt-6 font-normal text-small text-secondary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, illum, impedit deleniti ullam asperiores nostrum aliquam distinctio soluta sequi adipisci alias magni maiores vero natus? Modi dolores ipsa tenetur et! Accusamus cum ipsum odit molestias natus atque! Necessitatibus excepturi in, repudiandae, libero quaerat eius non molestias ipsum delectus cum laborum? </p>
                <p className='font-pop mt-6 font-normal text-small text-secondary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, illum, impedit deleniti ullam asperiores nostrum aliquam distinctio soluta sequi adipisci alias magni maiores vero natus? Modi dolores ipsa tenetur et! Accusamus cum ipsum odit molestias natus atque! Necessitatibus excepturi in, repudiandae, libero quaerat eius non molestias ipsum delectus cum laborum? </p>
                <p className='font-pop mt-6 font-normal text-small text-secondary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, illum, impedit deleniti ullam asperiores nostrum aliquam distinctio soluta sequi adipisci alias magni maiores vero natus? Modi dolores ipsa tenetur et! Accusamus cum ipsum odit molestias natus atque! Necessitatibus excepturi in, repudiandae, libero quaerat eius non molestias ipsum delectus cum laborum? </p>
              </div>
            }
            {
              dissicun &&
              <div>
                <p className='font-pop mt-6 font-normal text-small text-secondary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, illum, impedit deleniti ullam asperiores nostrum aliquam distinctio soluta sequi adipisci alias magni maiores vero natus? Modi dolores ipsa tenetur et! Accusamus cum ipsum odit molestias natus atque! Necessitatibus excepturi in, repudiandae, libero quaerat eius non molestias ipsum delectus cum laborum? </p>
                <p className='font-pop mt-6 font-normal text-small text-secondary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, illum, impedit deleniti ullam asperiores nostrum aliquam distinctio soluta sequi adipisci alias magni maiores vero natus? Modi dolores ipsa tenetur et! Accusamus cum ipsum odit molestias natus atque! Necessitatibus excepturi in, repudiandae, libero quaerat eius non molestias ipsum delectus cum laborum? </p>
                <p className='font-pop mt-6 font-normal text-small text-secondary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, illum, impedit deleniti ullam asperiores nostrum aliquam distinctio soluta sequi adipisci alias magni maiores vero natus? Modi dolores ipsa tenetur et! Accusamus cum ipsum odit molestias natus atque! Necessitatibus excepturi in, repudiandae, libero quaerat eius non molestias ipsum delectus cum laborum? </p>
                <p className='font-pop mt-6 font-normal text-small text-secondary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, illum, impedit deleniti ullam asperiores nostrum aliquam distinctio soluta sequi adipisci alias magni maiores vero natus? Modi dolores ipsa tenetur et! Accusamus cum ipsum odit molestias natus atque! Necessitatibus excepturi in, repudiandae, libero quaerat eius non molestias ipsum delectus cum laborum? </p>
              </div>
            }
            {
              gift &&
              <div>
                <div className='w-96 mx-auto'>
                  <Image src={Gift}/>

                </div>
                <p className='font-pop mt-6 font-normal text-small text-secondary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, illum, impedit deleniti ullam asperiores nostrum aliquam distinctio soluta sequi adipisci alias magni maiores vero natus? Modi dolores ipsa tenetur et! Accusamus cum ipsum odit molestias natus atque! Necessitatibus excepturi in, repudiandae, libero quaerat eius non molestias ipsum delectus cum laborum? </p>
              </div>
            }
              

             </div>
             <div className='md:w-5/12'>
              <h3 className='font-pop font-bold text-lg text-secondary '>Add Your Review</h3>
              <p  className='font-pop font-normal text-small text-gray md:w-[480px] mt-4 mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.  </p>
               <Input name="Name *" text="text"/>
               <Input name="Eamil *" text="text" className="my-8"/>
              
               <p className='font-pop font-normal text-small text-secondary mb-4'>Review</p>
               <textarea className='w-full border border-solid border-[#A7A7A7] px-5 py-4 rounded-lg'></textarea>
               
               <Flex className="items-center mt-10 mb-16 gap-x-2">
                <div>
                  <h3 className='font-pop font-semibold text-lg text-secondary mr-8'>Rating</h3>
                </div>
                  <AiFillStar size={25} className='text-[#FFD687]'/>
                  <AiFillStar size={25} className='text-[#FFD687]'/>
                  <AiFillStar size={25} className='text-[#FFD687]'/>
                  <AiFillStar size={25} className='text-[#FFD687]'/>
                  <AiFillStar size={25} className='text-[#FFD687]'/>
               </Flex>
               <button className='font-pop font-medium bg-primary  duration-300 text-white hover:text-secondary border border-solid border-primary px-12 py-4 text-lg rounded-lg hover:bg-transparent'>Submit </button>
             </div>
           </Flex>
        </Container>
      </Section>
       
    </>
  )
}

export default ProductDeteals