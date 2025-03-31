import React from 'react'
import Headers from '../components/Header.jsx'
import Navbar from '../components/Navbar.jsx'
import HorizontalScroll from '../components/HorizontalScroll.jsx'
import WhetherApp from '../components/WhetherApp.jsx'

function Home() {
  return (
    <div>
      <Headers  />
      <Navbar />
      <div className="flex justify-center lg:justify-between">
        <div className="w-full lg:w-[70%]">

      <HorizontalScroll/> 
        </div>
        <div className="lg:flex justify-center mt-4 h-min lg:w-[30%]  hidden">

      <WhetherApp/>
        </div>
      </div>
    </div>
  )
}

export default Home
