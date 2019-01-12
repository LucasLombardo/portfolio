import React, { Component } from 'react'
import Layout from '../components/layout'
import RecentPosts from '../components/recentPosts'
import Header from '../components/header'
import About from '../components/about'
import SEO from '../components/seo'

export default class IndexPage extends Component {
  render() {
    return (
      <Layout isHome={true}>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Header />
        <About />
        <RecentPosts />
      </Layout>
    )
  }
}
