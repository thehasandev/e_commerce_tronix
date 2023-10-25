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
import Test from "./assets/flash.png"
import Flashsale from './components/Flashsale'

function App() {
  return (
    <div className='m-10'>
      <Container>
      

          <Flex className="gap-x-5 flex-wrap">
            <Flashsale src={Test} name="Wireless Headphone" price="$29.99" avilabelVale={10} soldValue={15} badge={50}/>
            <Flashsale src={Test} name="Wireless Headphone" price="$29.99" avilabelVale={10} soldValue={15} badge={30}/>
            <Flashsale src={Test} name="Wireless Headphone" price="$29.99" avilabelVale={10} soldValue={15} badge={0}/>
          </Flex>


     
      </Container>
    </div>
  )
}

export default App