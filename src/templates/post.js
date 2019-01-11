import React, { Component } from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import PostList from '../components/postList'

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost
    return (
      <Layout>
        <div className="post-template">
          <div>
            <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
            <p>
              Published: {post.date} Modified: {post.modified}
            </p>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          <PostList />
        </div>
      </Layout>
    )
  }
}

export default PostTemplate

export const POST_TEMPLATE_QUERY = graphql`
  query POST_TEMPLATE_QUERY($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      slug
      date(formatString: "MMMM DD, YYYY")
      modified(formatString: "MMMM DD, YYYY")
    }
  }
`
