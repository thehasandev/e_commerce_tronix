import React from 'react'
import Container from './components/Container'
import Flex from './components/Flex'
import Image from './components/Image'

import Section from './components/Section'
import List from './components/List'
import Contact from './components/Contact'
import {AiFillPhone} from "react-icons/ai"

function App() {
  return (
    <div>
      <Container>
        <ul className='flex gap-x-5 items-center'>
          <Contact text="+12 345 6789 0" icon={<AiFillPhone/>}/>
          <Contact text="+12 345 6789 0" icon={<AiFillPhone/>}/>
          <Contact text="+12 345 6789 0" icon={<AiFillPhone/>}/>
        </ul>
      </Container>
    </div>
  )
}

export default App