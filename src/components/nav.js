import React, { Component } from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'
import Container from './container'

const NAV_QUERY = graphql`
  query NAV_QUERY {
    allWordpressPage(sort: { fields: date, order: ASC }) {
      edges {
        node {
          id
          slug
          title
        }
      }
    }
  }
`

export default class Nav extends Component {
  render() {
    return (
      <StaticQuery
        query={NAV_QUERY}
        render={data => (
          <nav>
            <Container>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {data.allWordpressPage.edges.map(({ node }) => (
                  <Link
                    to={node.slug === 'home' ? '' : node.slug}
                    key={node.id}
                  >
                    {node.title}
                  </Link>
                ))}
              </div>
            </Container>
          </nav>
        )}
      />
    )
  }
}
