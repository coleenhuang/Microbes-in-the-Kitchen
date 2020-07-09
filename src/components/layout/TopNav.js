import React from 'react'
import styles from './TopNav.module.css'
import { Link } from 'gatsby'
import { useTranslation } from "react-i18next"

import Lang from './Lang.js'

const TopNav = (props) => {
  const { t } = useTranslation();
    return (
        <div className={styles.flexContainer}>
          <div onClick={props.switch}> {t('menu')} </div>
          <Lang altLang={props.altLang} />
        </div>
    )
}

export default TopNav;
