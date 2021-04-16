import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import ContactLink from "./../contactLink"
import * as styles from "./header.module.css"

const Header = ({ siteTitle, links }) => (
  <header className={`${styles.header} mb4 pb3 bb b--black-10`}>
    <div className={styles.section_name}>
      <h1 className={`${styles.name} mb3 mt0 lh-title`}>
        <Link className={`link dim`} to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div className={styles.section_contact_list_container}>
      <ul className={`${styles.contact_list} mb0 ph0`}>
        {links.map((link, index) => {
          return (
            <li key={index}>
              <a className="link dim" href={link.url}>{link.url}</a>
            </li>
          )
        })}
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
