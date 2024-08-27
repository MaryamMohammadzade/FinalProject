import React from 'react'
import { Outlet } from 'react-router-dom'
import Hero from '../components/slider/Hero'
import Banner from '../components/banner/Banner'

const Home = () => {
  var url = require('../assets/img/banner.jpg');
  return (
      <div className=' gap-3'>
        <Banner bannerUrl={url} />
        <Hero />
        <br/>
        <Outlet />
      </div>
 
  )
}

export default Home