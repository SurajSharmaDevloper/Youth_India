import React from 'react'
import Navbar from '../components/sections/navbar'
import { Outlet } from 'react-router'
import Footer from '../components/sections/Footer'

const Layout = () => {
  return (
    <main className='relative transition-all' id='top'>
      <Navbar />
      <Outlet />
      <Footer />
      <div className='fixed bottom-4 right-4 z-50'>
        <a
          href="#top"
          className='flex items-center justify-center bg-primary hover:bg-blue-950 p-4 text-xl text-white rounded-xl transition-all'
        >
          <i className="fa-solid fa-arrow-up"></i>
        </a>
      </div>
    </main>
  )
}

export default Layout