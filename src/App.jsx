import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Brands from './components/Brands'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Services from './components/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Hero />
      <Brands />
      <About />
      <Skills />
      <Portfolio />
      <Services />
    </div>
  )
}

export default App
