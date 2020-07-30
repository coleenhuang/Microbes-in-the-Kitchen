import React from 'react'
import styles from './TopNav.module.css'
import { Link } from 'gatsby'
import { useTranslation } from "react-i18next"

import Lang from './Lang.js'
import TopNavLinks from './TopNavLinks'


const TopNav = (props) => {
  const { t } = useTranslation();
    return (
        <div className={styles.flexContainer}>
          <div className={styles.menuButton} onClick={props.switch}> {t('menu')} </div>
          <TopNavLinks />
          <Lang altLang={props.altLang} />
        </div>
    )
}

export default TopNav;
