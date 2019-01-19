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
            <h2>{acf.skills.title}</h2>
          </header>
          <div className="skills-wrapper">
            <Skill
              title={acf.skills.s1.title}
              desc={acf.skills.s1.description}
              thumb={acf.skills.s1.thumbnail}
            />
            <Skill
              title={acf.skills.s2.title}
              desc={acf.skills.s2.description}
              thumb={acf.skills.s2.thumbnail}
            />
            <Skill
              title={acf.skills.s3.title}
              desc={acf.skills.s3.description}
              thumb={acf.skills.s3.thumbnail}
            />
          </div>
        </Container>
      )}
    />
  </ScSkills>
)

const SKILLS_QUERY = graphql`
  query SKILLS_QUERY {
    wordpressPage(slug: { eq: "home" }) {
      acf {
        skills {
          title
          s1 {
            title
            thumbnail
            description
          }
          s2 {
            title
            thumbnail
            description
          }
          s3 {
            title
            thumbnail
            description
          }
        }
      }
    }
  }
`

export default Skills
