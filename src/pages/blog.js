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
        <SEO title="Blog" keywords={[`lucas lombardo`, `blog`, `react`, `web development`, `javascript`, `jamstack`, `gatsby`, `developer`, `boston`, `coding`]} />
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
