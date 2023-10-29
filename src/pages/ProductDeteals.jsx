import React from 'react'
import Section from '../components/Section'
import Container from '../components/Container'
import Flex from "../components/Flex"
import Image from "../components/Image"
import ProductDetail from "../assets/product-deteal.png"
import ProductDetails from "../assets/product-deteals.png"
import {AiFillStar} from "react-icons/ai"
function ProductDeteals() {
  return (
    <>
      <Section>
        <Container>
            <Flex className="justify-between">
               <div className='5/12'>
                <Image src={ProductDetail}/> 
                 <Flex className="justify-center gap-x-8 mt-8">
                   <Image src={ProductDetails}/>
                   <Image src={ProductDetails}/>
                   <Image src={ProductDetails}/>
                 </Flex>
               </div>



               <div className='6/12'>
                   <Flex>
                     <div className='w-8/12'>
                      <p>5.5</p>
                       <AiFillStar/>
                     </div>
                     <div className='w-4/12'></div>
                   </Flex>
                  

               </div>
            </Flex>
        </Container>
      </Section>
       
    </>
  )
}

export default ProductDeteals