import React from 'react'
import Navbar from '../../components/navbar/navbar'
import "./home.scss"
import Hero from '../../components/hero/Hero'
import Services from '../services/services'
import About from '../about/about'
import TestimonialsPage from '../../components/testimonials/testimonal'
import Footer from '../../components/footer/footer'
import axios from "axios"
import  {HashLink as Link}from "react-router-hash-link"



const home = () => {

  return (
    <div className='home'>
      <Navbar />
      <Hero />

      <Services />


      <About />
      <TestimonialsPage />
      <Footer />


    </div>
  )
}

export default home