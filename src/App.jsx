import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { HeroParallaxDemo } from './components/HeroParallaxDemo'
import { AnimatedTestimonialsDemo } from './components/AnimatedTestimonialsDemo'
import { ExpandableCardDemo } from './components/ExpandableCardDemo'
import { Footer } from './components/Footer'
import AboutUs from './components/AboutUs'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        hi there
      </div>
      <Navbar />
      <HeroParallaxDemo />
      <ExpandableCardDemo />
      <AnimatedTestimonialsDemo />
      <AboutUs />

      <Footer />
    
    </>
  )
}

export default App
