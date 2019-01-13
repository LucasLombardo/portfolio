import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { ScAbout } from '../styles/'
import Card from './card'
import Button from './button'
import Container from './container'

const About = () => (
  <ScAbout id="about">
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
            thumbnailLeft={true}
          />
          <Card
            src={acf.about_sec2_thumbnail}
            thumbnailLeft={false}
            title={acf.about_sec2_title}
            content={acf.about_sec2_content}
          >
            <Button btnType="primary">View Resume</Button>
            <Button btnType="secondary">View Portfolio</Button>
          </Card>
        </Container>
      )}
    />
  </ScAbout>
)

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

export default About
