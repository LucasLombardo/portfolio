import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { ScHeader } from '../styles/'

const SvgChevron = () => (
  <svg x="0px" y="0px" viewBox="0 0 512 512">
    <path
      d="M509.121,125.966c-3.838-3.838-10.055-3.838-13.893,0L256.005,365.194L16.771,125.966c-3.838-3.838-10.055-3.838-13.893,0
            c-3.838,3.838-3.838,10.055,0,13.893l246.18,246.175c1.842,1.842,4.337,2.878,6.947,2.878c2.61,0,5.104-1.036,6.946-2.878
            l246.17-246.175C512.959,136.021,512.959,129.804,509.121,125.966z"
    />
  </svg>
)

export default class Header extends Component {
  scrollToAbout = e => {
    e.preventDefault()
    window.scrollTo({
      top: document.querySelector('#About').offsetTop,
      behavior: 'smooth',
    })
  }
  render() {
    return (
      <ScHeader>
        <StaticQuery
          query={HEADER_QUERY}
          render={({ wordpressPage: { acf } }) => (
            <>
              <div className="content">
                <h1>{acf.header.title}</h1>
                <p>{acf.header.subtitle}</p>
              </div>
              <a onClick={this.scrollToAbout} href="#About">
                <SvgChevron />
              </a>
            </>
          )}
        />
      </ScHeader>
    )
  }
}

const HEADER_QUERY = graphql`
  query HEADER_QUERY {
    wordpressPage(slug: { eq: "home" }) {
      acf {
        header {
          title
          subtitle
        }
      }
    }
  }
`
