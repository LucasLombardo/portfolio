import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default class IndexPage extends Component {
  render() {
    const { content } = this.props.data.wordpressPage
    const { edges } = this.props.data.allWordpressPost
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <ul>
          {edges.map(({ node }) => (
            <li key={node.id}>
              <Link to={node.slug}>{node.title}</Link>
            </li>
          ))}
        </ul>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    wordpressPage(slug: { eq: "home" }) {
      content
    }
    allWordpressPost {
      edges {
        node {
          id
          title
          date(formatString: "MMMM DD, YYYY")
          slug
          excerpt
        }
      }
    }
  }
`
