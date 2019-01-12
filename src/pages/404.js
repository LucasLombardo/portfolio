import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Page Not Found</h1>
    <p>It's possible the page you are looking for has been moved or deleted.</p>
  </Layout>
)

export default NotFoundPage
