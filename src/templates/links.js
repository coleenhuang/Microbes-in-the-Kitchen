import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout/layout'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from 'gatsby-source-prismic-graphql';
import { useTranslation } from 'react-i18next';
import { language } from 'i18next'

export const query = graphql`
query linkQuery($uid: String! $lang: String!) {
  prismic {
    links(lang: $lang, uid: $uid) {
      _meta {
        id
        lang
        type
        uid
        alternateLanguages {
          uid
          id
          type
          lang
        }
      }
      body
      title
    }
  }
}
`

export default ({data, pageContext}) => {
  const linkPage = data.prismic.links
  if (!linkPage) return null
  const altLang = linkPage._meta.alternateLanguages?linkPage._meta.alternateLanguages[0]:null

  return (
    <Layout altLang={altLang}>
      <RichText render={linkPage.title} />
      <div className='links'>
        <RichText render={linkPage.body}/>
      </div>
    </Layout>
  )
}
