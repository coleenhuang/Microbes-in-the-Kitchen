import React from 'react'
import styles from './TopNav.module.css'

const TopNav = () => {
    return (
        <div>
            <ul className={styles.flexContainer}>
                <li>About</li>
                <li>Bookshelf</li>
                <li>Recipes</li>
                <li>Tips</li>
            </ul>
        </div>
    )
}

export default TopNav;