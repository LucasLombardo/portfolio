import React, { Component } from 'react'
import { Link } from 'gatsby'
import { ScNav } from '../styles'

export default class nav extends Component {
  state = {
    fixed: false,
    isOpen: false,
  }

  componentDidMount() {
    if (this.props.isHome) {
      window.addEventListener('scroll', this.handleScroll)
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    if (
      document.querySelector(this.props.fixedBelowId).offsetTop <
      window.pageYOffset + 60
    ) {
      this.setState({ fixed: true })
    } else {
      this.setState({ fixed: false })
    }
  }

  toggleNav = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }
  render() {
    const { isHome } = this.props
    const { fixed } = this.state
    const navClasses = isHome ? (fixed ? 'home fixed' : 'home') : ''
    return (
      <ScNav className={navClasses}>
        <Link to="/">Lucas Lombardo</Link>
        <Link to="/#About">About</Link>
        <Link to="/#Work">Work</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/#Contact">Contact</Link>
      </ScNav>
    )
  }
}
