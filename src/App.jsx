import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import IronSoftSection from './components/IronSoftSection'
import CaseStudiesSection from './components/CaseStudiesSection'
import ServicesAndBlogSection from './components/ServicesAndBlogSection'
import Blog from './components/Blog'
import FAQ from './components/FAQ'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <IronSoftSection/> 
      <CaseStudiesSection/> 
      <ServicesAndBlogSection/> 
      <Blog/> 
      <FAQ/> 
      <ContactForm/> 
      <Footer/> 
    </div>
  )
}

export default App