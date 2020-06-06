import React from 'react'
import styles from './TopNav.module.css'
import { Link } from 'gatsby'

const TopNav = () => {
    const lang='en-us'
    return (
        <div className={styles.position}>
            <ul className={styles.flexContainer}>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/bookshelf'>
                        Bookshelf
                    </Link>
                </li>
                <li>
                    Recipes</li>
                <li>Tags</li>
            </ul>
        </div>
    )
}

export default TopNav;