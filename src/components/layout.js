import React from 'react'
import Nav from './nav'
import Container from './container'
import '../styles/normalize.css'

const Layout = ({ children }) => (
  <>
    <Nav />
    <Container>{children}</Container>
  </>
)

export default Layout
