import React from 'react'
import { Link } from 'gatsby'
import { ScNav } from '../styles'

const Nav = () => (
  <ScNav>
    <Link to="">Lucas Lombardo</Link>
    <a href="#about">About</a>
    <a href="#about">Work</a>
    <Link to="blog">Blog</Link>
    <a href="#about">Contact</a>
  </ScNav>
)

export default Nav
