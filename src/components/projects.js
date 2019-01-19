import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { ScProjects } from '../styles'
import Project from './project'
import Container from './container'

const Projects = () => (
  <ScProjects>
    <StaticQuery
      query={PROJECTS_QUERY}
      render={({ wordpressPage: { acf } }) => (
        <Container>
          <header>
            <h2>Projects</h2>
          </header>
          {acf.projects.map((project, i) => (
            <Project
              info={project}
              key={project.title}
              right={i % 2 === 0 ? '' : 'right'}
            />
          ))}
        </Container>
      )}
    />
  </ScProjects>
)

const PROJECTS_QUERY = graphql`
  query PROJECTS_QUERY {
    wordpressPage(slug: { eq: "home" }) {
      acf {
        projects {
          title
          thumbnail
          description
          link
          code_link
          tags {
            tag
          }
        }
      }
    }
  }
`

export default Projects
