import React from 'react'
import BackgroundEffects from './Background/BackgroundEffects'
import Header from './Header/Header'
import Hero from './Hero/Hero'
import Experience from './Experience/Experience'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

export default function Portfolio() {
  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      <BackgroundEffects />
      
      <div className="relative z-10">
        <Header />
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}