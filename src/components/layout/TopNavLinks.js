import React from 'react'
import styles from './TopNavLinks.module.css'
import { Link } from 'gatsby'
import { useTranslation } from "react-i18next"


const TopNavLinks =  () => {
    const { t } = useTranslation();
  return (

          <ul className={styles.container}>
            <li>
                <Link to={t('nav.aboutLink')}>{t('nav.about')}</Link>
            </li>
            <li>
                <Link to={t('nav.bookshelfLink')}>
                {t('nav.bookshelf')}
                </Link>
            </li>
            <li>
                <Link to={t('nav.recipesLink')}>
                    {t('nav.recipes')}
                </Link>
            </li>
            <li>
                <Link to={t('nav.linkPageLink')}>
                {t('nav.links')}
                </Link>
            </li>
        </ul>


    
  )
}

export default TopNavLinks