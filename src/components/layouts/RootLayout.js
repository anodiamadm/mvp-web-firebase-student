import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <div className='root-layout'>
      <Header/>
      <main>
        <Outlet/>
        <Footer/>
      </main>
    </div>
  )
}

export default RootLayout