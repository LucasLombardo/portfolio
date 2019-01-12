import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { ScHeader } from '../styles/'

const Header = () => (
  <ScHeader>
    <StaticQuery
      query={HOME_PAGE_QUERY}
      render={({ wordpressPage }) => (
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: wordpressPage.content }}
        />
      )}
    />
  </ScHeader>
)

const HOME_PAGE_QUERY = graphql`
  query HOME_PAGE_QUERY {
    wordpressPage(slug: { eq: "home" }) {
      content
    }
  }
`

export default Header
