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
import WhyUs from './components/WhyUs'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'



function App() {
  

    useEffect(() => {
    AOS.init({ duration: 1000 }) // animation duration in ms
  }, [])

  return (
    <>
  
      <Navbar />
      <HeroParallaxDemo />

      <div data-aos="fade-up"><ExpandableCardDemo /></div>
      <div data-aos="fade-right"><AnimatedTestimonialsDemo /></div>
      <div data-aos="fade-up"><WhyUs /></div>
      <div data-aos="fade-right"><AboutUs /></div>

      <Footer />
    
    </>
  )
}

export default App
