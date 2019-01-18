import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { ScFooter } from '../styles'
// font awesome svg icon imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

export default class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayEmail: false,
    }
    this.emailInput = React.createRef()
  }
  toggleEmail = () => {
    // toggles a box for copying email address, for users that don't have mailto link handling
    this.setState({ displayEmail: !this.state.displayEmail })
  }
  copyEmail = () => {
    this.emailInput.current.select()
    document.execCommand('copy')
  }

  render() {
    return (
      <ScFooter>
        <StaticQuery
          query={FOOTER_QUERY}
          render={({ wordpressPage: { acf } }) => (
            <>
              {acf.twitter && (
                <a href={acf.twitter} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={['fab', 'twitter']} />
                </a>
              )}
              {acf.github && (
                <a href={acf.github} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={['fab', 'github']} />
                </a>
              )}
              {acf.codepen && (
                <a href={acf.codepen} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={['fab', 'codepen']} />
                </a>
              )}
              {acf.linkedin && (
                <a
                  href={acf.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={['fab', 'linkedin']} />
                </a>
              )}
              {acf.email && (
                <div className="email">
                  <a href={`mailto:${acf.email}`} onClick={this.toggleEmail}>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                  {this.state.displayEmail && (
                    <div className="email-copy">
                      <input
                        type="text"
                        value={acf.email}
                        ref={this.emailInput}
                        readOnly
                      />
                      <button className="button" onClick={this.copyEmail}>
                        Copy Email
                      </button>
                    </div>
                  )}
                </div>
              )}
              <p>{acf.copyright}</p>
            </>
          )}
        />
      </ScFooter>
    )
  }
}

const FOOTER_QUERY = graphql`
  query FOOTER_QUERY {
    wordpressPage(slug: { eq: "footer" }) {
      acf {
        copyright
        twitter
        github
        linkedin
        codepen
        email
      }
    }
  }
`
