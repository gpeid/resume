import PropTypes from "prop-types"
import * as React from "react"
import { Link } from "gatsby"

const ContactLink = ({ url }) => {
  return <Link className="link dim" to={url}>{url}</Link>
}

ContactLink.propTypes = {
  url: PropTypes.string,
}

export default ContactLink
