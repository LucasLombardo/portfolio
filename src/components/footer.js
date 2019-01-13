import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { ScFooter } from '../styles'
// font awesome svg icon imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

const Footer = () => (
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
            <a href={acf.linkedin} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'linkedin']} />
            </a>
          )}
          {acf.email && (
            <a href={acf.email} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          )}
          <p>{acf.copyright}</p>
        </>
      )}
    />
  </ScFooter>
)

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

export default Footer
