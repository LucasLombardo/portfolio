import React, { Component } from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import Container from '../components/container'
import SEO from '../components/seo'
import Button from '../components/button'
import { ScPost } from '../styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Prism from 'prismjs'
import '../prism.css'

class PostTemplate extends Component {
  componentDidMount() {
    Prism.highlightAll()
  }

  render() {
    const post = this.props.data.wordpressPost
    return (
      <Layout>
        <SEO
          title={`Blog title="${post.title}"`}
          keywords={[
            `lucas lombardo`,
            `blog`,
            `react`,
            `web development`,
            `javascript`,
            `jamstack`,
            `gatsby`,
            `developer`,
            `boston`,
            `coding`,
          ]}
          description={post.title}
        />
        <ScPost>
          <Container>
            <header>
              <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
              <p>
                Published: {post.date}, Modified: {post.modified}
              </p>
            </header>
            <div className="post-body">
              {post.acf.featured_image && (
                <img src={post.acf.featured_image} alt="" />
              )}
              <div className="post-text">
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
      date(formatString: "MMMM DDDo, YYYY")
      modified(formatString: "MMMM DDDo, YYYY")
      acf {
        featured_image
        excerpt
      }
    }
  }
`
