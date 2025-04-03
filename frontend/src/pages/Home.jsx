import React from 'react'
import Headers from '../components/Header.jsx'
import Navbar from '../components/Navbar.jsx'
import HorizontalScroll from '../components/HorizontalScroll.jsx'
import WhetherApp from '../components/WhetherApp.jsx'
import Blog from '../components/BlogOne.jsx'
import BlogTwo from '../components/BlogTwo.jsx'
import BlogThree from '../components/BlogThree.jsx'
import More from '../components/More.jsx'

function Home() {
  return (
    <div>
      <Headers />
      <Navbar />
      <div className="flex justify-center ">
        <div className="w-[85%] lg:w-[80%]">

          <HorizontalScroll />
          <h1 className="text-4xl ml-20 font-bold mt-6 text-gray-800">Blogs</h1>
          <Blog />
          <BlogTwo />
          <BlogThree />
          <Blog />
          <BlogTwo />
          <BlogThree />
          <More />
        </div>
        <div className="lg:flex justify-center mt-4 h-min 2xl:scale-100 lg:scale-55 xl:scale-70 lg:w-[30%]  hidden">

          <WhetherApp />
        </div>
      </div>
    </div>
  )
}

export default Home
