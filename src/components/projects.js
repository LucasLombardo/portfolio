import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { ScProjects } from '../styles'
import Project from './project'
import Container from './container'

const Projects = () => (
  <StaticQuery
    query={PROJECT_POST_QUERY}
    render={({ allWordpressPost: { edges } }) => (
      <ScProjects>
        <Container>
          <header>
            <h2>Projects</h2>
          </header>
          {edges.map(({ node }) => (
            <Project info={node.acf} key={node.id} />
          ))}
        </Container>
      </ScProjects>
    )}
  />
)

// Posts saved as Format: aside
const PROJECT_POST_QUERY = graphql`
  query PROJECT_POST_QUERY {
    allWordpressPost(filter: { format: { eq: "aside" } }) {
      edges {
        node {
          id
          acf {
            title
            thumbnail
            description
            link
            tags
            code_link
          }
        }
      }
    }
  }
`

export default Projects
