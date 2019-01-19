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
              {acf.footer.twitter && (
                <a
                  href={acf.footer.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={['fab', 'twitter']} />
                </a>
              )}
              {acf.footer.github && (
                <a
                  href={acf.footer.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={['fab', 'github']} />
                </a>
              )}
              {acf.footer.codepen && (
                <a
                  href={acf.footer.codepen}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={['fab', 'codepen']} />
                </a>
              )}
              {acf.footer.linkedin && (
                <a
                  href={acf.footer.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={['fab', 'linkedin']} />
                </a>
              )}
              {acf.footer.email && (
                <div className="email">
                  <a
                    href={`mailto:${acf.footer.email}`}
                    onClick={this.toggleEmail}
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                  {this.state.displayEmail && (
                    <div className="email-copy">
                      <input
                        type="text"
                        value={acf.footer.email}
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
              <p>
                Copyright © {new Date().getFullYear()} Lucas Lombardo. All
                rights reserved.
              </p>
            </>
          )}
        />
      </ScFooter>
    )
  }
}

const FOOTER_QUERY = graphql`
  query FOOTER_QUERY {
    wordpressPage(slug: { eq: "home" }) {
      acf {
        footer {
          twitter
          github
          linkedin
          codepen
          email
        }
      }
    }
  }
`
