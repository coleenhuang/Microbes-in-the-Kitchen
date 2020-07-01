import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useTranslation } from "react-i18next"

const Header = ({ siteTitle }) => {
  const { t } = useTranslation();
  return (<header
    style={{
      display: 'block',
      marginTop: '1.45rem',
      marginBottom: `1rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0, textAlign: 'center' }}>
        <Link
          to="/"
          style={{
            fontFamily:'Ovo',
            color: 'black',
            textDecoration: `none`,
          }}
        >
          {t('siteMetadata.title')}
        </Link>
      </h1>
    </div>
  </header>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
