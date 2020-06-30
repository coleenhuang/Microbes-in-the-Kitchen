import React from 'react'
import NavLinks from './NavLinks'
import styles from './Menu.module.css'

const Menu = (props) => {
  return (
    <div className={styles.menuWrapper} style={{top: `${props.open?'200px':'-100vh'}`}}>
      <NavLinks />
    </div>
  )
}

export default Menu
