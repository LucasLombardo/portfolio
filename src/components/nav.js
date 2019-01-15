import React, { PureComponent } from 'react'
import { Link } from 'gatsby'
import { ScNav } from '../styles'

export default class Nav extends PureComponent {
  state = {
    absolute: true,
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
    // sets state to absolute if below the About section
    if (document.querySelector('#About').offsetTop < window.pageYOffset + 60) {
      this.setState({ absolute: false })
    } else {
      this.setState({ absolute: true })
    }
  }

  scrollToID = (e, id) => {
    // scrolls to given ID if on homepage
    if (this.props.isHome) {
      e.preventDefault()
      const currPos = window.pageYOffset
      const top = id ? document.querySelector(id).offsetTop : 0
      // if distance to scroll over 2400px, jump there rather than scrolling
      const behavior = Math.abs(top - currPos) > 2400 ? 'auto' : 'smooth'
      window.scrollTo({ top, behavior })
    }
  }

  render() {
    const home = this.props.isHome ? 'home' : ''
    const absolute = this.state.absolute ? 'absolute' : ''
    return (
      <ScNav className={`${home} ${absolute}`}>
        <Link to="/" onClick={e => this.scrollToID(e, '')}>
          Lucas Lombardo
        </Link>
        <Link to="/#About" onClick={e => this.scrollToID(e, '#About')}>
          About
        </Link>
        <Link to="/#Work" onClick={e => this.scrollToID(e, '#Work')}>
          Work
        </Link>
        <Link to="/blog">Blog</Link>
        <Link to="/#Contact" onClick={e => this.scrollToID(e, '#Contact')}>
          Contact
        </Link>
      </ScNav>
    )
  }
}
