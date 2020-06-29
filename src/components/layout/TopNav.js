import React from 'react'
import styles from './TopNav.module.css'
import { Link } from 'gatsby'
import Lang from './Lang.js'

const TopNav = () => {
    return (
        <div className={styles.flexContainer}>
          <div>Menu</div>
          <Lang />
        </div>
    )
}

export default TopNav;
