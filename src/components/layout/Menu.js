import React from 'react'
import NavLinks from './NavLinks'
import styles from './Menu.module.css'

const Menu = (props) => {
  return (
    <div
      className={`${styles.menuWrapper} ${props.open&&styles.active}`}
      onClick={props.switch}>
      <NavLinks />
    </div>
  )
}

export default Menu
