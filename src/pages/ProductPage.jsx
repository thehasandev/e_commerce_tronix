import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import Section from '../components/Section'
import Container from '../components/Container'
import Flex from '../components/Flex'

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
      
    </>
  )
}

export default ProductPage