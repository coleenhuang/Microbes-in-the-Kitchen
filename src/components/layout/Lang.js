import React, { useState } from 'react'
import { useTranslation, language } from 'react-i18next'

const Lang = () => {
  const { t, i18n } = useTranslation()
  const [lang, setLang] = useState('en-us');

  function changeLang() {
    let lang = i18n.language==='en-us'?'zh-tw':'en-us'
    i18n.changeLanguage(lang)
    setLang(lang);
  }

  return (
    <div onClick={changeLang}>{t("langMenu")}</div>
  )
}

export default Lang
