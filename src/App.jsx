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
import Test from "./assets/arrival.png"

function App() {
  return (
    <div className='m-10'>
      <Container>
       
          <Flex className="gap-x-10 flex-wrap">
            <Arrival src={Test} alt="Test" badge="New" name="Smartphone 5G" price="$299.00"/>
          </Flex>
     
      </Container>
    </div>
  )
}

export default App