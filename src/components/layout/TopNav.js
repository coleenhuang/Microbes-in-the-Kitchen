import React from 'react'
import styles from './TopNav.module.css'
import { Link } from 'gatsby'

import Lang from './Lang.js'

const TopNav = (props) => {
    return (
        <div className={styles.flexContainer}>
          <div onClick={props.switch}> Menu </div>
          <Lang />
        </div>
    )
}

export default TopNav;
