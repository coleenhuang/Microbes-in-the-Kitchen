import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import { RichText } from 'prismic-reactjs'
import { useTranslation } from 'react-i18next';
import { language } from 'i18next'

export const query = graphql`
query aboutQuery($uid: String! $lang: String!){
    prismic {
        about(uid: $uid, lang: $lang) {
          _meta {
            id
            lang
            uid
            alternateLanguages {
              uid
              id
              type
              lang
            }
          }
          body
          image
          title
        }
      }
}`

export default ({data, pageContext}) => {
    const about = data.prismic.about
    if (!about) return null
    const { i18n } = useTranslation();
    if (pageContext.lang !== i18n.language) {
      i18n.changeLanguage(pageContext.lang)
    }
    const altLang = about._meta.alternateLanguages[0]

    return (
    <Layout altLang={altLang}>
        <RichText render={about.title} />
        <img
            src={about.image.url}
            alt={about.image.alt}
            style={{display:'block', margin:'0 auto'}}/>
        <RichText render={about.body} />
    </Layout>
    )
}
