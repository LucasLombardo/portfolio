import React, { PureComponent } from 'react'
import { Link } from 'gatsby'
import { ScNav } from '../styles'
/* eslint-disable */
// anchor links are to positions, no href needed
// TODO - check into screen reader a11y of this

export default class nav extends PureComponent {
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

  scrollToID = id => {
    const currPos = window.pageYOffset
    const top = id ? document.querySelector(id).offsetTop : 0
    // if distance to scroll over 2400px, jump there rather than scrolling
    const behavior = Math.abs(top - currPos) > 2400 ? 'auto' : 'smooth'
    window.scrollTo({ top, behavior })
  }

  render() {
    const { isHome } = this.props
    const { fixed } = this.state
    const navClasses = isHome ? (fixed ? 'home fixed' : 'home') : ''
    return (
      <ScNav className={navClasses}>
        {isHome ? (
          <>
            <a onClick={() => this.scrollToID('')}>Lucas Lombardo</a>
            <a onClick={() => this.scrollToID('#About')}>About</a>
            <a onClick={() => this.scrollToID('#Work')}>Work</a>
            <Link to="/blog">Blog</Link>
            <a onClick={() => this.scrollToID('#Contact')}>Contact</a>
          </>
        ) : (
          <>
            <Link to="/">Lucas Lombardo</Link>
            <Link to="/#About">About</Link>
            <Link to="/#Work">Work</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/#Contact">Contact</Link>
          </>
        )}
      </ScNav>
    )
  }
}
