import React from 'react'
import NavLinks from './NavLinks'
import styles from './Menu.module.css'

const Menu = () => {
  return (
    <div className={styles.menuWrapper}>
      <NavLinks />
    </div>
  )
}

export default Menu
