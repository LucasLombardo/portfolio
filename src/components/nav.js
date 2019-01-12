import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'
import { ScNav } from '../styles'

const Nav = () => (
  <StaticQuery
    query={NAV_QUERY}
    render={data => (
      <ScNav>
        <Link to="">Lucas Lombardo</Link>
        {data.allWordpressPage.edges.map(
          ({ node }) =>
            node.slug !== 'home' && (
              <Link to={node.slug} key={node.id}>
                {node.title}
              </Link>
            )
        )}
      </ScNav>
    )}
  />
)
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

export default Nav
