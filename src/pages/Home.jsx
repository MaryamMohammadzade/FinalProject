import React from 'react'
import Header from '../components/base/Header'
import { Outlet } from 'react-router-dom'
import HeaderBaner from '../components/base/HeaderBaner'
import Hero from '../components/slider/Hero'
import Banner from '../components/banner/Banner'
import Footer from '../components/base/Footer'


const Home = () => {
  var url = require('../img/banner.jpg');
  return (
    <div>
      <HeaderBaner />
      <div className='mx-28 gap-3'>
        <Header />
        <Banner bannerUrl={url} />
        <Hero />
        <br/>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Home