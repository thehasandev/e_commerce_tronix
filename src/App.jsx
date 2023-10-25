import React from 'react'
import Container from './components/Container'
import Flex from './components/Flex'

function App() {
  return (
    <div>
      <Container>
        <Flex className="gap-x-10">
          <h1 className='font-pop text-primary '>This is My Tailwind Setup</h1>
          <h1 className='font-mon text-secondary '>This is My Tailwind Setup</h1>
          <h1 className='font-nunito text-primary '>This is My Tailwind Setup</h1>
        </Flex>
      </Container>
    </div>
  )
}

export default App