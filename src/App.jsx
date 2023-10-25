import React from 'react'
import Container from './components/Container'
import Flex from './components/Flex'
import Image from './components/Image'

import Section from './components/Section'
import List from './components/List'

function App() {
  return (
    <div>
      <Container>
        <ul>
          <List text="Home"/>
          <List text="Home"/>
          <List text="About"/>
          <List text="Service"/>
        </ul>
      </Container>
    </div>
  )
}

export default App