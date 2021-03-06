import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'
import { ScBlogList } from '../styles'

const BlogList = () => (
  <StaticQuery
    query={BLOG_LIST_QUERY}
    render={({ allWordpressPost: { edges } }) => (
      <ScBlogList>
        {edges.map(({ node }) => (
          <article key={node.id}>
            <p className="date">{node.date}</p>
            <h2>
              <Link to={node.slug}>{node.title}</Link>
            </h2>
            <p>{node.acf.excerpt}</p>
            <Link className="button" to={node.slug}>
              Read More
            </Link>
          </article>
        ))}
      </ScBlogList>
    )}
  />
)

const BLOG_LIST_QUERY = graphql`
  query BLOG_LIST_QUERY {
    allWordpressPost(sort: { fields: date, order: DESC }) {
      edges {
        node {
          id
          slug
          title
          content
          format
          acf {
            excerpt
          }
          categories {
            id
            slug
          }
          date(formatString: "MMMM DDDo, YYYY")
        }
      }
    }
  }
`

export default BlogList
