import React from 'react'
import NavLinks from './NavLinks'
import styles from './Menu.module.css'

const Menu = (props) => {
  //Drop down menu for mobile
  return (
    <div
      className={`${styles.menuWrapper} ${props.open&&styles.active}`}
      onClick={props.switch}>
      <NavLinks />
    </div>
  )
}

export default Menu
