import React, { Component } from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { ScAbout } from '../styles/'
import Card from './card'
import Container from './container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faArrowDown } from '@fortawesome/free-solid-svg-icons'

export default class About extends Component {
  scrollToWork = e => {
    e.preventDefault()
    window.scrollTo({
      top: document.querySelector('#Work').offsetTop,
      behavior: 'smooth',
    })
  }

  render() {
    return (
      <ScAbout>
        <StaticQuery
          query={ABOUT_QUERY}
          render={({ wordpressPage: { acf } }) => (
            <Container>
              <div className="about-header">
                <h2>{acf.about.title}</h2>
              </div>
              <Card
                src={acf.about.sec1.thumbnail}
                title={acf.about.sec1.title}
                content={acf.about.sec1.body}
                right={false}
              />
              <Card
                src={acf.about.sec2.thumbnail}
                right={true}
                title={acf.about.sec2.title}
                content={acf.about.sec2.body}
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
                <Link
                  className="button secondary"
                  onClick={this.scrollToWork}
                  to="#work"
                >
                  Portfolio
                  <FontAwesomeIcon icon={faArrowDown} />
                </Link>
              </Card>
            </Container>
          )}
        />
      </ScAbout>
    )
  }
}

const ABOUT_QUERY = graphql`
  query ABOUT_QUERY {
    wordpressPage(slug: { eq: "home" }) {
      acf {
        about {
          title
          sec1 {
            thumbnail
            title
            body
          }
          sec2 {
            thumbnail
            title
            body
          }
        }
      }
    }
  }
`
