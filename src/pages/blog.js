import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { ScBlog } from '../styles'
import BlogList from '../components/blogList'
import Container from '../components/container'

export default class BlogPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <ScBlog>
          <Container>
            <header>
              <h1>Blog</h1>
            </header>
            <BlogList />
          </Container>
        </ScBlog>
      </Layout>
    )
  }
}
