import React from 'react'

import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Services from './components/services'
import Tours from './components/tours'
import Footer from './components/footer'

import { pageLinks, socials } from './data'

const App = () => {
  const nav = {
    pageLinks,
    socials,
  }

  return (
    <>
      <Navbar nav={nav} />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  )
}

export default App
