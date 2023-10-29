import React from 'react'
import Section from '../components/Section'
import Container from '../components/Container'
import Flex from "../components/Flex"
import Image from "../components/Image"
import ProductDetail from "../assets/product-deteal.png"
import ProductDetails from "../assets/product-deteals.png"
import {AiFillStar,AiFillHeart} from "react-icons/ai"
import Delivary from "../assets/delivery.png"
import Voucher from "../assets/voucher.png"
import Stock from "../assets/Package.png"
import Review from '../components/Review'
import ReviewImg from "../assets/review.png"
import Gift from "../assets/gift.jpg"
import { useState } from 'react'
import Input from '../components/Input'
function ProductDeteals() {
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
  return (
    <>
      <Section>
        <Container>
            <Flex className="justify-between">
               <div className='w-5/12'>
                <Image src={ProductDetail}/> 
                 <Flex className="justify-center gap-x-8 mt-8">
                   <Image src={ProductDetails}/>
                   <Image src={ProductDetails}/>
                   <Image src={ProductDetails}/>
                 </Flex>
               </div>

               <div className='w-6/12'>
                   <Flex>
                     <Flex className='w-8/12 items-center gap-x-4'>
                      <p className='font-pop font-normal text-secondary text-small'>5.5</p>
                      <Flex className="text-[#FFD687] gap-x-1 items-center">
                        <AiFillStar size={25}/>
                        <AiFillStar size={25}/>
                        <AiFillStar size={25}/>
                        <AiFillStar size={25}/>
                        <AiFillStar size={25}/>
                      </Flex>
                      <p className='font-pop font-normal text-gray text-small'>Review (12)   |   Sold 99</p>
                     </Flex>

                     <Flex className='w-4/12 items-center gap-x-4'>
                       <AiFillHeart size={30} className='text-primary'/>
                       <p className='font-pop font-normal text-secondary text-small'>Add to Wishlist</p>
                     </Flex>
                   </Flex>

                   <h3 className='font-pop font-normal text-secondary text-4xl mt-2 mb-4'>Wireless Microphone</h3>
                   
                   <Flex className="items-center gap-x-8">
                    <h3 className='font-pop font-bold text-secondary text-4xl'>$29.00</h3>
                    <p className='font-pop font-normal text-gray text-small line-through'>$99.00</p>
                    <button className='font-pop font-normal hover:bg-primary hover:text-white duration-300 text-primary border border-solid border-primary px-4 py-2 rounded-lg'>Save 50%</button>
                   </Flex>

                   <Flex className="mt-12 mb-8 gap-x-8 border-gray border-b pb-10">
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

                  <h5 className='font-pop font-normal text-small text-secondary mt-8 mb-4'>Description</h5> 
                  <p className='font-pop font-normal text-small text-gray w-[680px]'>Wireless Microphone with the new style, shockproof, clear voice reception that suitable for recording, online meeting, vlogging, and calling. Free casing with high-quality zipper.</p> 
                 
                  <Flex className="gap-x-16 mt-20">
                     <Flex className="gap-x-8 items-center ">
                      <p className='font-pop font-medium text-small text-gray'>Quantity</p>
                       <button className='px-7 py-4 rounded-lg bg-gray text-secondary text-3xl font-semibold hover:bg-primary hover:text-white duration-200'>-</button>
                       <p className='font-pop font-bold text-2xl text-primary'>1</p>
                       <button className='px-7 py-4 rounded-lg bg-gray text-secondary text-3xl font-semibold hover:bg-primary hover:text-white duration-300'>+</button>
  
                     </Flex>
                      
                      <div>
                       <button className='px-8 py-5 mr-5 rounded-lg bg-primary text-white text-small font-semibold hover:bg-transparent border-solid border-primary  border hover:text-primary duration-300'>Chat</button>
                       <button className='px-8 py-5 mr-5 rounded-lg bg-primary text-white text-small font-semibold hover:bg-transparent border-solid border-primary  border hover:text-primary duration-300'>Add to Cart</button>
                      </div>
                  </Flex>
               </div>
            </Flex>
        </Container>
      </Section>

      <Section className="mt-8">
        <Container>
           <Flex className="justify-between">
             <div className='w-6/12'>
              <ul className='mb-20 mt-10 flex gap-x-8'>
                <li onClick={handleReviews} className='font-pop inline font-medium text-2xl text-secondary hover:text-primary relative after:absolute after:-bottom-2 after:rounded-lg after:left-0 after:w-full after:h-0 after:hover:h-1 after:duration-200 duration-200 cursor-pointer after:bg-primary after:contents-[""]'>Reviews (200)</li>
                <li onClick={handleDisciption} className='font-pop inline font-medium text-2xl text-secondary hover:text-primary relative after:absolute after:-bottom-2 after:rounded-lg after:left-0 after:w-full after:h-0 after:hover:h-1 after:duration-200 duration-200 cursor-pointer after:bg-primary after:contents-[""]'>Description</li>
                <li onClick={handleDissicun} className='font-pop inline font-medium text-2xl text-secondary hover:text-primary relative after:absolute after:-bottom-2 after:rounded-lg after:left-0 after:w-full after:h-0 after:hover:h-1 after:duration-200 duration-200 cursor-pointer after:bg-primary after:contents-[""]'>Discussion</li>
                <li onClick={handleGift} className='font-pop inline font-medium text-2xl text-secondary hover:text-primary relative after:absolute after:-bottom-2 after:rounded-lg after:left-0 after:w-full after:h-0 after:hover:h-1 after:duration-200 duration-200 cursor-pointer after:bg-primary after:contents-[""]'>Gift Cards</li>
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
             <div className='w-5/12'>
               <Input/>
             </div>
           </Flex>
        </Container>
      </Section>
       
    </>
  )
}

export default ProductDeteals