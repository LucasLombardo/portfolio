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
          keywords={[`Lucas Lombardo`, `Portfolio`, `Web Development`]}
        />
        <Header />
        <a id="About" />
        <About />
        <Skills />
        <a id="Work" />
        <Projects />
        <a id="Contact" />
        <Contact action="/thanks/" />
      </Layout>
    )
  }
}
