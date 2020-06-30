import React from 'react'
import styles from './NavLinks.module.css'
import { Link } from 'gatsby'
const NavLinks =  () => {
  return (
    <ul className={styles.container}>
        <li>
            <Link to='/about'>About</Link>
        </li>
        <li>
            <Link to='/bookshelf'>
                Bookshelf
            </Link>
        </li>
        <li>
            <Link to='/recipes'>
                Recipes
            </Link>
        </li>
        <li>
            Seasons
        </li>
        <li>
          Links
        </li>
    </ul>
  )
}

export default NavLinks
