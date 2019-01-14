import React from 'react'
import Nav from './nav'
import Footer from './footer'
import '../main.css'

const Layout = ({ children, isHome }) => (
  <>
    <Nav isHome={isHome} fixedBelowId="#About" />
    {children}
    <Footer />
  </>
)

export default Layout
