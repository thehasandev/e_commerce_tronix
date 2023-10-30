import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import Section from '../components/Section'
import Container from '../components/Container'
import Flex from '../components/Flex'
import List from "../components/List"
import SubHeading from "../components/SubHeading"

function ProductPage() {
    let data = useSelector((state)=>state.brade.previousPage)
  return (
    <>
      <Section>
        <Container>
            <Flex className="items-center">
                <p className='capitalize font-pop font-normal text-small text-gray mr-2'>{data}</p>
                <AiOutlineRight className='text-gray'/>
                <p className='capitalize font-pop font-normal text-small text-primary ml-2'>{(window.location.pathname.replace("/",""))}</p>
            </Flex>
        </Container>
      </Section>

      <Section className="mt-124">
        <Container>
          <h2 className='font-dm font-bold text-text49 text-primary'>Product</h2>
            
            <Section>
              <Container>
                  <Flex className="mt-14">
                    <div className='w-2/12'>
                    <h3 className='font-mon font-bold text-xl text-secondary mt-14'>Shop by Category</h3>
                     
                        <ul>
                          <List text="Category 1" side className="mt-10"/>
                          <List text="Category 2" side/>
                          <List text="Category 3" side/>
                          <List text="Category 4" side/>
                          <List text="Category 5" side/>
                        </ul>
                        
                        <h3 className='font-mon font-bold text-xl text-secondary mt-14'>Shop by Color</h3>
                       
                          <div className='flex items-center gap-x-3 mt-10 mb-5'>
                            <div className='h-2 w-2 bg-red-500 rounded-full'></div>
                            <p className='font-dm font-bold text-sm text-gray '>Color 1</p>
                          </div>

                          <div className='flex items-center gap-x-3 mb-5'>
                            <div className='h-2 w-2 bg-green-500 rounded-full'></div>
                            <p className='font-dm font-bold text-sm text-gray '>Color 2</p>
                          </div>

                          <div className='flex items-center gap-x-3 mb-5'>
                            <div className='h-2 w-2 bg-blue-500 rounded-full'></div>
                            <p className='font-dm font-bold text-sm text-gray '>Color 3</p>
                          </div>

                          <div className='flex items-center gap-x-3 mb-5'>
                            <div className='h-2 w-2 bg-teal-500 rounded-full'></div>
                            <p className='font-dm font-bold text-sm text-gray '>Color 4</p>
                          </div>

                          <div className='flex items-center gap-x-3 mb-5'>
                            <div className='h-2 w-2 bg-orange-500 rounded-full'></div>
                            <p className='font-dm font-bold text-sm text-gray '>Color 5</p>
                          </div>

                      
                      <h3 className='font-mon font-bold text-xl text-secondary mt-14'>Shop by Brand</h3>
                        <ul>
                          <List text="Brand 1" side className="mt-10"/>
                          <List text="Brand 2" side/>
                          <List text="Brand 3" side/>
                          <List text="Brand 4" side/>
                          <List text="Brand 5" side/>
                        </ul>

                        <h3 className='font-mon font-bold text-xl text-secondary mt-14'>Shop by Price</h3>
                        <ul>
                          <List text="$0.00 - $9.99" side className="mt-10"/>
                          <List text="$0.00 - $9.99" side/>
                          <List text="$0.00 - $9.99" side/>
                          <List text="$0.00 - $9.99" side/>
                          <List text="$0.00 - $9.99" side/>
                        </ul>
                    </div>

                  <div className='w-10/12'>
                    
                  </div>
                </Flex>
            </Container>
          </Section>

        </Container>
     </Section>
      
    </>
  )
}

export default ProductPage