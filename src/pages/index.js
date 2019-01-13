import React, { Component } from 'react'
import Layout from '../components/layout'
import Header from '../components/header'
import About from '../components/about'
import Skills from '../components/skills'
import Projects from '../components/projects'
import SEO from '../components/seo'

export default class IndexPage extends Component {
  render() {
    return (
      <Layout isHome={true}>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Header />
        <About />
        <Skills />
        <Projects />
      </Layout>
    )
  }
}
