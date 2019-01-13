import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { ScSkills } from '../styles/'
import Container from './container'
import Skill from './skill'

const Skills = () => (
  <ScSkills>
    <StaticQuery
      query={SKILLS_QUERY}
      render={({ wordpressPage: { acf } }) => (
        <Container>
          <header>
            <h2>Top Skills</h2>
          </header>
          <div className="skills-wrapper">
            <Skill
              title={acf.s1_title}
              desc={acf.s1_description}
              thumb={acf.s1_thumbnail}
            />
            <Skill
              title={acf.s2_title}
              desc={acf.s2_description}
              thumb={acf.s2_thumbnail}
            />
            <Skill
              title={acf.s3_title}
              desc={acf.s3_description}
              thumb={acf.s3_thumbnail}
            />
          </div>
        </Container>
      )}
    />
  </ScSkills>
)

const SKILLS_QUERY = graphql`
  query SKILLS_QUERY {
    wordpressPage(slug: { eq: "skills" }) {
      acf {
        s1_title
        s1_thumbnail
        s1_description
        s2_title
        s2_thumbnail
        s2_description
        s3_title
        s3_thumbnail
        s3_description
      }
    }
  }
`

export default Skills
