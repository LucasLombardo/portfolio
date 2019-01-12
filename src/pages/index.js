import React, { Component } from 'react'
import Layout from '../components/layout'
import RecentPosts from '../components/recentPosts'
import Header from '../components/header'
import SEO from '../components/seo'

export default class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Header />
        <RecentPosts />
      </Layout>
    )
  }
}
