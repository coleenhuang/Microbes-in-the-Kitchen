import React from 'react'
import styles from './NavLinks.module.css'
import { Link } from 'gatsby'
import { useTranslation } from "react-i18next"


const NavLinks =  () => {
    const { t } = useTranslation();
  return (
    <ul className={styles.container}>
        <li>
            <Link to='/about'>{t('nav.about')}</Link>
        </li>
        <li>
            <Link to='/bookshelf'>
            {t('nav.bookshelf')}
            </Link>
        </li>
        <li>
            <Link to='/recipes'>
                {t('nav.recipes')}
            </Link>
        </li>
        <li>
            {t('nav.links')}
        </li>
    </ul>
  )
}

export default NavLinks
