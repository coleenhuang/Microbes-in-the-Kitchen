import React, {useState} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import TopNav from './TopNav'
import SideNav from '../sidenav/SideNav'
import Menu from './Menu.js'
import "./layout.css"
import { useTranslation } from "react-i18next"

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
  const { t } = useTranslation();
  const [showMenu, setMenu] = useState(false)
  const toggleMenu = () => setMenu(showMenu? false: true)

  return (
    <div>
      <Header siteTitle={data.site.siteMetadata.title} />
      <TopNav switch={toggleMenu}/>
      <Menu open={showMenu} switch={toggleMenu}/>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, {t(`siteMetadata.footer`)}
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
