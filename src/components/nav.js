import React from 'react'
import { Link } from 'gatsby'
import { ScNav } from '../styles'

const Nav = ({ isHome }) => (
  <ScNav className={isHome ? 'home' : ''}>
    <Link to="/">Lucas Lombardo</Link>
    <Link to="/#About">About</Link>
    <Link to="/#Work">Work</Link>
    <Link to="/blog">Blog</Link>
    <Link to="/#Contact">Contact</Link>
  </ScNav>
)

export default Nav
