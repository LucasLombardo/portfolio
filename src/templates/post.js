import React, { Component } from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import Container from '../components/container'
import Button from '../components/button'
import { ScPost } from '../styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost
    return (
      <Layout>
        <ScPost>
          <Container>
            <header>
              <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
              <p>
                Published: {post.date} Modified: {post.modified}
              </p>
            </header>
            <div className="post-body">
              <div
                className="post-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              <Link to="/blog">
                <Button>
                  <FontAwesomeIcon icon={faArrowLeft} />
                  Back to Blog
                </Button>
              </Link>
            </div>
          </Container>
        </ScPost>
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
