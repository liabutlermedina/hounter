import React, { useState } from 'react'
import Header from './houter/components/Header'
import HeaderSm from './houter/components/HeaderSm'
import Hero from './houter/components/Hero'
import Recommendations from './houter/components/Recommendations'
import RecommendationsSm from './houter/components/RecommendationsSm'
import Tour from './houter/components/Tour'
import TourSm from './houter/components/TourSm'
import Blog from './houter/components/Blog'
import BlogSm from './houter/components/BlogSm'
import Sub from './houter/components/Sub'
import Footer from './houter/components/Footer'
import FooterSm from './houter/components/FooterSm'
import Search from './houter/components/Search'
import Menu from './houter/components/Menu'

export default () => {
  const [isOpen, setisOpen] = useState(false)
  const handleClick = () => setisOpen(!isOpen)
  return (
    <div className='lg:max-w-7xl lg:px-28 mx-auto lg:py-8 relative sm:max-w-sm'>
      <Menu isOpen={isOpen} setisOpen={setisOpen} handleClick={handleClick} />
      <Header />
      {!isOpen && (
        <HeaderSm
          isOpen={isOpen}
          setisOpen={setisOpen}
          handleClick={handleClick}
        />
      )}
      {!isOpen && <Search />}
      <Hero />
      {!isOpen && <RecommendationsSm />}
      <Recommendations />
      {!isOpen && <TourSm />}
      <Tour />
      {!isOpen && <BlogSm />}
      <Blog />
      <Sub />
      {!isOpen && <FooterSm />}
      <Footer />
    </div>
  )
}
