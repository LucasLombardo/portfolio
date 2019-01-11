import React, { Component } from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

class PageTemplate extends Component {
  render() {
    const currentPage = this.props.data.wordpressPage
    return (
      <Layout>
        <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
        <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
      </Layout>
    )
  }
}

export default PageTemplate

export const PAGE_TEMPLATE_QUERY = graphql`
  query PAGE_TEMPLATE_QUERY($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      slug
    }
  }
`
