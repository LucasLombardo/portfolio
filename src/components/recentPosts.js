import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'

const RecentPosts = () => (
  <StaticQuery
    query={RECENT_POSTS_QUERY}
    render={data => (
      <aside>
        <h3>Recent Posts:</h3>
        <ul>
          {data.allWordpressPost.edges.map(({ node }) => (
            <li key={node.id}>
              <Link to={node.slug}>{node.title}</Link>
            </li>
          ))}
        </ul>
      </aside>
    )}
  />
)

const RECENT_POSTS_QUERY = graphql`
  query RECENT_POSTS_QUERY {
    allWordpressPost(sort: { fields: date, order: DESC }, limit: 5) {
      edges {
        node {
          id
          slug
          title
          date(formatString: "YYYY MMMM DD")
        }
      }
    }
  }
`

export default RecentPosts
