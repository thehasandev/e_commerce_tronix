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

function App() {
  return (
    <div>
      <Container>
        <Flex className="gap-x-10">
          <Categori src={One} alt="One" text="Computer & Laptop"/>
          <Categori src={One} alt="One" text="Computer & Laptop"/>
          <Categori src={One} alt="One" text="Computer & Laptop"/>
          <Categori src={One} alt="One" text="Computer & Laptop"/>
          <Categori src={One} alt="One" text="Computer & Laptop"/>
          <Categori src={One} alt="One" text="Computer & Laptop"/>

        </Flex>
      </Container>
    </div>
  )
}

export default App