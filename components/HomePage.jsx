import React from 'react'
import Category from '../components/Category' 
import Banner from './Banner'
import FeaturedBrands from './FeaturedBrands'
const HomePage = () => {
  return (
    <div className='overflow-hidden'>
      <Category/>
      <Banner/>
      <FeaturedBrands/>
    </div>
  )
}

export default HomePage