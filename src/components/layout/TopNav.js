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
                    <Link to='/recipes'>
                        Recipes
                    </Link>     
                </li>
                <li>
                    <Link to='/tags'>
                        Tags
                    </Link>     
                </li>
            </ul>
        </div>
    )
}

export default TopNav;