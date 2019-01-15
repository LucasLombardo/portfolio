import React from 'react'
import Layout from '../components/layout'
import MessageBox from '../components/messageBox'
import SEO from '../components/seo'

const Thanks = () => (
  <Layout>
    <MessageBox>
      <SEO title="Thank You" />
      <h1>Thank You!</h1>
      <p>Message Submitted Successfully</p>
    </MessageBox>
  </Layout>
)

export default Thanks
