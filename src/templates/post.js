import React, { Component } from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

class PageTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost
    return (
      <Layout>
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
        <p>
          Published: {post.date} Modified: {post.modified}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </Layout>
    )
  }
}

export default PageTemplate

export const POST_PAGE_QUERY = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      slug
      date(formatString: "MMMM DD, YYYY")
      modified(formatString: "MMMM DD, YYYY")
    }
  }
`
