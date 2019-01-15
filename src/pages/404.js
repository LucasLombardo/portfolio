import React from 'react'
import Layout from '../components/layout'
import MessageBox from '../components/messageBox'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <MessageBox>
      <SEO title="404: Not found" />
      <h1>Page Not Found</h1>
      <p>Sorry, I couldn't find the page you were looking for.</p>
    </MessageBox>
  </Layout>
)

export default NotFoundPage
