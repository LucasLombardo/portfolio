import React, { Component } from 'react'
import Layout from '../components/layout'
import Header from '../components/header'
import About from '../components/about'
import Skills from '../components/skills'
import Projects from '../components/projects'
import Contact from '../components/contact'
import SEO from '../components/seo'

export default class IndexPage extends Component {
  render() {
    return (
      <Layout isHome={true}>
        <SEO
          title="Home"
          keywords={[
            `lucas lombardo`,
            `portfolio`,
            `web development`,
            `junior web developer`,
            `boston`,
            `greater boston`,
            `react`,
            `reactjs`,
            `blog`,
            `general assembly`,
            `javascript`,
          ]}
        />
        <Header />
        <span id="About" />
        <About />
        <Skills />
        <span id="Work" />
        <Projects />
        <span id="Contact" />
        <Contact action="/thanks/" />
      </Layout>
    )
  }
}
