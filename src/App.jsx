import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import IronSoftSection from './components/IronSoftSection'
import CaseStudiesSection from './components/CaseStudiesSection'
import ServicesAndBlogSection from './components/ServicesAndBlogSection'

const App = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <IronSoftSection/> 
      <CaseStudiesSection/> 
      <ServicesAndBlogSection/> 
    </div>
  )
}

export default App