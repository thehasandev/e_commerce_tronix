import React from 'react'
import Container from './components/Container'
import Flex from './components/Flex'
import Image from './components/Image'
import Test from "./assets/test.jpg"

function App() {
  return (
    <div>
      <Container>
        <Flex className="gap-x-10">
          <h1 className='font-pop text-primary '>This is My Tailwind Setup</h1>
          <Image src={Test} alt="Test" className="w-32"/>
        </Flex>
      </Container>
    </div>
  )
}

export default App