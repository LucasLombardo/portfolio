import React from 'react'
import Nav from './nav'
import '../main.css'

const Layout = ({ children }) => (
  <>
    <Nav />
    {children}
  </>
)

export default Layout
