import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { ScAbout } from '../styles/'
import Card from './card'
import Container from './container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faArrowDown } from '@fortawesome/free-solid-svg-icons'

/* eslint-disable */
// anchor links are to positions, no href needed
// TODO - check into screen reader a11y of this

export default class About extends Component {
  scrollToWork = () => {
    window.scrollTo({
      top: document.querySelector('#Work').offsetTop,
      behavior: 'smooth',
    })
  }

  render() {
    return (
      <ScAbout>
        <StaticQuery
          query={ABOUT_SECTION_QUERY}
          render={({ wordpressPage: { acf } }) => (
            <Container>
              <div className="about-header">
                <h2>{acf.about_title}</h2>
                <p>{acf.about_subtitle}</p>
              </div>
              <Card
                src={acf.about_sec1_thumbnail}
                title={acf.about_sec1_title}
                content={acf.about_sec1_content}
                right={false}
              />
              <Card
                src={acf.about_sec2_thumbnail}
                right={true}
                title={acf.about_sec2_title}
                content={acf.about_sec2_content}
              >
                <a
                  className="button primary"
                  href="https://res.cloudinary.com/dov1pamgz/image/upload/v1547494960/Resume_LombardoLucas.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                  <FontAwesomeIcon icon={faDownload} />
                </a>
                <a className="button secondary" onClick={this.scrollToWork}>
                  Portfolio
                  <FontAwesomeIcon icon={faArrowDown} />
                </a>
              </Card>
            </Container>
          )}
        />
      </ScAbout>
    )
  }
}

const ABOUT_SECTION_QUERY = graphql`
  query ABOUT_SECTION_QUERY {
    wordpressPage(slug: { eq: "home" }) {
      acf {
        about_title
        about_sec1_thumbnail
        about_sec1_content
        about_sec2_thumbnail
        about_sec2_content
      }
    }
  }
`
