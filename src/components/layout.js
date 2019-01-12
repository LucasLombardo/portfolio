import React from 'react'
import Nav from './nav'
import Footer from './footer'
import '../main.css'

const Layout = ({ children }) => (
  <>
    <Nav />
    {children}
    <Footer />
  </>
)

export default Layout
