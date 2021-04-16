/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./../header/header"
import "./layout.css"
import { contactLinks, education, experience } from "../../static/resumeData"
import ResumeBody from "../body/resumeBody"
import WorkExperience from "./../workExperience/workExperience"
import Education from "./../education/education.tsx"
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const mainStyles = {
    margin: `0 auto`,
    maxWidth: 960,
    padding: `0 1.0875rem 1.45rem`,
  }

  const site_title = data.site.siteMetadata?.title || `Title`

  return (
    <div className="grid center w-80 mw7 mv5">
      <Header
        links={contactLinks}
        siteTitle={
          "George Diep | software developer - javascript developer - front end developer"
        }
      />
      <div styles={mainStyles}>
        <main>{children}</main>
        <ResumeBody>
          <WorkExperience data={experience} />
          <Education data={education} />
        </ResumeBody>
        <footer>{site_title}</footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
