import React, { useState } from 'react'
import { Link } from 'gatsby'
import { useTranslation, language } from 'react-i18next'
import { linkResolver } from 'gatsby-source-prismic-graphql';

const Lang = ({altLang}) => {
  const { t, i18n } = useTranslation()
  const [lang, setLang] = useState('en-us');

  //if there is no altLang for that page
  //creates a homepage link for the selected language
  //i18n.language gets the current language
  const otherHome = i18n.language==='en-us'?'/zh':'/'

  function changeLang() {
    let lang = i18n.language==='en-us'?'zh-tw':'en-us'
    i18n.changeLanguage(lang)
    setLang(lang);
  }

  console.log(altLang)
  if (altLang) {
    return (
      <Link to={linkResolver(altLang)} onClick={changeLang}>
        {t("langMenu")}
      </Link>)
  }
  else{
    return (
    <Link to={otherHome} onClick={changeLang}>
      <span style={{display:'block'}}>{t("langMenu")}</span>
    </Link>
  )}
  
}

export default Lang
