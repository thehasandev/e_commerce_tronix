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
import Test from "./assets/choosing1.png"
import Choosing from './components/Choosing'
function App() {
  return (
    <div className=''>
      <Container>
      

          <Flex className="flex-wrap gap-x-2">
           <Choosing src={Test} name="This is One" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. "/>
           <Choosing src={Test} name="This is One" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. "/>
           <Choosing src={Test} name="This is One" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. "/>
           <Choosing src={Test} name="This is One" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. "/>
        
       
          </Flex>


     
      </Container>
    </div>
  )
}

export default App