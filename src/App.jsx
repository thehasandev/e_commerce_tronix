import React from 'react'
import Container from './components/Container'
import Flex from './components/Flex'
import Image from './components/Image'

import Section from './components/Section'
import List from './components/List'
import Contact from './components/Contact'
import {AiFillPhone} from "react-icons/ai"
import SubHeading from './components/SubHeading'
import One from "./assets/cetagori1.png"
import Categori from './components/Categori'
import Arrival from './components/Arrival'

import Flashsale from './components/Flashsale'
import Product from './components/Product'
import Feature from './components/Feature'
import Test from "./assets/feature.png"
function App() {
  return (
    <div className='m-10'>
      <Container>
      

          <Flex className="gap-x-5 flex-wrap">
           <Feature src={Test} name="This is One" badge="NEw" price={250} percent={20} subdiscount={33}/>
        
       
          </Flex>


     
      </Container>
    </div>
  )
}

export default App