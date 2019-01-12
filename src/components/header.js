import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { ScHeader } from '../styles/'

const Header = () => (
  <ScHeader>
    <StaticQuery
      query={HOME_PAGE_QUERY}
      render={({ wordpressPage }) => (
        <div className="content">
          <h1>{wordpressPage.acf.header_title}</h1>
          <p>{wordpressPage.acf.header_subtitle}</p>
        </div>
      )}
    />
  </ScHeader>
)

const HOME_PAGE_QUERY = graphql`
  query HOME_PAGE_QUERY {
    wordpressPage(slug: { eq: "home" }) {
      acf {
        header_title
        header_subtitle
      }
    }
  }
`

export default Header
