import React, { Children } from 'react'
import Navbar from './Navbar'

const Layout = () => {
  return (
   <>
   <Navbar />
    {Children}
   <footer />
   </>
  )
}

export default Layout
